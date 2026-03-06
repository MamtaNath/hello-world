# Greeting Web App

A modern, responsive web application built with Flask and Vanilla JavaScript that provides personalized greetings.

## Architecture

```mermaid
graph LR
    User((User))
    Browser["Browser (index.html/style.css)"]
    JS["Vanilla JS (script.js)"]
    Flask["Flask API (app.py)"]
    Logic["Greeting Logic"]

    User -- Enters Name --> Browser
    Browser -- Triggers Event --> JS
    JS -- POST /greet --> Flask
    Flask -- Processes --> Logic
    Logic -- Returns Greeting --> Flask
    Flask -- JSON Response --> JS
    JS -- Dynamic Update --> Browser
    Browser -- Displays Hello Name --> User
```

## Features
- **Flask Backend**: Robust Python server handling API requests.
- **Premium Frontend**: Sleek, glassmorphic design with micro-animations.
- **Vanilla JS**: Smooth, no-framework interaction layer.

## Project Structure
- `app.py`: Flask application server.
- `templates/`: HTML templates.
- `static/`: CSS styles and JavaScript logic.

## How to Run

1. **Install Dependencies**:
   ```bash
   pip install flask
   ```

2. **Run the App**:
   ```bash
   python app.py
   ```

3. **Open in Browser**:
   Navigate to `http://127.0.0.1:5000`
