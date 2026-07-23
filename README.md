<div align="center">

# 🎓 Countdown-AL

### Sri Lanka A/L Exam 2026 — Interactive Countdown Timer

A beautifully designed, fully interactive countdown timer for Sri Lankan **GCE Advanced Level (A/L) Examination 2026** — helping students track every second until exam day.

<!-- ![A/L Exam Countdown](https://countdown-al.vercel.app/og-image.jpg) -->

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-brightgreen?style=for-the-badge)](https://al-countdown.ishanoshada.com/)
[![GitHub Stars](https://img.shields.io/github/stars/Ishanoshada/Countdown-AL?style=for-the-badge&color=yellow)](https://github.com/Ishanoshada/Countdown-AL)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.7+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.0+-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)

 **[countdown-al.vercel.app](https://countdown-al.vercel.app)**

</div>

## ⭐ Support

If this project helped you prepare for your A/L exams, please give it a ⭐ on [GitHub](https://github.com/Ishanoshada/Countdown-AL)!

You can also support the developer:

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎨 Themes](#-17-color-themes)
- [⏰ Timer Styles](#-15-timer-display-styles)
- [📅 Exam Timetable](#-2026-al-exam-timetable)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Installation](#-installation)
- [🌐 Deployment](#-deployment)
- [📊 SEO & Performance](#-seo--performance)
- [🔧 Configuration & Customization](#-configuration--customization)
- [📱 Responsive Design](#-responsive-design)
- [👨‍💻 Developer](#-developer)

---

## ✨ Features

### ⏱️ Countdown Timer
- Real-time countdown to A/L Exam date — **August 10, 2026, 8:00 AM Sri Lanka time (IST/UTC+5:30)**
- Server-synced clock with **iOS Safari compatibility** (handles `setInterval` throttling, back-forward cache)
- Displays **days, hours, minutes, and seconds** with smooth animations
- Server time sync via `/api/time` endpoint to prevent client clock drift
- `visibilitychange` + `pageshow` handlers for tab-switch recovery

### 🎨 17 Color Themes
Switch between stunning themes — **all saved to cookies forever** and shared across pages:

| # | Theme | Description |
|---|-------|-------------|
| 1 | 🟣 **Original** | Classic purple gradient (default) |
| 2 | ⬛ **Dark** | Sleek GitHub-style dark mode |
| 3 | 🌈 **Fancy** | Animated rainbow gradient |
| 4 | 💚 **Hacker** | Matrix terminal green-on-black |
| 5 | 💗 **Pink** | Soft pink & magenta |
| 6 | 🌊 **Ocean** | Deep blue ocean waves |
| 7 | 🌅 **Sunset** | Warm orange & gold |
| 8 | ⚡ **Neon** | Cyberpunk neon magenta & cyan |
| 9 | 🌲 **Forest** | Natural green gradients |
| 10 | 👑 **Royal** | Purple & gold regal |
| 11 | 🌌 **Aurora** | Northern lights effect |
| 12 | ⬜ **Mono** | Clean black & white |
| 13 | 🍬 **Candy** | Colorful confetti |
| 14 | 🌙 **Midnight** | Deep blue & indigo night |
| 15 | 🔥 **Ember** | Fire-inspired red & orange |
| 16 | 🪐 **Universe** | Deep purple galaxy |
| 17 | 🕳️ **Blackhole** | Dark void with cosmic glow |

### ⏰ 15 Timer Display Styles
Customize how the countdown looks — **also saved to cookies**:

| # | Style | Description |
|---|-------|-------------|
| 1 | 📦 **Classic** | 3D floating cards with glow |
| 2 | 🔄 **Flip Clock** | Split-card flip clock display |
| 3 | ⭕ **Circle** | Circular progress rings |
| 4 | 💻 **Digital LED** | LED panel with colon separators |
| 5 | 🫧 **Bubble** | Floating translucent bubbles |
| 6 | ⚡ **Neon** | Neon outline with pulsing glow |
| 7 | 📺 **Segmented** | LCD segment display |
| 8 | 🧊 **Cube** | 3D perspective cubes |
| 9 | 🪟 **Glass** | Frosted glass morphism |
| 10 | 🎨 **Gradient** | Animated gradient fill |
| 11 | 🌈 **Hologram 3D** | Rainbow holographic sweep with scanlines |
| 12 | 🕳️ **Blackhole Timer** | Double orbital spinning rings |
| 13 | 🌌 **Universe Timer** | Twinkling starfield background |
| 14 | 💻 **Cyberpunk** | Neon grid with glitch effects & clip-path |
| 15 | ⚛️ **Hextech** | Rotating conic gradient border |

> **Tip:** That's **17 × 15 = 255 unique combinations!**

### 📅 2026 A/L Exam Timetable
A dedicated, fully searchable exam schedule page:

- 📆 Complete exam schedule from **August 10 – September 5, 2026**
- 🔍 **7 stream filters:** Physical Science, Biological Science, Commerce, Arts, Technology, Languages, Religion
- 🔎 **Search** by subject name in English or Sinhala
- 📊 **Sort by Date** or **Sort by Subject** (alphabetical)
- 🌐 **Bilingual display** — English + Sinhala for every subject
- 📋 Collapsible accordion UI with exam count per day
- 🎨 Shares the same color theme as the main countdown page (cookie-synced)

**Routes:**
| Route | Page |
|-------|------|
| `/` | Main countdown page |
| `/timetable` | Exam timetable page |

### 📖 Study Mode
- Pomodoro technique tips (25 min study, 5 min break)
- Active recall & mind mapping methods
- Past paper solving strategies
- Focus & distraction management advice
- Links to [Pomodoro Timer](https://pomodoro-productivity-time.vercel.app/) app

### 🎭 Particle Effects
Theme-aware floating particles — each of the 17 themes has **unique particle behavior**:

| Theme | Particle Style |
|-------|---------------|
| Original | Soft floating orbs with blur |
| Hacker | 🟢 Matrix rain |
| Fancy | 🌈 Multi-color sparkles |
| Ember | 🔥 Fire embers |
| Ocean | 🌊 Water bubbles |
| Royal | 👑 Gold sparkles |
| Pink | 💗 Soft floating circles |
| Sunset | 🌅 Warm embers |
| Neon | ⚡ Neon sparkles |
| Forest | 🌲 Leaf shapes |
| Aurora | 🌌 Multicolor glow |
| Mono | ⬜ Subtle white dots |
| Candy | 🍬 Colorful confetti |
| Midnight | 🌙 Soft blue orbs |
| Universe | 🪐 Purple stars |
| Blackhole | 🕳️ Purple swirls |

### 🖥️ Fullscreen Mode
- Hide everything except countdown + motivational quote
- Browser native **Fullscreen API** support
- **Auto-hiding floating UI buttons** — fade out after 3 seconds of inactivity, reappear on any user interaction (mouse, touch, scroll, keyboard)
- Smooth `0.5s` CSS transition animations

### 🧠 Motivational Quotes
- **35+ rotating motivational quotes**
- Animated fade transitions every 10 seconds
- Mix of education-focused and general motivation

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Backend** | Python 3 / Flask | Server-side routing & templating |
| **Templating** | Jinja2 | Server-rendered HTML with dynamic values |
| **Frontend** | HTML5 / CSS3 | Structure & styling |
| **Logic** | Vanilla JavaScript | Client-side interactivity |
| **Styling** | CSS Custom Properties | Dynamic theme system |
| **Persistence** | Cookie API | Theme & timer style persistence (365 days) |
| **Fullscreen** | Fullscreen API | Immersive countdown mode |
| **Minification** | flask-minify | Auto-minify HTML, JS, CSS |
| **Timezone** | pytz | Accurate Sri Lanka timezone (Asia/Colombo) |
| **Hosting** | Vercel | Serverless deployment |
| **Icons** | Font Awesome 6 | UI icons |
| **Animations** | Animate.css | CSS animations library |
| **Fonts** | Google Fonts | Poppins + Fira Code |

---

## 📁 Project Structure

```
Countdown-AL/
├── api/
│   ├── index.py                # Flask routes & server logic
│   └── templates/
│       ├── countdown.html      # Main countdown page (Jinja2)
│       ├── timetable.html      # A/L exam timetable page
│       ├── style.css           # All styles (17 themes, 15 timers, responsive)
│       └── script.js           # All JS (theme, timer, countdown, particles, fullscreen)
├── README.md
├── requirements.txt            # Python dependencies
├── package.json                # Node.js engine config
└── vercel.json                 # Vercel deployment config
```

### API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Main countdown page |
| `/timetable` | GET | Exam timetable page |
| `/style.css` | GET | Shared stylesheet |
| `/script.js` | GET | Shared JavaScript |
| `/api/time` | GET | Server time & countdown JSON (for clock sync) |

---

## 🚀 Installation

### Prerequisites
- **Python 3.7+**
- **pip**

### Setup

```bash
# 1. Clone repository
git clone https://github.com/Ishanoshada/Countdown-AL.git

# 2. Navigate to project
cd Countdown-AL

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run locally
python api/index.py
```

Open **[http://localhost:5000](http://localhost:5000)** in your browser.

### Dependencies (requirements.txt)

```
Flask
flask-minify
pytz
Werkzeug
Jinja2
MarkupSafe
itsdangerous
click
```

---

## 🌐 Deployment

### Vercel (Recommended — Pre-configured)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Or deploy preview
vercel
```

The project includes a `vercel.json` with:
- Serverless function configuration (30s max duration)
- URL rewrite rules for Flask routing

### Other Platforms

| Platform | Notes |
|----------|-------|
| **Render** | Free tier, auto-deploy from GitHub |
| **Railway** | One-click deploy, good for Flask |
| **Heroku** | Classic Flask deployment |
| **PythonAnywhere** | Free tier available |
| **AWS Lambda** | Via `mangum` adapter |

The app is a standard Flask application — deploy to any Python-compatible hosting.

---

## 📊 SEO & Performance

### On-Page SEO
- ✅ Semantic HTML5 structure
- ✅ Optimized `<title>` tags (both pages)
- ✅ Comprehensive `<meta description>` with keywords
- ✅ Extensive `<meta keywords>` (English + Sinhala)
- ✅ Canonical URLs (`countdown-al.vercel.app`)
- ✅ `robots` meta with `max-snippet`, `max-image-preview`
- ✅ `theme-color` meta for browser chrome
- ✅ Apple Touch Icon support

### Social Media
- ✅ **Open Graph** meta tags (Facebook, LinkedIn) — title, description, image, locale
- ✅ **Twitter Card** meta tags — `summary_large_image` with creator info
- ✅ `og:locale:alternate` for Sinhala (`si_LK`)

### Structured Data (JSON-LD)
- ✅ **WebApplication** schema (main page)
- ✅ **Event** schema — full A/L exam period (Aug 10 – Sep 5)
- ✅ **BreadcrumbList** schema (both pages)
- ✅ **WebPage** schema (timetable page)

### Performance
- ✅ Flask-Minify auto-minifies HTML, JS, CSS
- ✅ External CDN for Font Awesome & Animate.css
- ✅ Google Fonts preconnect
- ✅ Cookie-based state (no server-side sessions)
- ✅ Client-side countdown (no per-second server requests)
- ✅ Graceful error handling with try/catch throughout

### Monetization
- ✅ Google AdSense integration
- ✅ [Buy Me a Coffee](https://buymeacoffee.com/ishanoshada) support link

---

## 🔧 Configuration & Customization

### Change Exam Date
Edit `api/index.py`:
```python
TARGET_DATE = COLOMBO_TZ.localize(datetime.strptime('2026-08-10 08:00:00', '%Y-%m-%d %H:%M:%S'))
```

### Add New Theme
Add to `style.css`:
```css
[data-theme="your-theme"] {
    --bg-gradient-start: #your-color;
    --bg-gradient-end: #your-color;
    --text-primary: #ffffff;
    --accent-color: #your-accent;
    /* ... all CSS variables ... */
}
```

Add option in `countdown.html` and `timetable.html` theme dropdowns.

### Add New Timer Style
Add to `style.css`:
```css
[data-timer="your-style"] .countdown-item {
    /* your styles */
}
```

Add option in `countdown.html` timer dropdown.

### Add Motivational Quotes
Edit the `motivationalQuotes` array in `script.js`.

### Update Timetable
Edit the `DATA` array in `timetable.html` — each entry:
```javascript
{
    date: '2026-08-10',
    day: 'Monday',
    time: '08:30-11:40',
    en: 'Combined Mathematics I',
    si: 'සංයුක්ත ගණිතය I',
    streams: ['physicalScience']
}
```

---

## 📱 Responsive Design

| Breakpoint | Device | Adaptations |
|------------|--------|-------------|
| > 768px | Desktop | Full layout, large countdown values |
| ≤ 768px | Tablet | Compact cards, smaller fonts, stacked buttons |
| ≤ 480px | Mobile | Minimum sizes, reduced padding, touch-optimized |

- All themes, timer styles, and components are fully responsive
- Theme/timer dropdowns scroll with `max-height: 70vh`
- Fullscreen mode adapts to all screen sizes
- Touch interactions optimized for iOS & Android

---

## 🧪 Browser Compatibility

| Browser | Status |
|---------|--------|
| Chrome 90+ | ✅ Fully supported |
| Firefox 88+ | ✅ Fully supported |
| Safari 14+ | ✅ Fully supported (with iOS fixes) |
| Edge 90+ | ✅ Fully supported |
| Mobile Chrome | ✅ Fully supported |
| Mobile Safari | ✅ Fully supported (with iOS timer fixes) |

### iOS Safari Fixes
- Custom ISO 8601 date parser (`parseISODate`) for Safari compatibility
- `visibilitychange` event handler for tab-switch timer recovery
- `pageshow` event handler for back-forward cache support
- `setInterval` throttle detection and forced update on return

---



## 👨‍💻 Developer

**Ishan Oshada**

- 🐙 [GitHub](https://github.com/Ishanoshada)
- 🌐 [Portfolio](https://ishanoshada.com)

---



[![Buy Me A Coffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/ishanoshada)

---

<div align="center">

**Repository Views**

![Views](https://dynamic-repo-badges.vercel.app/svg/count/1/Repository%20Views/Ishanoshada/Countdown-AL)

---

*Made with ❤️ for Sri Lankan A/L students*

*Best of luck on your exams! 🎓*

</div>
