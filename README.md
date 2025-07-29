# Live Bookings Viewer

A simple full-stack real-time web application to monitor incoming bookings. It simulates live venue bookings and displays them on a dashboard instantly using WebSockets.

##  Tech Stack

- **Backend:** Node.js, Express.js, Socket.IO
- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Database:** In-memory (Array)

##  Features

- Live booking updates every 5 seconds
- Real-time communication using Socket.IO
- Clean, minimal UI that updates without refreshing the page
- Bookings are displayed in order with the most recent ones on top

##  Project Structure

live-bookings-viewer/

--->>> server.js # Express + Socket.IO backend
--->>> index.html # Frontend UI + styling
--->>> package.json
--->>> README.md


## 🔧 Setup & Run Instructions

1. **Clone the repository**
```bash
git clone https://github.com/your-username/live-bookings-viewer.git
cd live-bookings-viewer

2. Install Dependencies

--->>> npm install

3. start the server
--->>> node server.js

4. Open the app
Visit http://localhost:3000 in your browser to see the Live Bookings Viewer.





