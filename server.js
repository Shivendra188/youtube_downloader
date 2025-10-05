const express = require("express");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/downloads", express.static("downloads"));

// Detect yt-dlp path
let ytdlpPath = "yt-dlp"; // default assumes it's in PATH
const localExe = path.resolve(__dirname, "yt-dlp.exe");

if (fs.existsSync(localExe)) {
  ytdlpPath = localExe; // use local exe if present
  console.log("Using local yt-dlp:", ytdlpPath);
} else {
  console.log("Using global yt-dlp (must be in PATH)");
}

app.post("/download", (req, res) => {
  const videoURL = req.body.url;
  const format = req.body.format; // mp4 or mp3

  if (!videoURL) {
    return res.status(400).send("No URL provided");
  }

  const downloadsDir = path.join(__dirname, "downloads");
  if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir);

  const outputTemplate = path.join(downloadsDir, "%(title)s.%(ext)s");

  let args = ["-o", outputTemplate, videoURL];
  if (format === "mp3") args.push("-x", "--audio-format", "mp3");

  console.log("Running yt-dlp:", ytdlpPath, args.join(" "));

  const ytdlp = spawn(ytdlpPath, args, { shell: true });

  ytdlp.stdout.on("data", (data) => console.log(data.toString()));
  ytdlp.stderr.on("data", (data) => console.error(data.toString()));

  ytdlp.on("close", (code) => {
    if (code === 0) {
      console.log("✅ Download completed!");
      res.redirect("/");
    } else {
      console.error(`yt-dlp exited with code ${code}`);
      res.status(500).send("Download failed!");
    }
  });
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
