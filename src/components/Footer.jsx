import { Download } from 'lucide-react'
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

            <button className="download-btn" onClick={handleDownload}>
                <Download size={20} />
                Download PDF Calendar
            </button>

            <p className="footer-info">
                Source: Islamic Society of North America | Fajr 15.0°, Isha 15.0°
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
