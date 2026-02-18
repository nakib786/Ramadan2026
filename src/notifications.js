import { ramadanData } from './data/ramadanData'

const THIRTY_MINUTES_MS = 30 * 60 * 1000

function parsePrayerDate(dateString, timeString) {
    if (!dateString || !timeString) return null

    const date = new Date(`${dateString} ${timeString}`)
    if (Number.isNaN(date.getTime())) {
        return null
    }
    return date
}

export function buildPrayerNotificationSchedule() {
    const now = new Date()
    const items = []

    ramadanData.forEach((entry) => {
        const fajrDate = parsePrayerDate(entry.date, entry.fajr)
        const maghribDate = parsePrayerDate(entry.date, entry.maghrib)

        if (fajrDate) {
            const suhoorTime = new Date(fajrDate.getTime() - THIRTY_MINUTES_MS)
            if (suhoorTime > now) {
                items.push({
                    timestamp: suhoorTime.getTime(),
                    title: 'Suhoor in 30 minutes',
                    body: `Suhoor ends at ${entry.fajr} on ${entry.date}.`,
                    tag: `suhoor-${entry.day}`,
                })
            }
        }

        if (maghribDate) {
            const iftarTime = new Date(maghribDate.getTime() - THIRTY_MINUTES_MS)
            if (iftarTime > now) {
                items.push({
                    timestamp: iftarTime.getTime(),
                    title: 'Iftar in 30 minutes',
                    body: `Iftar is at ${entry.maghrib} on ${entry.date}.`,
                    tag: `iftar-${entry.day}`,
                })
            }
        }
    })

    items.sort((a, b) => a.timestamp - b.timestamp)
    return items
}

export async function registerPrayerNotifications() {
    if (typeof window === 'undefined') {
        return { ok: false, reason: 'no-window' }
    }

    if (!('Notification' in window) || !('serviceWorker' in navigator)) {
        return { ok: false, reason: 'unsupported' }
    }

    let permission = Notification.permission

    if (permission === 'default') {
        permission = await Notification.requestPermission()
    }

    if (permission !== 'granted') {
        return { ok: false, reason: 'denied' }
    }

    const registration = await navigator.serviceWorker.ready
    const schedule = buildPrayerNotificationSchedule()

    // Use Notification Triggers API where available (primarily Chrome on Android)
    const hasTriggers =
        'showTrigger' in Notification.prototype && 'TimestampTrigger' in window

    if (hasTriggers) {
        schedule.forEach((item) => {
            try {
                // eslint-disable-next-line no-undef
                const trigger = new TimestampTrigger(item.timestamp)
                registration.showNotification(item.title, {
                    body: item.body,
                    tag: item.tag,
                    showTrigger: trigger,
                    data: {
                        type: 'prayer-alert',
                        timestamp: item.timestamp,
                    },
                })
            } catch (err) {
                console.error('Failed to schedule triggered notification', err)
            }
        })

        return { ok: true, method: 'triggers' }
    }

    // Fallback: immediate confirmation notification only
    registration.showNotification('Prayer notifications enabled', {
        body: 'Your browser does not support precise scheduled alerts, but the app will still work offline.',
        tag: 'prayer-alert-info',
    })

    return { ok: true, method: 'basic' }
}

