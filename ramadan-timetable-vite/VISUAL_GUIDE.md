# 🎨 Visual Guide - Ramadan 2026 Timetable

## How to View Your Application

**The development server is running!** 

Open your web browser and navigate to:
```
http://localhost:5173
```

## What You'll See

### 1. **Header Section** 🎯
- **Background**: Beautiful green gradient (dark to light green)
- **Title**: "Ramadan 2026 (Hijri 1447)" in large, bold text
- **Subtitle**: "Prayer Timetable"
- **Organization**: "Central Cariboo Islamic Center - The BC Muslim Association"
- **Top-right corner buttons**:
  - 🌙 Moon/Sun icon (theme toggle)
  - 📤 Share icon
  - 🖨️ Print icon
- **Decorative crescent moon** watermark in the background

### 2. **Live Prayer Times** ⏰
- **Section title**: "Today's Prayer Times in Williams Lake, BC"
- **Live clock**: Shows current date and time, updating every second
- **6 prayer cards** in a responsive grid:
  - Fajr: 5:54 AM
  - Sunrise: 7:29 AM
  - Dhuhr: 12:23 PM
  - Asr: 2:49 PM
  - Maghrib: 5:18 PM
  - Isha: 6:53 PM
- Each card has a subtle hover effect (lifts up slightly)

### 3. **Countdown Timer** ⏱️
- Shows countdown to Ramadan start (if before Feb 18, 2026)
- OR shows "Ramadan Mubarak - Day X of 30" (if during Ramadan)
- Animated countdown units for Days, Hours, Minutes, Seconds
- Changes to green gradient background when Ramadan starts

### 4. **Search Bar** 🔍
- Located above the prayer table
- Search icon on the left
- Placeholder: "Search by date or day..."
- Real-time filtering as you type

### 5. **Prayer Timetable** 📅
- **Sticky header** with column names:
  - Date
  - Ramadan Day (highlighted in gray)
  - Fajr/Suhoor (highlighted in blue)
  - Sunrise
  - Dhuhr
  - Asr
  - Maghrib/Iftar (highlighted in yellow)
  - Isha
  - Proposed Isha
- **30 rows** for each day of Ramadan
- **Today's row**: Highlighted in yellow
- **Past days**: Slightly dimmed (50% opacity)
- **Clickable rows**: Hover shows light gray background
- **DST Notice**: Special row after Day 18 with orange border

### 6. **Dua Slideshow** 📖
- **Auto-rotating** every 8 seconds
- **4 slides**:
  1. Dua for Suhoor
  2. Dua for Iftar
  3. Quranic Verse about fasting
  4. Hadith about Ramadan rewards
- **Arabic text** in beautiful Amiri font
- **English translation** below
- **Navigation**:
  - Previous/Next buttons
  - Dot indicators at bottom
  - Click dots to jump to specific dua

### 7. **Footer** 📄
- **Blessing message**: "May this Ramadan bring unity..."
- **Download button**: "Download PDF Calendar" with download icon
- **Source information**: ISNA calculation method details
- **Copyright**: Current year and organization name

### 8. **Prayer Details Modal** 💬
(Appears when you click any day in the table)
- **Green gradient header** with date and day number
- **Close button** (X) in top-right
- **7 prayer times** listed:
  - Each with name and time
  - Maghrib (Iftar) highlighted in yellow
  - Hover effect on each row
- **Blessing message** at bottom
- **Backdrop blur** effect behind modal
- **Click outside** or press ESC to close

## 🎨 Color Themes

### Light Mode (Default)
- White background
- Dark text
- Green accents
- Blue for Suhoor
- Yellow for Iftar

### Dark Mode (Toggle with moon icon)
- Dark gray/black background
- Light text
- Lighter green accents
- Darker blue for Suhoor
- Darker yellow for Iftar
- All colors optimized for dark viewing

## 📱 Responsive Design

### Desktop (1200px+)
- Full table with all columns
- 6 prayer cards in one row
- Wide layout

### Tablet (768px - 1199px)
- Prayer cards in 3 columns
- Slightly smaller fonts
- Compact spacing

### Mobile (< 768px)
- Prayer cards in 2 columns
- Some table columns hidden (Sunrise, Dhuhr, Asr, Isha, Proposed)
- Only shows: Date, Day, Fajr, Maghrib
- Stacked layout
- Touch-friendly buttons

## ✨ Animations & Effects

1. **Page Load**: Smooth fade-in animation
2. **Header**: Slide-in from left
3. **Countdown Units**: Hover to scale up
4. **Prayer Cards**: Lift on hover
5. **Table Rows**: Background change on hover
6. **Modal**: Slide down and fade in
7. **Theme Toggle**: Smooth color transitions
8. **Dua Slides**: Fade in/out transitions
9. **Buttons**: Lift on hover, press on click

## 🖱️ Interactive Elements

- ✅ Click theme toggle to switch light/dark
- ✅ Click share to share the page
- ✅ Click print to print
- ✅ Type in search to filter
- ✅ Click table row to see details
- ✅ Click Previous/Next for duas
- ✅ Click dots to jump to dua
- ✅ Click download to get PDF
- ✅ Click outside modal to close
- ✅ Press ESC to close modal

## 🎯 Try These Features

1. **Toggle Dark Mode**: Click the moon icon in the header
2. **Search**: Type "March" or "15" in the search box
3. **View Details**: Click on any day in the table
4. **Navigate Duas**: Use the Previous/Next buttons
5. **Share**: Click the share icon
6. **Print**: Click the printer icon
7. **Download PDF**: Click the download button in footer

---

**Enjoy your modern Ramadan timetable! 🌙**
