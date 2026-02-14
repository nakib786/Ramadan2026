import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { duas } from '../data/ramadanData'
import './DuaSlideshow.css'

function DuaSlideshow() {
    const [currentDua, setCurrentDua] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDua((prev) => (prev + 1) % duas.length)
        }, 8000)

        return () => clearInterval(timer)
    }, [])

    const nextDua = () => {
        setCurrentDua((prev) => (prev + 1) % duas.length)
    }

    const previousDua = () => {
        setCurrentDua((prev) => (prev - 1 + duas.length) % duas.length)
    }

    const goToDua = (index) => {
        setCurrentDua(index)
    }

    return (
        <div className="dua-slideshow">
            <div className="dua-container">
                {duas.map((dua, index) => (
                    <div
                        key={index}
                        className={`dua-slide ${index === currentDua ? 'active' : ''}`}
                    >
                        <div className="dua-title">{dua.title}</div>
                        <div className="dua-arabic">
                            {dua.arabic.split('\n').map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                        </div>
                        <div className="dua-translation">
                            {dua.translation.split('\n').map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="dua-controls no-print">
                    <button className="dua-btn" onClick={previousDua} aria-label="Previous dua">
                        <ChevronLeft size={20} />
                        Previous
                    </button>
                    <button className="dua-btn" onClick={nextDua} aria-label="Next dua">
                        Next
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="dua-dots no-print">
                    {duas.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentDua ? 'active' : ''}`}
                            onClick={() => goToDua(index)}
                            aria-label={`Go to dua ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DuaSlideshow
