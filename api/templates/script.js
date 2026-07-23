/* ==========================================================
   THEME SYSTEM
   ========================================================== */
const ThemeSystem = (() => {
    const COOKIE_NAME = 'al_countdown_theme';
    const COOKIE_DAYS = 365;
    const html = document.documentElement;
    const toggleBtn = document.getElementById('themeToggleBtn');
    const dropdown = document.getElementById('themeDropdown');
    const options = document.querySelectorAll('.theme-option');

    // --- Cookie helpers ---
    function setCookie(name, value, days) {
        try {
            const d = new Date();
            d.setTime(d.getTime() + days * 86400000);
            document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
        } catch (e) {
            console.warn('[Theme] Failed to set cookie:', e.message);
        }
    }

    function getCookie(name) {
        try {
            const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            return match ? decodeURIComponent(match[2]) : null;
        } catch (e) {
            console.warn('[Theme] Failed to read cookie:', e.message);
            return null;
        }
    }

    // --- Apply theme ---
    function apply(themeName) {
        try {
            html.setAttribute('data-theme', themeName);
            options.forEach(opt => {
                opt.classList.toggle('active', opt.dataset.theme === themeName);
            });
            updateParticleColors();
            const modal = document.querySelector('.study-modal');
            if (modal) modal.style.background = '';
        } catch (e) {
            console.error('[Theme] Failed to apply theme:', e.message);
        }
    }

    function setTheme(themeName) {
        apply(themeName);
        setCookie(COOKIE_NAME, themeName, COOKIE_DAYS);
    }

    // --- Init ---
    function init() {
        const saved = getCookie(COOKIE_NAME) || 'original';
        apply(saved);

        // Toggle dropdown
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });

        // Select theme
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                setTheme(opt.dataset.theme);
                dropdown.classList.remove('show');
            });
        });
    }

    return { init, setTheme, apply };
})();

/* ==========================================================
   PARTICLES (improved - multiple types)
   ========================================================== */
