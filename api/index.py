from flask import Flask, render_template
from datetime import datetime
from flask_minify import Minify
import pytz

app = Flask(__name__)
Minify(app=app, html=True, js=True, cssless=True)

@app.route('/')
def countdown():
    # Set the target date (November 10, 2025 at 8:00 AM Sri Lanka time)
    colombo_tz = pytz.timezone('Asia/Colombo')
    target_date = colombo_tz.localize(datetime.strptime('2025-11-10 08:00:00', '%Y-%m-%d %H:%M:%S'))
    
    # Get current time in Colombo timezone
    now = datetime.now(colombo_tz)
    
    # Calculate the time difference
    time_diff = target_date - now
    
    # Calculate days, hours, minutes, seconds
    days = time_diff.days
    hours, remainder = divmod(time_diff.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    
    return render_template('countdown.html', 
                          days=days, 
                          hours=hours, 
                          minutes=minutes, 
                          seconds=seconds,
                          target_date=target_date.strftime('%Y-%m-%d %H:%M:%S'))

if __name__ == '__main__':
    app.run(debug=True)