FaithFlow Church Manager

FaithFlow is a modern, offline-first Church Management System designed as a Single Page Application (SPA). It consolidates membership tracking, finance, and worship presentation into one lightweight file that runs on any device.

🚀 Features

Dashboard: Real-time overview of church stats and quick actions.

Member Directory: Manage profiles with roles (Member, Leader, Visitor).

Finance: Track tithes, offerings, and expenses with visual charts.

Worship Presenter: Project lyrics and scripture to external screens with a distraction-free black background.

Offline Bible: Built-in scripture search that works without internet.

Community Chat: Optional real-time messaging feature (Hybrid Cloud).

Data Exchange: Export updates (e.g., new hymns) to a file and share via WhatsApp/Bluetooth for members to import.

📂 Project Structure

Ensure your folder looks like this for automatic data loading to work:

.
├── README.md                  # This documentation
├── data/                      # Auto-loaded content
│   ├── announcements.json     # Church notices
│   ├── bible.json             # Scripture database
│   ├── config.json            # App settings & theme
│   ├── hymns.json             # Song lyrics
│   └── members.json           # Member directory
├── icons/                     # App icons for PWA
├── index.html                 # Main Application File
├── manifest.json              # PWA Manifest
├── start-server.bat           # Launcher for Windows
└── start-server.sh            # Launcher for Mac/Linux


📦 Installation & Deployment

Method 1: Simple File (Windows/Android/iOS)

FaithFlow requires no installation logic. It runs directly in the browser.

Download the entire folder.

Desktop: Double-click index.html to open.

Mobile: Transfer the folder to your phone or host it (see Method 2).

Method 2: GitHub Pages (Recommended for Community)

Create a new Repository on GitHub.

Upload all files (keeping the data/ folder structure intact).

Go to Settings > Pages.

Select main branch and click Save.

Share the generated link (e.g., yourname.github.io/faithflow) with your church.

Method 3: Local Hotspot (Laptop Server)

Use this method if you want to host the app on your laptop (without internet) and have members connect via a local Wi-Fi hotspot.

Prerequisite: You must have Python installed on your laptop.

Connect: Ensure your laptop and the members' devices are on the same Wi-Fi network (or turn on your laptop's Mobile Hotspot).

Start Server:

Windows: Double-click start-server.bat.

Mac/Linux: Open terminal and run sh start-server.sh.

Find your IP Address:

Windows: Open Command Prompt, type ipconfig, and look for "IPv4 Address" (e.g., 192.168.1.5).

Mac/Linux: Open Terminal, type ifconfig | grep "inet ", and look for your local IP.

Connect Members: Tell your members to type that IP address followed by :8000 into their phone browsers (e.g., http://192.168.1.5:8000).

☁️ Enabling Community Chat (Firebase Setup)

By default, FaithFlow is offline. To turn on the Chat feature, you must link it to a backend.

Create a Project: Go to Firebase Console.

Register App: Add a Web app (</>) to get your config.

Enable Firestore: Create a database in "Test Mode".

Connect App:

Open FaithFlow > Settings.

Paste the firebaseConfig JSON object into the Online Features text area.

Click Update Config.

🎨 Configuration & Customization

You can modify data/config.json to change defaults without touching the code:

{
  "defaultChurchName": "FaithFlow Church",
  "defaultTheme": {
    "primaryColor": "#0d6efd",
    "secondaryColor": "#6c757d"
  }
}


📄 JSON Data Reference

To manually update content, edit the files in the data/ folder using these formats:

bible.json (Nested Structure):

{
  "Genesis": {
    "1": {
      "1": "In the beginning God created the heavens and the earth."
    }
  },
  "John": {
    "3": {
      "16": "For God so loved the world..."
    }
  }
}


hymns.json:

[
  {
    "id": "1",
    "title": "Amazing Grace",
    "number": "MHB 531",
    "category": "Praise",
    "lyrics": "Amazing grace! How sweet the sound..."
  }
]


announcements.json:

[
  {
    "id": "1",
    "title": "Sunday Service",
    "message": "Join us at 9:00 AM.",
    "date": "2025-11-10"
  }
]


FaithFlow - Simple. Offline. Connected.