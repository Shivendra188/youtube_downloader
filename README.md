# YouTube Downloader Project

A full-stack **YouTube video and audio downloader** built with **Node.js, Express.js, and yt-dlp**.  
This project allows users to download YouTube videos in MP4 format or extract audio in MP3 format using a clean web interface.
--

## 🚀 Features
- Download YouTube videos in multiple resolutions
- Download only audio (MP3 format)  
- Works for normal videos, playlists, and shorts  
- Shows real-time download process in backend logs  
- Saves downloads in a `/downloads` folder  
- Simple and responsive HTML/CSS frontend
- 
- Compatible with Windows, macOS, and Linux
- 
## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Downloader:** [yt-dlp](https://github.com/yt-dlp/yt-dlp)  
- **Package Manager:** npm  

---

## 📂 Folder Structure
youtube-downloader/
│
├── public/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── downloads/ # Downloaded files
├── server.js # Backend code
├── package.json
└── README.md

---

## ⚙️ How to Run Locally

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/youtube-downloader.git
cd youtube-downloader
2. Install dependencies:
bash
Copy code
npm install
3. Install yt-dlp:
Option A — Local exe:
Download yt-dlp.exe from yt-dlp releases

Place it inside the project folder

Option B — Global install:
bash
Copy code
pip install yt-dlp
Test:

bash
Copy code
yt-dlp --version
4. Start the server:
bash
Copy code
npx nodemon server.js
5. Open in browser:
arduino
Copy code
http://localhost:3000
Paste YouTube URL, choose format, and download.

📌 Notes
Downloads are stored in the /downloads folder

Make sure yt-dlp is installed either locally or globally

Supports YouTube playlists and shorts

