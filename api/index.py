from flask import Flask, render_template, redirect, url_for, jsonify, send_from_directory
from datetime import datetime
from flask_minify import Minify
import pytz
import os

app = Flask(__name__)
Minify(app=app, html=True, js=True, cssless=True)

# Colombo timezone constant
COLOMBO_TZ = pytz.timezone('Asia/Colombo')
TARGET_DATE = COLOMBO_TZ.localize(datetime.strptime('2026-08-10 08:00:00', '%Y-%m-%d %H:%M:%S'))


def get_countdown_values():
    """Calculate countdown values server-side."""
    now = datetime.now(COLOMBO_TZ)
    time_diff = TARGET_DATE - now

    days = max(0, time_diff.days)
    hours, remainder = divmod(time_diff.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    return {
        'days': days,
        'hours': max(0, int(hours)),
        'minutes': max(0, int(minutes)),
        'seconds': max(0, int(seconds)),
    }


@app.route('/')
def countdown():
    try:
        values = get_countdown_values()
        # Pass ISO 8601 with +05:30 offset so JS parses it as Colombo time
        target_iso = TARGET_DATE.strftime('%Y-%m-%dT%H:%M:%S+05:30')
        # Server timestamp so JS can compute clock skew
        server_now_iso = datetime.now(COLOMBO_TZ).strftime('%Y-%m-%dT%H:%M:%S+05:30')

        return render_template('countdown.html',
                               target_date=target_iso,
                               server_now=server_now_iso,
                               **values)
    except Exception as e:
        return render_template('countdown.html',
                               days=0, hours=0, minutes=0, seconds=0,
                               target_date='2026-08-10T08:00:00+05:30',
                               server_now='')


@app.route('/timetable')
def timetable():
    return render_template('timetable.html')


@app.route('/style.css')
def serve_css():
    return send_from_directory(
        os.path.join(app.root_path, 'templates'),
        'style.css',
        mimetype='text/css'
    )


@app.route('/script.js')
def serve_js():
    return send_from_directory(
        os.path.join(app.root_path, 'templates'),
        'script.js',
        mimetype='application/javascript'
    )


@app.route('/api/time')
def api_time():
    """Return server time and countdown values for client sync."""
    now = datetime.now(COLOMBO_TZ)
    values = get_countdown_values()
    return jsonify({
        'server_now': now.strftime('%Y-%m-%dT%H:%M:%S+05:30'),
        'target': TARGET_DATE.strftime('%Y-%m-%dT%H:%M:%S+05:30'),
        'countdown': values,
    })


@app.errorhandler(404)
def page_not_found(e):
    return redirect(url_for('countdown'))

if __name__ == '__main__':
    app.run(debug=True)
