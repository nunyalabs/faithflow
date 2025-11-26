# 🙏 FaithFlow - Offline Church Management PWA

**Simple. Offline. For every church.**

FaithFlow is a fully offline Progressive Web App (PWA) designed specifically for small and rural churches to manage members, finances, worship presentations, and more - all without requiring an internet connection.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![PWA](https://img.shields.io/badge/PWA-Ready-orange)

---

## ✨ Features

### 📊 **Dashboard**
- Quick overview of total members, monthly offerings, hymns library, and active announcements
- Recent activity tracking
- Upcoming events display
- One-click access to all modules

### 👥 **Members Management**
- Add, edit, and delete member records
- Store: Full name, gender, age, phone, email, join date
- **Committee/Department assignments** - Assign members to multiple committees
- Search and filter members
- Export/import member data as JSON
- Member directory with avatars
- Committee badges on member profiles

### 💰 **Finance Management**
- Configurable giving categories (Tithe, Offering, Thanksgiving, Special Offering, Welfare, Custom)
- Record transactions with date, member, amount, and notes
- Monthly and category-based summaries
- Visual reports and totals
- Export to CSV for accounting
- Filter by category and month
- **Church branding** on printed reports

### 🎵 **Hymns Library**
- Store unlimited hymn lyrics
- Categorize by Praise, Worship, Special, etc.
- Full-text search
- Quick access for worship presentation
- Export/import hymn collections
- **Admin-managed content** with centralized updates

### 📢 **Announcements**
- Create and schedule church announcements
- Display on dashboard and worship presenter
- Date-based filtering (active/past)
- Simple message management
- **Admin-managed content** with centralized updates

### 🎥 **Worship Presenter**
- **Fullscreen presentation mode** for projectors
- **Church branding** displayed on all slides (logo + name)
- Present hymns, announcements, and Bible verses
- Keyboard navigation (arrow keys, spacebar)
- Adjustable font size
- Light/Dark theme toggle
- Slide-by-slide display
- Auto-formatting for readability

### 📖 **Offline Bible**
- Searchable Bible text (stored locally)
- Verse lookup (e.g., "John 3:16")
- Keyword search
- Send verses directly to worship presenter
- No internet required

### 🛡️ **Admin Content Management** ⭐ NEW
- **User Management** - Create admin and member accounts
- **User Access Codes** - Generate unique 6-character codes for each user
- **Role-Based Access** - Admin vs. Member permissions
- **Centralized Content Creation** - Add/edit announcements and hymns
- **Update File Generation** - Export content as JSON for distribution
- **Offline Distribution** - Share updates via email, USB, messaging apps
- **Bulk Content Updates** - All users import the same file to stay synchronized

### ⚙️ **Settings & Customization**
- **Church Information**:
  - Church name (displayed prominently throughout app)
  - Location/Branch name
  - Physical address
  - Phone and email contact
  - Church logo (displayed in header and presentations)
- **Head Pastor Details**:
  - Name, title, phone, email
- **Church Elders**:
  - Add multiple elders with full contact details
- **Committees/Departments**:
  - Define unlimited committees with descriptions
  - Assign members to multiple committees
- **Theme Customization**: 
  - Primary, secondary, and accent colors
  - Font selection
  - Dark mode support
- **Finance Categories**: Enable/disable categories
- **Data Management**: Export/import all data
- **User Preferences**: Name, theme preference

---

## 🚀 Quick Start

### Installation

1. **Download or Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/faithflow.git
   cd faithflow
   ```

2. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (if you have http-server installed)
     npx http-server
     ```
   - Navigate to `http://localhost:8000`

3. **Install as PWA**
   - Click the "Install App" button on the dashboard
   - Or use your browser's install option (usually in the address bar)
   - App works completely offline after installation

### First-Time Setup

1. **Go to Settings**
   - Click the gear icon in the navigation
   - Enter your church name
   - Customize colors to match your branding
   - Enable/disable finance categories as needed
   - Save your settings

2. **Add Sample Data** (Optional)
   - Sample members, hymns, and announcements are included
   - Import them or start fresh
   - Use Export/Import buttons to manage data

3. **Start Using FaithFlow!**
   - Add your first member
   - Record an offering
   - Add hymns for Sunday service
   - Create announcements
   - Start the worship presenter

---

## 📁 Project Structure

```
faithflow/
├── index.html                   # Dashboard
├── members.html                 # Members management
├── finance.html                 # Financial records
├── hymns.html                   # Hymns library
├── announcements.html           # Announcements
├── worship.html                 # Worship presenter (fullscreen)
├── bible.html                   # Offline Bible reader
├── settings.html                # Church settings
│
├── css/
│   └── style.css                # Modern iOS glass design
│
├── js/
│   ├── app.js                   # Core app & PWA logic
│   ├── storage.js               # LocalStorage management
│   ├── utils.js                 # Helper functions
│   ├── members.js               # Members module
│   ├── finance.js               # Finance module
│   ├── hymns.js                 # Hymns module
│   ├── announcements.js         # Announcements module
│   ├── worship.js               # Worship presenter
│   ├── bible.js                 # Bible search
│   └── settings.js              # Settings management
│
├── data/
│   ├── bible.json               # Bible verses (sample)
│   ├── hymns.json               # Sample hymns
│   ├── announcements.json       # Sample announcements
│   ├── members.json             # Sample members
│   └── config.json              # App configuration
│
├── icons/
│   ├── icon-192.png             # PWA icon 192x192
│   ├── icon-512.png             # PWA icon 512x512
│   └── favicon.ico              # Browser favicon
│
├── manifest.json                # PWA manifest
├── service-worker.js            # Offline caching
└── README.md                    # This file
```

---

## 🛡️ Admin Content Management Workflow

### Overview
FaithFlow now includes a powerful admin system that allows designated users to manage content centrally and distribute updates to all church members offline.

### User Roles
- **Admin**: Can create/edit all content, generate update files, manage users
- **Member**: Can view and use content, import updates from admins

### Setting Up Admin Users

1. **Initial Setup**:
   - Go to **Settings** page
   - Enter your church information (name, logo, contact details)
   - Define committees/departments your church uses

2. **Create Admin Account**:
   - Go to **Admin** page
   - Click "Add User"
   - Enter admin details (name, email, phone)
   - Select role: **Admin**
   - System generates a unique 6-character access code
   - Share this code with the admin user

3. **Create Member Accounts** (optional):
   - Follow same process but select role: **Member**
   - Each member gets their own access code

### Content Management Workflow

#### For Admin Users:

1. **Navigate to Admin Page**:
   - Click "Admin" in the main navigation
   - Access the Content Management tabs

2. **Manage Content**:
   - **Announcements Tab**: Add/edit/delete church announcements
   - **Hymns Tab**: Add/edit/delete hymns with lyrics
   - **Bible Tab**: Bible content loaded from data files

3. **Generate Update File**:
   - Select what to include in the update:
     - ✅ Announcements
     - ✅ Hymns
     - ✅ Church Information
   - Click "Generate Update File"
   - System creates a JSON file with current date and church name
   - Example: `Grace-Church-Update-2025-11-09.json`

4. **Distribute Update File**:
   - Share the JSON file with approved users via:
     - **Email** - Send as attachment
     - **WhatsApp/Telegram** - Share file
     - **USB Drive** - Copy and hand-deliver
     - **Cloud Storage** - Google Drive, Dropbox, etc.
     - **Bluetooth** - Direct device transfer

#### For All Users:

1. **Receive Update File**:
   - Admin shares the JSON file through chosen method

2. **Import Update**:
   - Go to **Dashboard**
   - Click "Import Data" button
   - Select the update JSON file
   - Choose import option:
     - **Merge** - Add new content, keep existing
     - **Replace** - Replace all content with update
   - Click "Import"
   - System updates all content instantly

3. **Verify Update**:
   - Check Announcements page for new announcements
   - Check Hymns page for new hymns
   - View updated church information in Settings

### Benefits of This Workflow

✅ **Centralized Control** - Admin manages all content in one place  
✅ **Offline Distribution** - No internet required, works anywhere  
✅ **Consistent Content** - All users see the same information  
✅ **Easy Updates** - One file updates everything  
✅ **Flexible Delivery** - Use any file transfer method  
✅ **Version Tracking** - Update files include dates  
✅ **Selective Updates** - Choose what to include in each update  

### Example Use Cases

**Weekly Updates**:
- Admin adds Sunday's announcements
- Creates hymns for worship service
- Generates update file on Saturday
- Shares via WhatsApp group
- All members import before Sunday service

**Monthly Updates**:
- Admin adds month's events and announcements
- Updates hymn library with new songs
- Generates monthly update file
- Distributes via email or USB at monthly meeting
- Members import and have synchronized content

**Emergency Updates**:
- Admin creates urgent announcement
- Generates quick update file
- Shares immediately via messaging app
- Members import and see announcement instantly

---

## 🎨 Design Features

### Modern iOS Glass Morphism
- **Glassmorphism effects**: Frosted glass cards with backdrop blur
- **Smooth animations**: Fade-in, slide-in, and hover effects
- **Responsive design**: Works perfectly on mobile, tablet, and desktop
- **Custom color themes**: Fully customizable brand colors
- **Dark mode**: Automatic or manual dark theme
- **Beautiful gradients**: Modern color schemes throughout

### UI Components
- Bootstrap 5 for layout and components
- Bootstrap Icons for consistent iconography
- Custom CSS variables for easy theming
- Accessible keyboard navigation
- Touch-friendly mobile interface

---

## 💾 Data Management

### Storage
- All data stored in **browser LocalStorage**
- No server or database required
- Data persists across sessions
- Works completely offline

### Export/Import
- **Export**: Download all data as JSON
- **Import**: Upload and merge/replace data
- **Backup**: Regular exports recommended
- **Share**: Transfer data between devices via file

### Data Sharing Between Devices
1. Export data on Device A → creates `.json` file
2. Transfer file (email, USB, Bluetooth, cloud)
3. Import on Device B → data synchronized

---

## 🔧 Technical Details

### Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **UI Framework**: Bootstrap 5
- **Icons**: Bootstrap Icons
- **Storage**: LocalStorage API
- **Offline**: Service Worker with caching
- **PWA**: Installable, works offline

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Requirements
- Modern web browser with JavaScript enabled
- ~5MB storage space for app and data
- No internet connection required after installation

---

## 🎯 Use Cases

### Perfect For:
- ✅ Small rural churches with limited internet
- ✅ Churches on a tight budget
- ✅ Mobile church plants
- ✅ Prayer groups and fellowships
- ✅ Churches in areas with unreliable connectivity
- ✅ Pastors who need offline access

### Key Benefits:
- 🌐 **100% Offline** - No internet dependency
- 💰 **Zero Cost** - No subscriptions or fees
- 🔒 **Privacy** - All data stays on your device
- 📱 **Cross-Platform** - Works on any device
- 🚀 **Fast** - No loading times
- 🎨 **Customizable** - Match your church branding

---

## 📖 User Guide

### Managing Members
1. Click "Members" in navigation
2. Click "Add Member" button
3. Fill in member details (name, gender, age, department, phone, join date)
4. Click "Save Member"
5. Search members using the search bar
6. Export member list for backup

### Recording Finances
1. Go to "Finance" page
2. Click "Record Transaction"
3. Select date, category, and enter amount
4. Optionally link to a member
5. Add notes if needed
6. View summaries by month or category
7. Export to CSV for external accounting

### Presenting Worship Content
1. Add hymns or announcements first
2. Navigate to "Worship" page
3. Click "Select Content"
4. Choose hymn, announcement, or Bible verse
5. Use arrow keys or on-screen buttons to navigate
6. Press 'F' for fullscreen
7. Adjust font size and theme as needed

### Customizing Your Church
1. Go to "Settings"
2. Enter church name
3. Choose primary, secondary, and accent colors
4. Preview changes in real-time
5. Enable/disable finance categories
6. Save settings - changes apply immediately

---

## 🔐 Data Privacy & Security

- **No server**: All data stored locally on your device
- **No tracking**: No analytics or external calls
- **No accounts**: No registration or login required
- **Your data, your control**: Export and delete anytime
- **Offline-first**: Works without internet

---

## 🆘 Troubleshooting

### App won't install as PWA
- Ensure you're using HTTPS (or localhost for testing)
- Check browser supports PWA installation
- Clear browser cache and try again

### Data not saving
- Check browser storage isn't full
- Ensure JavaScript is enabled
- Try a different browser

### Worship presenter not fullscreen
- Click the fullscreen button or press 'F'
- Some browsers require user interaction first
- Check browser permissions

### Icons not showing
- Replace placeholder icons in `/icons/` folder
- Use PNG format: 192x192 and 512x512
- Generate icons at https://realfavicongenerator.net/

---

## 🛠️ Customization

### Adding Custom Finance Categories
1. Go to Settings
2. Modify church configuration
3. Add to `customCategories` in code if needed

### Extending Bible Content
- Replace `data/bible.json` with full Bible data
- Maintain JSON structure: `{ "Book": { "Chapter": { "Verse": "Text" } } }`

### Styling Changes
- Edit `css/style.css`
- Modify CSS variables in `:root` selector
- Colors automatically update throughout app

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Share with other churches

---

## 💬 Support

For questions or support:
- Open an issue on GitHub
- Contact your local tech support
- Refer to this README

---

## 🙏 Credits

Made with ❤️ for churches everywhere.

**FaithFlow** - Empowering churches through technology, regardless of internet availability.

---

## 📱 Screenshots

*(Add screenshots of your app here)*

---

## 🎯 Roadmap

Future enhancements:
- [ ] Attendance tracking
- [ ] Event calendar
- [ ] SMS notifications (when online)
- [ ] Multi-language support
- [ ] Prayer request management
- [ ] Volunteer scheduling
- [ ] Enhanced reporting

---

**Version 1.0.0** - November 2025

*"Simple. Offline. For every church."*
