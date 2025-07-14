from flask import Flask, render_template, redirect, url_for
from datetime import datetime
from flask_minify import Minify
import pytz

app = Flask(__name__)
Minify(app=app, html=True, js=True, cssless=True)

@app.route('/')
def countdown():
    try:
        # Set the target date (November 10, 2025 at 8:00 AM Sri Lanka time)
        colombo_tz = pytz.timezone('Asia/Colombo')
        target_date = colombo_tz.localize(datetime.strptime('2025-11-10 08:00:00', '%Y-%m-%d %H:%M:%S'))
        
        # Get current time in Colombo timezone
        now = datetime.now(colombo_tz)
        
        # Calculate the time difference
        time_diff = target_date - now
        
        # Calculate days, hours, minutes, seconds
        days = max(0, time_diff.days)
        hours, remainder = divmod(time_diff.seconds, 3600)
        minutes, seconds = divmod(remainder, 60)
        
        # Ensure all values are non-negative integers
        hours = max(0, int(hours))
        minutes = max(0, int(minutes))
        seconds = max(0, int(seconds))
        
        return render_template('countdown.html', 
                            days=days, 
                            hours=hours, 
                            minutes=minutes, 
                            seconds=seconds,
                            target_date=target_date.strftime('%Y-%m-%d %H:%M:%S'))
    except Exception as e:
        # Return default values if any error occurs
        return render_template('countdown.html', 
                            days=0, 
                            hours=0, 
                            minutes=0, 
                            seconds=0,
                            target_date='2025-11-10 08:00:00')
@app.errorhandler(404)
def page_not_found(e):
    return redirect(url_for('countdown'))

if __name__ == '__main__':
    app.run(debug=True)