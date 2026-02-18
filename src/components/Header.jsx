import { Moon, Sun, Share2, Download, BookOpen, Bell } from 'lucide-react'
import './Header.css'

function Header({ theme, toggleTheme, notificationStatus, enablePrayerNotifications }) {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Ramadan 2026 Prayer Timetable',
                    text: 'Check out the Ramadan 2026 prayer times for Williams Lake, BC',
                    url: window.location.href
                })
            } catch (err) {
                console.log('Error sharing:', err)
            }
        } else {
            // Fallback: copy link to clipboard
            navigator.clipboard.writeText(window.location.href)
            alert('Link copied to clipboard!')
        }
    }

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = '/CCIC_Ramadan_Calender_2026.pdf'
        link.download = 'CCIC_Ramadan_Calender_2026.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="header">
            <div className="header-pattern"></div>

            <button
                type="button"
                className={`header-floating-btn header-floating-notify ${notificationStatus === 'enabled' ? 'active' : ''}`}
                onClick={enablePrayerNotifications}
                aria-label="Enable Suhoor and Iftar notifications"
                title={
                    notificationStatus === 'enabled'
                        ? 'Suhoor/Iftar alerts are enabled'
                        : 'Enable Suhoor/Iftar alerts (30 minutes before each time)'
                }
                disabled={notificationStatus === 'requesting'}
            >
                <span className="notify-icon-wrap">
                    <Bell size={24} />
                    <span className="notify-dot" aria-hidden="true" />
                </span>
                <span className="quran-text">Alerts</span>
            </button>

            <a
                href="https://quran.williamslakemuslims.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="header-floating-btn"
                title="Read Digital Quran"
            >
                <BookOpen size={24} className="quran-icon" />
                <span className="quran-text">Digital Quran</span>
            </a>

            <div className="header-logo-container">
                <img src="/logo.jpg" alt="BCMA Logo" className="header-logo" />
            </div>

            <div className="header-content">
                <h1 className="header-title">Ramadan 2026 (Hijri 1447)</h1>
                <div className="header-subtitle">Prayer Timetable</div>
                <div className="header-org">Central Cariboo Islamic Center - The BC Muslim Association</div>
            </div>

            <div className="header-actions no-print">
                <button
                    className="icon-btn"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>

                <button
                    className="icon-btn"
                    onClick={handleShare}
                    aria-label="Share"
                    title="Share this timetable"
                >
                    <Share2 size={20} />
                </button>

                <button
                    className="icon-btn"
                    onClick={handleDownload}
                    aria-label="Download PDF"
                    title="Download Timetable PDF"
                >
                    <Download size={20} />
                </button>
            </div>
        </div>
    )
}

export default Header
