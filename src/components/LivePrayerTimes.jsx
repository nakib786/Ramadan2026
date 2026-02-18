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

    const getPrayerDate = (timeStr, dateStr) => {
        if (!timeStr || !dateStr) return null;
        // Clean up the time string to ensure it parses correctly
        return new Date(`${dateStr} ${timeStr}`);
    }

    const formatCountdown = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        if (hours > 0) {
            return `${hours}h ${minutes}m ${seconds}s`;
        }
        return `${minutes}m ${seconds}s`;
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
                <h3>Today's Prayer Times</h3>

                {/* Distinct Current Time Display */}
                <div className="current-time-container">
                    <div className="current-time-value">
                        {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </div>
                    <div className="current-date-value">
                        {formatDate(currentTime)}
                    </div>
                </div>

                <div className="source">Source: <a href="https://www.islamicfinder.org/">Islamic Finder</a></div>
            </div>

            {todaysPrayers ? (
                <div className="live-times-grid">
                    {prayersToDisplay.map((prayer, index) => {
                        const prayerDate = getPrayerDate(prayer.time, todaysPrayers.date);
                        const isPassed = prayerDate && currentTime > prayerDate;
                        const timeDiff = prayerDate ? prayerDate - currentTime : 0;

                        return (
                            <div
                                key={index}
                                className={`live-time-card ${isPassed ? 'passed' : ''}`}
                            >
                                <div className="prayer-name-live">{prayer.name}</div>
                                <div className="prayer-time-live">{prayer.time}</div>
                                <div className="prayer-countdown-live">
                                    {isPassed ? (
                                        <span className="status-passed">Completed</span>
                                    ) : (
                                        <span className="status-upcoming">
                                            - {formatCountdown(timeDiff)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
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
