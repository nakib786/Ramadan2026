import { useState, useEffect } from 'react'
import { ramadanStart, ramadanEnd } from '../data/ramadanData'
import './Countdown.css'

function Countdown() {
    const [timeLeft, setTimeLeft] = useState({})
    const [status, setStatus] = useState('before') // before, during, after

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date()

            if (now < ramadanStart) {
                const diff = ramadanStart - now
                setStatus('before')
                return {
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((diff % (1000 * 60)) / 1000)
                }
            } else if (now <= ramadanEnd) {
                setStatus('during')
                const dayNum = Math.floor((now - ramadanStart) / (1000 * 60 * 60 * 24)) + 1
                return { dayNum }
            } else {
                setStatus('after')
                return {}
            }
        }

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        setTimeLeft(calculateTimeLeft())

        return () => clearInterval(timer)
    }, [])

    const renderCountdown = () => {
        if (status === 'before') {
            return (
                <>
                    <div className="countdown-text">Ramadan Begins In:</div>
                    <div className="countdown-timer">
                        <div className="time-unit">
                            <span className="number">{timeLeft.days || 0}</span>
                            <span className="label">Days</span>
                        </div>
                        <div className="time-unit">
                            <span className="number">{timeLeft.hours || 0}</span>
                            <span className="label">Hours</span>
                        </div>
                        <div className="time-unit">
                            <span className="number">{timeLeft.minutes || 0}</span>
                            <span className="label">Minutes</span>
                        </div>
                        <div className="time-unit">
                            <span className="number">{timeLeft.seconds || 0}</span>
                            <span className="label">Seconds</span>
                        </div>
                    </div>
                </>
            )
        } else if (status === 'during') {
            return (
                <div className="countdown-text">
                    Ramadan Mubarak - Day {timeLeft.dayNum} of 30
                </div>
            )
        } else {
            return (
                <div className="countdown-text">
                    Ramadan 1447 has concluded. May Allah accept our fasts and prayers.
                </div>
            )
        }
    }

    return (
        <div className={`countdown ${status === 'during' || status === 'after' ? 'started' : ''}`}>
            {renderCountdown()}
        </div>
    )
}

export default Countdown