function createParticles() {
    const container = document.getElementById('particles');
    container.innerHTML = '';
    const count = 35;
    const theme = document.documentElement.getAttribute('data-theme');

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';

        const size = Math.random() * 8 + 3;
        const left = Math.random() * 100;
        const dur = Math.random() * 18 + 8;
        const delay = Math.random() * 12;
        const opacity = Math.random() * 0.6 + 0.1;
        const drift = (Math.random() - 0.5) * 200;

        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = left + '%';
        p.style.bottom = '-' + size + 'px';
        p.style.opacity = opacity;

        // Hacker theme: matrix-style falling characters
        if (theme === 'hacker') {
            p.style.borderRadius = '2px';
            p.style.background = 'rgba(0, 255, 65, ' + (opacity * 0.8) + ')';
            p.style.boxShadow = '0 0 6px rgba(0, 255, 65, 0.4)';
            p.style.animation = 'matrixFall ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Fancy theme: colorful sparkles
        else if (theme === 'fancy') {
            const colors = ['#ffd700', '#ff6b6b', '#c084fc', '#60a5fa', '#ff6b9d'];
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            p.style.boxShadow = '0 0 8px ' + p.style.background;
            p.style.width = (size * 0.7) + 'px';
            p.style.height = (size * 0.7) + 'px';
            p.style.animation = 'sparkleFloat ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Pink theme: soft hearts/circles
        else if (theme === 'pink') {
            p.style.borderRadius = '50%';
            p.style.background = 'rgba(255, 182, 193, ' + (opacity * 0.7) + ')';
            p.style.boxShadow = '0 0 10px rgba(255, 105, 157, 0.3)';
            p.style.animation = 'bubbleFloat ' + dur + 's infinite ease-in-out';
            p.style.animationDelay = delay + 's';
        }
        // Ocean theme: water bubbles
        else if (theme === 'ocean') {
            p.style.borderRadius = '50%';
            p.style.background = 'rgba(144, 224, 255, ' + (opacity * 0.5) + ')';
            p.style.boxShadow = '0 0 8px rgba(0, 180, 216, 0.3)';
            p.style.animation = 'bubbleFloat ' + dur + 's infinite ease-in-out';
            p.style.animationDelay = delay + 's';
        }
        // Sunset theme: warm embers
        else if (theme === 'sunset') {
            const warmColors = ['#ff6b35', '#ffba08', '#ff4e00', '#ec9f05'];
            p.style.background = warmColors[Math.floor(Math.random() * warmColors.length)];
            p.style.borderRadius = '50%';
            p.style.boxShadow = '0 0 8px ' + p.style.background;
            p.style.animation = 'float ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Neon theme: neon particles
        else if (theme === 'neon') {
            const neonColors = ['#ff00ff', '#00ffff', '#ff00aa', '#00ffaa'];
            p.style.background = neonColors[Math.floor(Math.random() * neonColors.length)];
            p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            p.style.boxShadow = '0 0 10px ' + p.style.background;
            p.style.animation = 'sparkleFloat ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Forest theme: leaves
        else if (theme === 'forest') {
            p.style.borderRadius = '50% 0 50% 0';
            p.style.background = 'rgba(149, 213, 178, ' + (opacity * 0.5) + ')';
            p.style.transform = 'rotate(45deg)';
            p.style.animation = 'float ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Royal theme: gold sparkles
        else if (theme === 'royal') {
            p.style.borderRadius = '50%';
            p.style.background = 'rgba(218, 165, 32, ' + (opacity * 0.6) + ')';
            p.style.boxShadow = '0 0 8px rgba(218, 165, 32, 0.4)';
            p.style.animation = 'sparkleFloat ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Aurora theme: multicolor glow
        else if (theme === 'aurora') {
            const auroraColors = ['#58dc96', '#a78bfa', '#f472b6', '#60a5fa'];
            p.style.background = auroraColors[Math.floor(Math.random() * auroraColors.length)];
            p.style.borderRadius = '50%';
            p.style.boxShadow = '0 0 12px ' + p.style.background;
            p.style.filter = 'blur(1px)';
            p.style.animation = 'float ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Mono theme: white dots
        else if (theme === 'mono') {
            p.style.borderRadius = '50%';
            p.style.background = 'rgba(255, 255, 255, ' + (opacity * 0.3) + ')';
            p.style.animation = 'float ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Candy theme: colorful confetti
        else if (theme === 'candy') {
            const candyColors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
            p.style.background = candyColors[Math.floor(Math.random() * candyColors.length)];
            p.style.borderRadius = Math.random() > 0.6 ? '50%' : '2px';
            p.style.boxShadow = '0 0 6px ' + p.style.background;
            p.style.animation = 'sparkleFloat ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Midnight theme: subtle blue orbs
        else if (theme === 'midnight') {
            p.style.borderRadius = '50%';
            p.style.background = 'rgba(167, 139, 250, ' + (opacity * 0.3) + ')';
            p.style.filter = 'blur(' + (Math.random() * 3) + 'px)';
            p.style.animation = 'float ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Ember theme: fire embers
        else if (theme === 'ember') {
            const emberColors = ['#ff3c00', '#ff6e40', '#ffab40', '#ff8a50'];
            p.style.background = emberColors[Math.floor(Math.random() * emberColors.length)];
            p.style.borderRadius = '50%';
            p.style.boxShadow = '0 0 8px ' + p.style.background;
            p.style.animation = 'float ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Universe theme: star particles
        else if (theme === 'universe') {
            p.style.borderRadius = '50%';
            p.style.background = 'rgba(168, 85, 247, ' + (opacity * 0.5) + ')';
            p.style.boxShadow = '0 0 6px rgba(147, 51, 234, 0.4)';
            p.style.width = (Math.random() * 4 + 1) + 'px';
            p.style.height = p.style.width;
            p.style.animation = 'float ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Blackhole theme: purple swirl particles
        else if (theme === 'blackhole') {
            p.style.borderRadius = '50%';
            const bhColors = ['#a78bfa', '#ec4899', '#8b5cf6', '#c084fc'];
            p.style.background = bhColors[Math.floor(Math.random() * bhColors.length)];
            p.style.boxShadow = '0 0 8px ' + p.style.background;
            p.style.opacity = opacity * 0.4;
            p.style.animation = 'float ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
        }
        // Default: smooth floating orbs
        else {
            p.style.borderRadius = '50%';
            p.style.background = 'rgba(255, 255, 255, ' + (opacity * 0.6) + ')';
            p.style.filter = 'blur(' + (Math.random() * 2) + 'px)';
            p.style.animation = 'float ' + dur + 's infinite linear';
            p.style.animationDelay = delay + 's';
            p.style.setProperty('--drift', drift + 'px');
        }

        container.appendChild(p);
    }
}

function updateParticleColors() {
    createParticles();
}

/* ==========================================================
   TIMER STYLE SYSTEM
   ========================================================== */
const TimerStyle = (() => {
    const COOKIE_NAME = 'al_countdown_timer';
    const COOKIE_DAYS = 365;
    const html = document.documentElement;
    const toggleBtn = document.getElementById('timerToggleBtn');
    const dropdown = document.getElementById('timerDropdown');
    const options = document.querySelectorAll('.timer-option');

    function setCookie(name, value, days) {
        try {
            const d = new Date();
            d.setTime(d.getTime() + days * 86400000);
            document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
        } catch (e) {
            console.warn('[Timer] Failed to set cookie:', e.message);
        }
    }

    function getCookie(name) {
        try {
            const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            return match ? decodeURIComponent(match[2]) : null;
        } catch (e) {
            console.warn('[Timer] Failed to read cookie:', e.message);
            return null;
        }
    }

    function apply(timerName) {
        try {
            html.setAttribute('data-timer', timerName);
            options.forEach(opt => {
                opt.classList.toggle('active', opt.dataset.timer === timerName);
            });
        } catch (e) {
            console.error('[Timer] Failed to apply timer style:', e.message);
        }
    }

    function setTimer(timerName) {
        apply(timerName);
        setCookie(COOKIE_NAME, timerName, COOKIE_DAYS);
    }

    function init() {
        const saved = getCookie(COOKIE_NAME) || 'classic';
        apply(saved);

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });

        options.forEach(opt => {
            opt.addEventListener('click', () => {
                setTimer(opt.dataset.timer);
                dropdown.classList.remove('show');
            });
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && e.target !== toggleBtn) {
                dropdown.classList.remove('show');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') dropdown.classList.remove('show');
        });
    }

    return { init, setTimer, apply };
})();

/* ==========================================================
   COUNTDOWN (with server time sync + iOS fix)
   ========================================================== */

/**
 * iOS-safe date parser.
 * Safari chokes on `new Date('2026-08-10T08:00:00+05:30')` in some versions.
 * This manually extracts the parts and builds a UTC timestamp.
 */
function parseISODate(isoStr) {
    if (!isoStr || typeof isoStr !== 'string') return new Date(NaN);
    // Try native parser first (works on most browsers)
    var d = new Date(isoStr);
    if (!isNaN(d.getTime())) return d;

    // Fallback: manually parse ISO 8601
    // Format: "2026-08-10T08:00:00+05:30" or "2026-08-10 08:00:00"
    var match = isoStr.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(?:Z|([+-])(\d{2}):?(\d{2}))?$/);
    if (!match) return new Date(NaN);

    var year   = parseInt(match[1], 10);
    var month  = parseInt(match[2], 10) - 1;
    var day    = parseInt(match[3], 10);
    var hour   = parseInt(match[4], 10);
    var min    = parseInt(match[5], 10);
    var sec    = parseInt(match[6], 10);
    var ms     = match[7] ? parseInt(match[7].substring(0, 3).padEnd(3, '0'), 10) : 0;

    // Build as UTC, then apply offset
    var utc = Date.UTC(year, month, day, hour, min, sec, ms);

    if (match[8]) {
        // Has timezone offset
        var sign = match[8] === '+' ? 1 : -1;
        var offH = parseInt(match[9], 10);
        var offM = parseInt(match[10], 10);
        var offsetMs = sign * (offH * 3600 + offM * 60) * 1000;
        // The time components are in local offset, so subtract offset to get UTC
        return new Date(utc - offsetMs);
    }

    // No offset specified — assume UTC
    return new Date(utc);
}

// Parse target date (iOS-safe)
var TARGET_DATE_STR = '{{ target_date }}';
var SERVER_NOW_STR  = '{{ server_now }}';
var TARGET_DATE     = parseISODate(TARGET_DATE_STR);

// Validate target date
if (isNaN(TARGET_DATE.getTime())) {
    // Hard fallback: August 10, 2026 08:00:00 UTC+5:30
    TARGET_DATE = new Date(Date.UTC(2026, 7, 10, 2, 30, 0)); // 08:00 IST = 02:30 UTC
    console.warn('[Countdown] Failed to parse target date, using fallback:', TARGET_DATE);
}

// Clock skew: difference between server time and client time
var clockSkewMs = 0;
if (SERVER_NOW_STR) {
    var serverNow = parseISODate(SERVER_NOW_STR);
    if (!isNaN(serverNow.getTime())) {
        clockSkewMs = Date.now() - serverNow.getTime();
    }
}

function syncWithServer() {
    fetch('/api/time')
        .then(function(r) {
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.json();
        })
        .then(function(data) {
            if (data && data.server_now) {
                var serverNow = parseISODate(data.server_now);
                if (!isNaN(serverNow.getTime())) {
                    clockSkewMs = Date.now() - serverNow.getTime();
                }
            }
        })
        .catch(function(err) {
            console.warn('[Countdown] Server sync failed:', err.message);
        });
}

function setCountdownValues(days, hours, minutes, seconds) {
    var el;
    el = document.getElementById('days');
    if (el) el.textContent = days;
    el = document.getElementById('hours');
    if (el) el.textContent = hours;
    el = document.getElementById('minutes');
    if (el) el.textContent = minutes;
    el = document.getElementById('seconds');
    if (el) el.textContent = seconds;
}

function updateCountdown() {
    try {
        if (isNaN(TARGET_DATE.getTime())) {
            setCountdownValues('0', '0', '0', '0');
            return;
        }

        // Use client time corrected by clock skew
        var now = new Date(Date.now() - clockSkewMs);
        var diff = TARGET_DATE.getTime() - now.getTime();

        if (diff <= 0) {
            setCountdownValues('0', '0', '0', '0');
            return;
        }

        var days    = Math.floor(diff / 86400000);
        var hours   = Math.floor((diff % 86400000) / 3600000);
        var minutes = Math.floor((diff % 3600000) / 60000);
        var seconds = Math.floor((diff % 60000) / 1000);

        setCountdownValues(String(days), String(hours), String(minutes), String(seconds));

        // Update circle progress rings if in circle mode
        if (document.documentElement.getAttribute('data-timer') === 'circle') {
            var items = document.querySelectorAll('.countdown-item');
            if (items.length === 4) {
                items[0].style.setProperty('--progress', ((days % 365) / 365 * 100) + '%');
                items[1].style.setProperty('--progress', (hours / 24 * 100) + '%');
                items[2].style.setProperty('--progress', (minutes / 60 * 100) + '%');
                items[3].style.setProperty('--progress', (seconds / 60 * 100) + '%');
            }
        }
    } catch (err) {
        console.error('[Countdown] updateCountdown error:', err);
        setCountdownValues('0', '0', '0', '0');
    }
}

/**
 * iOS Safari throttles setInterval when tab is backgrounded or screen is locked.
 * When the user returns, we detect via visibilitychange and force an immediate update.
 */
var lastTickTime = Date.now();
function visibilityHandler() {
    if (document.visibilityState === 'visible') {
        // Force immediate update — don't wait for next interval tick
        updateCountdown();
        // Re-sync server time in case we were offline
        syncWithServer();
    }
}
document.addEventListener('visibilitychange', visibilityHandler);
// Also handle pageshow (iOS back-forward cache)
window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
        updateCountdown();
        syncWithServer();
    }
});

/* ==========================================================
   MOTIVATIONAL QUOTES
   ========================================================== */
const motivationalQuotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future depends on what you do today.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "It always seems impossible until it's done.",
    "The secret of getting ahead is getting started.",
    "Your time is limited, don't waste it living someone else's life.",
    "The best way to predict your future is to create it.",
    "Education is the most powerful weapon which you can use to change the world.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "You don't have to be great to start, but you have to start to be great.",
    "The biggest risk is not taking any risk...",
    "Knowledge is power. Information is liberating. Education is the premise of progress.",
    "When you know better, you do better.",
    "The highest reward for a person's toil is not what they get for it, but what they become by it.",
    "The man who does not read has no advantage over the man who cannot read.",
    "Learning is the only thing the mind never exhausts, never fears, and never loses.",
    "The biggest glory in living lies not in never falling, but in rising every time we fall.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Do something today that your future self will thank you for.",
    "The only way to do great work is to love what you do.",
    "The best revenge is massive success.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "Do not let what you cannot do interfere with what you can do.",
    "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
    "The biggest mistake you can make is believing you are working hard when you aren't.",
    "The best way to get started is to quit talking and begin doing.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The best thing about the future is that it comes one day at a time.",
    "The biggest challenge in life is to be yourself in a world that is trying to make you like everyone else.",
    "The biggest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
    "The biggest failure is not trying.",
    "The biggest wisdom is in knowing what you don't know.",
    "Do something today that your future self will thank you for.",
];

function changeQuote() {
    try {
        const el = document.querySelector('.motivational-quote');
        if (!el) return;
        el.classList.remove('animate__fadeIn');
        el.classList.add('animate__fadeOut');
        setTimeout(function() {
            try {
                el.textContent = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
                el.classList.remove('animate__fadeOut');
                el.classList.add('animate__fadeIn');
            } catch (e) {
                console.warn('[Quote] Error updating quote:', e.message);
            }
        }, 500);
    } catch (e) {
        console.warn('[Quote] Error in changeQuote:', e.message);
    }
}

/* ==========================================================
   STUDY MODE MODAL
   ========================================================== */
function openStudyModal() {
    try {
        // Remove existing
        var existing = document.querySelector('.study-modal-overlay');
        if (existing) existing.remove();

        var overlay = document.createElement('div');
        overlay.className = 'study-modal-overlay';
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) overlay.remove();
        });

        var modal = document.createElement('div');
        modal.className = 'study-modal';
        modal.innerHTML =
            '<button class="close-modal" title="Close">&times;</button>' +
            '<h3><i class="fas fa-book-open"></i> Study Mode Tools</h3>' +
            '<ul>' +
                '<li>&#x1F552; <strong>Time Management</strong>' +
                    '<ul>' +
                        '<li>Use Pomodoro Technique (25 min study, 5 min break)</li>' +
                        '<li>Create daily study schedule</li>' +
                        '<li>Track study hours</li>' +
                    '</ul>' +
                '</li>' +
                '<li>&#x1F4DA; <strong>Study Methods</strong>' +
                    '<ul>' +
                        '<li>Active recall practice</li>' +
                        '<li>Mind mapping</li>' +
                        '<li>Past paper solving</li>' +
                    '</ul>' +
                '</li>' +
                '<li>&#x1F3AF; <strong>Focus Tips</strong>' +
                    '<ul>' +
                        '<li>Find quiet study space</li>' +
                        '<li>Remove distractions</li>' +
                        '<li>Take regular breaks</li>' +
                    '</ul>' +
                '</li>' +
            '</ul>' +
            '<p style="margin-top:15px; text-align:center;">' +
                'Boost your productivity with our ' +
                '<a href="https://pomodoro-productivity-time.vercel.app/" style="color: var(--accent-color); text-decoration: none; border-bottom: 1px dotted var(--accent-color);">Pomodoro Timer</a>' +
                ' for effective time management.' +
            '</p>';

        modal.querySelector('.close-modal').addEventListener('click', function() { overlay.remove(); });
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    } catch (e) {
        console.error('[StudyModal] Failed to open:', e.message);
    }
}

/* ==========================================================
   FULLSCREEN MODE
   ========================================================== */
var FullscreenMode = (function() {
    var active = false;
    var btn = document.getElementById('fullscreenBtn');
    var icon = document.getElementById('fullscreenIcon');

    function toggle() {
        active = !active;
        if (active) {
            document.body.classList.add('fs-active');
            icon.className = 'fas fa-compress';
            btn.title = 'Exit Fullscreen';
            // Request browser fullscreen
            try {
                var el = document.documentElement;
                if (el.requestFullscreen) el.requestFullscreen();
                else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
                else if (el.msRequestFullscreen) el.msRequestFullscreen();
            } catch (e) {}
        } else {
            document.body.classList.remove('fs-active');
            icon.className = 'fas fa-expand';
            btn.title = 'Fullscreen Mode';
            // Exit browser fullscreen
            try {
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
                else if (document.msExitFullscreen) document.msExitFullscreen();
            } catch (e) {}
        }
    }

    function init() {
        if (btn) {
            btn.addEventListener('click', toggle);
        }

        // Exit fullscreen mode when browser exits fullscreen (e.g. Escape key)
        document.addEventListener('fullscreenchange', function() {
            if (!document.fullscreenElement && active) {
                active = false;
                document.body.classList.remove('fs-active');
                icon.className = 'fas fa-expand';
                btn.title = 'Fullscreen Mode';
            }
        });
        document.addEventListener('webkitfullscreenchange', function() {
            if (!document.webkitFullscreenElement && active) {
                active = false;
                document.body.classList.remove('fs-active');
                icon.className = 'fas fa-expand';
                btn.title = 'Fullscreen Mode';
            }
        });
    }

    return { init: init, toggle: toggle };
})();

/* ==========================================================
   INIT
   ========================================================== */
document.addEventListener('DOMContentLoaded', function() {
    try { ThemeSystem.init(); } catch (e) { console.error('[Init] ThemeSystem failed:', e.message); }
    try { TimerStyle.init(); } catch (e) { console.error('[Init] TimerStyle failed:', e.message); }
    try { FullscreenMode.init(); } catch (e) { console.error('[Init] FullscreenMode failed:', e.message); }

    createParticles();
    updateCountdown();

    // Intervals with error safety
    setInterval(function() { try { updateCountdown(); } catch(e) { console.error('[Interval] Countdown:', e.message); } }, 1000);
    setInterval(function() { try { changeQuote(); } catch(e) { console.error('[Interval] Quote:', e.message); } }, 10000);
    setInterval(function() { syncWithServer(); }, 5 * 60 * 1000);

    // Study mode button
    var studyBtn = document.querySelector('.study-mode-btn');
    if (studyBtn) {
        studyBtn.addEventListener('click', openStudyModal);
    } else {
        console.warn('[Init] Study mode button not found');
    }

    // Close both dropdowns on outside click
    document.addEventListener('click', function(e) {
        try {
            var themeDropdown = document.getElementById('themeDropdown');
            var timerDropdown = document.getElementById('timerDropdown');
            var themeBtn = document.getElementById('themeToggleBtn');
            var timerBtn = document.getElementById('timerToggleBtn');
            if (themeDropdown && !themeDropdown.contains(e.target) && e.target !== themeBtn) {
                themeDropdown.classList.remove('show');
            }
            if (timerDropdown && !timerDropdown.contains(e.target) && e.target !== timerBtn) {
                timerDropdown.classList.remove('show');
            }
        } catch (err) {
            console.warn('[Init] Dropdown close error:', err.message);
        }
    });

    // Close both dropdowns on Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            try {
                var td = document.getElementById('themeDropdown');
                var tmd = document.getElementById('timerDropdown');
                if (td) td.classList.remove('show');
                if (tmd) tmd.classList.remove('show');
            } catch (err) {}
        }
    });

    // Repo badge
    try {
        var img = document.getElementById("repo-views");
        if (img) {
            img.src = "https://dynamic-repo-badges.vercel.app/svg/count/1/Repository%20Views/Ishanoshada/Countdown-AL";
            img.onerror = function() { img.style.display = 'none'; };
        }
    } catch (e) {}

    // ─── AUTO-HIDE FLOATING UI ───
    var uiElements = [
        document.querySelector('.theme-switcher'),
        document.querySelector('.timer-switcher'),
        document.querySelector('.fullscreen-btn')
    ].filter(Boolean);

    var hideTimer = null;
    var HIDE_DELAY = 3000; // 3 seconds visible after interaction

    function showUI() {
        uiElements.forEach(function(el) { el.classList.remove('ui-hidden'); });
        clearTimeout(hideTimer);
        hideTimer = setTimeout(hideUI, HIDE_DELAY);
    }

    function hideUI() {
        // Don't hide if a dropdown is open
        var themeOpen = document.getElementById('themeDropdown');
        var timerOpen = document.getElementById('timerDropdown');
        if ((themeOpen && themeOpen.classList.contains('show')) ||
            (timerOpen && timerOpen.classList.contains('show'))) {
            hideTimer = setTimeout(hideUI, HIDE_DELAY);
            return;
        }
        uiElements.forEach(function(el) { el.classList.add('ui-hidden'); });
    }

    // Show on any user interaction
    ['mousemove', 'touchstart', 'scroll', 'keydown', 'click'].forEach(function(evt) {
        document.addEventListener(evt, showUI, { passive: true });
    });

    // Initial show then auto-hide
    showUI();
});
