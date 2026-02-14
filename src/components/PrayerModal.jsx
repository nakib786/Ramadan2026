import { X } from 'lucide-react'
import { useEffect } from 'react'
import './PrayerModal.css'

function PrayerModal({ dayData, onClose }) {
    useEffect(() => {
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const isFuture = () => {
        const now = new Date()
        const entryDate = new Date(dayData.date)
        return entryDate > now
    }

    const prayers = [
        { name: 'Fajr (Suhoor)', time: dayData.fajr, highlight: false },
        { name: 'Sunrise', time: dayData.sunrise, highlight: false },
        { name: 'Dhuhr', time: dayData.dhuhr, highlight: false },
        { name: 'Asr', time: dayData.asr, highlight: false },
        { name: 'Maghrib (Iftar)', time: dayData.maghrib, highlight: true },
        { name: 'Isha', time: dayData.isha, highlight: false },
        { name: 'Proposed Isha Prayer', time: dayData.proposed, highlight: false }
    ]

    return (
        <div className="modal" onClick={handleBackdropClick}>
            <div className="modal-content">
                <div className="modal-header">
                    <button className="close" onClick={onClose} aria-label="Close modal">
                        <X size={24} />
                    </button>
                    <h2>{dayData.date}</h2>
                    <div className="day-info">Ramadan Day {dayData.day} of 30</div>
                </div>

                <div className="modal-body">
                    {prayers.map((prayer, index) => (
                        <div
                            key={index}
                            className={`prayer-time ${prayer.highlight ? 'highlight' : ''}`}
                        >
                            <span className="prayer-name">{prayer.name}</span>
                            <span className="prayer-value">{prayer.time}</span>
                        </div>
                    ))}

                    <div className="modal-message">
                        <p>
                            {isFuture()
                                ? 'May Allah accept your preparations'
                                : 'May Allah accept your worship'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrayerModal
