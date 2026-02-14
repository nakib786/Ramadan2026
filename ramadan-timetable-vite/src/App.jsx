import { useState, useEffect } from 'react'
import Header from './components/Header'
import LivePrayerTimes from './components/LivePrayerTimes'
import Countdown from './components/Countdown'
import PrayerTable from './components/PrayerTable'
import DuaSlideshow from './components/DuaSlideshow'
import Footer from './components/Footer'
import PrayerModal from './components/PrayerModal'
import './App.css'

function App() {
    const [theme, setTheme] = useState('light')
    const [selectedDay, setSelectedDay] = useState(null)
    const [isRamadan, setIsRamadan] = useState(false)

    // Ramadan Start Date: Feb 17, 2026 (Adjust as needed)
    const RAMADAN_START_DATE = new Date('2026-02-17T00:00:00')

    useEffect(() => {
        const today = new Date()
        if (today >= RAMADAN_START_DATE) {
            setIsRamadan(true)
        }
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

    const openDayDetails = (dayData) => {
        setSelectedDay(dayData)
    }

    const closeDayDetails = () => {
        setSelectedDay(null)
    }



    return (
        <div className="app">
            <div className="container">
                <Header theme={theme} toggleTheme={toggleTheme} />
                {isRamadan && <LivePrayerTimes />}
                <Countdown />
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
