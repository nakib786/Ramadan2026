# Ramadan 2026 Prayer Timetable

A modern, responsive web application for displaying Ramadan 2026 prayer times for Williams Lake, BC.

## Features

✨ **Modern Design**
- Beautiful gradient backgrounds and smooth animations
- Dark mode support with theme toggle
- Responsive design for all devices
- Print-friendly layout

🕌 **Prayer Times**
- Complete 30-day Ramadan timetable
- Live prayer times display
- Highlighted Suhoor (Fajr) and Iftar (Maghrib) times
- Clickable rows for detailed prayer time view

⏰ **Countdown Timer**
- Real-time countdown to Ramadan start
- Current Ramadan day indicator during the month
- Automatic updates every second

📖 **Islamic Content**
- Auto-playing Dua slideshow
- Suhoor and Iftar duas
- Quranic verses and Hadith
- Arabic text with English translations

🔍 **Enhanced Features**
- Search/filter prayer times by date or day
- Share functionality (Web Share API)
- Print button for physical copies
- PDF calendar download
- Daylight Saving Time notifications

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Styling with CSS variables for theming

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The app will be available at `http://localhost:5173` when running the dev server.

## Project Structure

```
ramadan-timetable-vite/
├── public/
│   ├── CCIC_Ramadan_Calender_2026.pdf
│   └── crescent.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx/css
│   │   ├── LivePrayerTimes.jsx/css
│   │   ├── Countdown.jsx/css
│   │   ├── PrayerTable.jsx/css
│   │   ├── DuaSlideshow.jsx/css
│   │   ├── Footer.jsx/css
│   │   └── PrayerModal.jsx/css
│   ├── data/
│   │   └── ramadanData.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Features in Detail

### Theme Toggle
Click the moon/sun icon in the header to switch between light and dark modes. Your preference is saved in localStorage.

### Search Functionality
Use the search box above the prayer table to filter by date or Ramadan day number.

### Prayer Details Modal
Click on any row in the prayer table to see detailed prayer times for that day.

### Dua Slideshow
- Automatically cycles through duas every 8 seconds
- Manual navigation with Previous/Next buttons
- Click dots to jump to specific dua
- Includes Arabic text with English translations

### Print Support
Click the printer icon to print a clean, formatted version of the timetable.

### Share Feature
Click the share icon to share the timetable via:
- Native share dialog (on supported devices)
- Clipboard copy (fallback)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

**Prayer Times Source:** Islamic Society of North America (ISNA)
- Fajr: 15.0°
- Isha: 15.0°
- Fiqh Jafria: Suhoor Time -10min | Iftar Time +10min

**Organization:** Central Cariboo Islamic Center - The BC Muslim Association

**Location:** Williams Lake, BC, Canada

## License

© 2026 Central Cariboo Islamic Center - The BC Muslim Association

---

May Allah accept our fasts and prayers. Ramadan Mubarak! 🌙
