import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'
import { ramadanData } from '../data/ramadanData'
import './LivePrayerTimes.css'

function LivePrayerTimes() {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [todaysPrayers, setTodaysPrayers] = useState(null)

    useEffect(() => {
        // Update time every second
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        // Find today's prayer times from the static data
        // Matches format: "Wednesday, February 18, 2026"
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const todayStr = currentTime.toLocaleDateString('en-US', options);

        const todayData = ramadanData.find(day => day.date === todayStr);
        setTodaysPrayers(todayData);
    }, [currentTime])

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }

    // Prepare data for display based on the PDF keys
    const prayersToDisplay = todaysPrayers ? [
        { name: 'Fajr', time: todaysPrayers.fajr },
        { name: 'Sunrise', time: todaysPrayers.sunrise },
        { name: 'Dhuhr', time: todaysPrayers.dhuhr },
        { name: 'Asr', time: todaysPrayers.asr },
        { name: 'Maghrib', time: todaysPrayers.maghrib },
        { name: 'Isha', time: todaysPrayers.isha }
    ] : []

    return (
        <div className="live-prayer-times">
            <div className="live-header">
                <h3>Today's Prayer Times (Williams Lake, BC)</h3>
                <div className="live-date">
                    <Clock size={16} />
                    <span>{formatDate(currentTime)} - {formatTime(currentTime)}</span>
                </div>
                <div className="source">Source: Ramadan 2026 Timetable PDF</div>
            </div>

            {todaysPrayers ? (
                <div className="live-times-grid">
                    {prayersToDisplay.map((prayer, index) => (
                        <div key={index} className="live-time-card">
                            <div className="prayer-name-live">{prayer.name}</div>
                            <div className="prayer-time-live">{prayer.time}</div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center p-4">
                    <p>No prayer times available for this date in the current timetable.</p>
                </div>
            )}
        </div>
    )
}

export default LivePrayerTimes
