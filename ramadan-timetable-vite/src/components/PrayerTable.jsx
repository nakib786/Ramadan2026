import { useState, useEffect } from 'react'
import { Search, AlertCircle } from 'lucide-react'
import { ramadanData } from '../data/ramadanData'
import './PrayerTable.css'

function PrayerTable({ onDayClick }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredData, setFilteredData] = useState(ramadanData)

    useEffect(() => {
        if (searchTerm) {
            const filtered = ramadanData.filter(entry =>
                entry.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
                entry.day.toString().includes(searchTerm)
            )
            setFilteredData(filtered)
        } else {
            setFilteredData(ramadanData)
        }
    }, [searchTerm])

    const isToday = (dateString) => {
        const now = new Date()
        now.setHours(0, 0, 0, 0)
        const entryDate = new Date(dateString)
        entryDate.setHours(0, 0, 0, 0)
        return entryDate.getTime() === now.getTime()
    }

    const isPast = (dateString) => {
        const now = new Date()
        now.setHours(0, 0, 0, 0)
        const entryDate = new Date(dateString)
        entryDate.setHours(0, 0, 0, 0)
        return entryDate < now
    }

    return (
        <div className="table-section">
            <div className="table-header">
                <h2>Complete Ramadan Timetable</h2>
                <div className="search-box">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search by date or day..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Ramadan<br /><small>Day</small></th>
                            <th className="suhoor-col">Fajr<br /><small>Suhoor</small></th>
                            <th className="hide-mobile">Sunrise</th>
                            <th className="hide-mobile">Dhuhr</th>
                            <th className="hide-mobile">Asr</th>
                            <th className="iftar-col">Maghrib<br /><small>Iftar</small></th>
                            <th className="hide-mobile">Isha</th>
                            <th className="hide-mobile">Proposed<br /><small>Isha</small></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((entry, index) => (
                            <>
                                <tr
                                    key={index}
                                    className={`
                    ${isToday(entry.date) ? 'today' : ''}
                    ${isPast(entry.date) ? 'past' : ''}
                  `}
                                    onClick={() => onDayClick(entry)}
                                >
                                    <td className="date-col">
                                        {entry.date.split(',')[0]}, {entry.date.split(',')[1]}
                                    </td>
                                    <td>
                                        <span className="ramadan-day">{entry.day}</span>
                                    </td>
                                    <td className="suhoor-time">{entry.fajr}</td>
                                    <td className="hide-mobile">{entry.sunrise}</td>
                                    <td className="hide-mobile">{entry.dhuhr}</td>
                                    <td className="hide-mobile">{entry.asr}</td>
                                    <td className="iftar-time">{entry.maghrib}</td>
                                    <td className="hide-mobile">{entry.isha}</td>
                                    <td className="hide-mobile">{entry.proposed}</td>
                                </tr>
                                {entry.dstNotice && (
                                    <tr className="dst-notice">
                                        <td colSpan="9">
                                            <AlertCircle size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                                            Daylight Saving Time Begins - Clocks spring forward 1 hour on March 8, 2026 at 2:00 AM
                                        </td>
                                    </tr>
                                )}
                            </>
                        ))}
                    </tbody>
                </table>

                {filteredData.length === 0 && (
                    <div className="no-results">
                        No results found for "{searchTerm}"
                    </div>
                )}
            </div>
        </div>
    )
}

export default PrayerTable
