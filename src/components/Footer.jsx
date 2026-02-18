import { Download, ExternalLink } from 'lucide-react'
import './Footer.css'

function Footer() {
    const handleDownload = () => {
        // Open the PDF file
        window.open('/CCIC_Ramadan_Calender_2026.pdf', '_blank')
    }

    return (
        <div className="footer">
            <div className="verse">
                <strong>May this Ramadan bring unity, compassion, and renewal to every home in our community.</strong>
                <br />
                Ramadan Mubarak
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
                <a
                    href="https://quran.williamslakemuslims.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                    style={{ textDecoration: 'none', margin: '0' }}
                >
                    <ExternalLink size={20} />
                    Digital Quran
                </a>

                <button className="download-btn" onClick={handleDownload} style={{ margin: '0' }}>
                    <Download size={20} />
                    Download PDF Calendar
                </button>
            </div>

            <p className="footer-info">
                Source: Islamic Finder | Islamic Society of North America | Fajr 15.0°, Isha 15.0°
                <br />
                Fiqh Jafria: Suhoor Time -10min | Iftar Time +10min
            </p>

            <p className="footer-copyright">
                © {new Date().getFullYear()} Central Cariboo Islamic Center - The BC Muslim Association
            </p>
        </div>
    )
}


export default Footer
