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

📦 Installation & Deployment

Method 1: Simple File (Windows/Android/iOS)

FaithFlow requires no installation logic. It runs directly in the browser.

Download the index.html file.

(Optional) Create a folder named data next to it and add your bible.json or hymns.json for auto-loading.

Desktop: Double-click index.html to open.

Mobile: Upload to a simple host (see below) or transfer the file to your phone and open in Chrome/Safari.

Method 2: GitHub Pages (Recommended for Community)

Create a new Repository on GitHub.

Upload index.html (and your data/ folder if you have one).

Go to Settings > Pages.

Select main branch and click Save.

Share the generated link (e.g., yourname.github.io/faithflow) with your church.

☁️ Enabling Community Chat (Firebase Setup)

By default, FaithFlow is offline. To turn on the Chat feature, you must link it to a backend.

Create a Project: Go to Firebase Console and create a new project.

Register App: Click the Web icon (</>) to add an app. Give it a name (e.g., "FaithFlow Chat").

Enable Database:

Go to Build > Firestore Database in the sidebar.

Click Create Database.

Choose a location and select Start in Test Mode (e.g., allows reads/writes for 30 days) or configure security rules.

Get Configuration:

Go to Project Settings (Gear icon at the top left).

Scroll down to the Your apps section.

Look for the firebaseConfig object. It looks like this:

{
  "apiKey": "AIzaSy...",
  "authDomain": "your-project.firebaseapp.com",
  "projectId": "your-project",
  "storageBucket": "your-project.appspot.com",
  "messagingSenderId": "123456...",
  "appId": "1:12345..."
}


Connect App:

Open FaithFlow.

Go to Settings.

Paste the JSON object (just the curly braces part {...}) into the Online Features text area.

Click Update Config.

🎨 Branding & Customization

FaithFlow allows you to match your church's identity:

Go to Settings.

Church Name: Updates the sidebar and presentation screens.

Logo: Upload a PNG/JPG image (saved locally in your browser).

Theme Colors: Select Primary and Secondary colors. The app UI automatically adjusts gradients and buttons to match.

📂 JSON Data Structure

If you want to pre-load data (e.g., for a Bible translation), ensure your files in the data/ folder follow this format:

bible.json:

{
  "Genesis": {
    "1": {
      "1": "In the beginning God created the heavens and the earth.",
      "27": "So God created man in His own image..."
    }
  },
  "John": {
    "3": {
      "16": "For God so loved the world that He gave His only begotten Son..."
    }
  }
]

FaithFlow - Simple. Offline. Connected.