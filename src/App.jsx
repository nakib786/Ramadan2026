import { useState, useEffect } from 'react'
import Header from './components/Header'
import LivePrayerTimes from './components/LivePrayerTimes'
import PrayerTable from './components/PrayerTable'
import DuaSlideshow from './components/DuaSlideshow'
import Footer from './components/Footer'
import PrayerModal from './components/PrayerModal'
import { registerPrayerNotifications } from './notifications'
import './App.css'

function App() {
    const [theme, setTheme] = useState('light')
    const [selectedDay, setSelectedDay] = useState(null)
    const [notificationStatus, setNotificationStatus] = useState('idle')

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [])

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    const enablePrayerNotifications = async () => {
        if (notificationStatus === 'enabled') {
            return
        }

        setNotificationStatus('requesting')

        try {
            const result = await registerPrayerNotifications()

            if (result.ok) {
                setNotificationStatus('enabled')

                if (result.method === 'triggers') {
                    alert('Suhoor and Iftar reminders are scheduled 30 minutes before each time.')
                } else {
                    alert(
                        'Notifications are enabled, but your browser may not support precise background scheduling. The app will still work offline.',
                    )
                }
            } else {
                setNotificationStatus('denied')
                alert(
                    'Unable to enable notifications. Please check your browser notification permissions.',
                )
            }
        } catch (err) {
            console.error('Failed to register prayer notifications', err)
            setNotificationStatus('error')
            alert('Something went wrong while enabling notifications.')
        }
    }

    const openDayDetails = (dayData) => {
        setSelectedDay(dayData)
    }

    const closeDayDetails = () => {
        setSelectedDay(null)
    }



    return (
        <div className="app">
            <div className="container">
                <Header
                    theme={theme}
                    toggleTheme={toggleTheme}
                    notificationStatus={notificationStatus}
                    enablePrayerNotifications={enablePrayerNotifications}
                />
                <LivePrayerTimes />
                <PrayerTable onDayClick={openDayDetails} />
                <DuaSlideshow />
                <Footer />
            </div>

            {selectedDay && (
                <PrayerModal
                    dayData={selectedDay}
                    onClose={closeDayDetails}
                />
            )}
        </div>
    )
}

export default App
