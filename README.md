# 💖 Happy 17th Birthday Website for My Love • October 10

A deeply romantic, mobile-first, interactive birthday website crafted with love for Rahul's girlfriend's 17th birthday (born **October 10, 2009 AD** / **२०६६ असोज २४ BS**).

---

## ✨ Features & Highlights

1. **📱 Phone & Mobile-First Design**:
   - Engineered specifically for modern smartphone screens (iPhone & Android).
   - Smooth touch gestures, swipeable gallery lightbox, haptic visual feedback, and safe area notch handling.

2. **🎁 Interactive Surprise Gift Box**:
   - Cute unwrap screen that bursts into celebratory confetti and floating hearts upon tapping.
   - Automatically begins the romantic background melody on unlock.

3. **🎂 Interactive Birthday Cake & Candle Blow Ceremony**:
   - 3-tier birthday cake with glowing flickering flames.
   - Tap the candles to "blow them out", causing the flames to extinguish into realistic smoke puffs and triggering a grand celebratory confetti shower and wish reveal!

4. **👑 TOP PRIORITY: "Us, Together" (Our Story)**:
   - Dedicated, grand spotlight section at the very top of the story.
   - Big glossy Polaroid frames with washi tape stickers and handwritten captions for pictures of you both together.
   - Custom-styled romantic video player for your video together (`2090f1fc-fbcf-49bd-9333-efec9857a80c.mp4`) with glassmorphic controls and love quote card.
   - Three sacred love promises to her.

5. **🌷 "All About Her" (The Birthday Queen Gallery)**:
   - 53 photos and 11 videos & reels with filter tabs (`All`, `Cute Photos`, `Videos & Reels`).
   - Double-tap or tap the heart badge to give likes with floating heart reactions.
   - Full-screen lightbox with touch swipe navigation (swipe left/right to browse).

6. **💌 17 Reasons Why I Adore You**:
   - 17 interactive 3D flip cards (one for each year of her life).
   - Progress bar that tracks revealed reasons.
   - Unlocking all 17 reveals a secret love celebration banner!

7. **📜 Vintage Wax-Sealed Love Letter**:
   - 3D wax seal that cracks and opens upon touch.
   - Smoothly unfolds a deeply emotional, romantic handwritten letter from Rahul.

8. **💋 Infinite Kisses & Love Cannon**:
   - Tap to send real-time floating kisses and heart explosions with counter milestones.

9. **🎶 Floating Romantic Music Player**:
   - Built-in Web Audio API Music Box that synthesizes sweet acoustic bell melodies.
   - Can toggle between the music box and `our_memory.mp3`.
   - Spinning vinyl disc with pulsating sound waves.

---

## 🚀 How to View Locally on Your Phone or PC

You can start a local preview server with Python right now:

```bash
cd /home/rahul/birthday-website
python3 -m http.server 8080
```

Then:
- **On your PC**: Open [http://localhost:8080](http://localhost:8080) in your browser.
- **On her/your phone** (same WiFi): Open `http://<your-pc-ip>:8080` (e.g. `http://192.168.1.X:8080`).

---

## 🌐 How to Upload to GitHub & Deploy with Custom Domain

### Option A: Using the Automated Script

Simply run:
```bash
cd /home/rahul/birthday-website
./deploy.sh
```
The script will prompt you for:
1. Your custom domain (e.g. `birthday.yourdomain.com`), saving it to `CNAME`.
2. Your GitHub repository URL (e.g. `https://github.com/your-username/birthday.git`).
3. It will push everything to the `main` branch automatically!

### Option B: Manual Steps

1. Create a new repository on [GitHub](https://github.com/new) (e.g., named `birthday` or `for-her`).
2. Add your custom domain to `CNAME`:
   ```bash
   echo "yourdomain.com" > /home/rahul/birthday-website/CNAME
   ```
3. Link and push:
   ```bash
   cd /home/rahul/birthday-website
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
   git push -u origin main
   ```
4. Enable GitHub Pages:
   - Go to your repository on GitHub -> **Settings** -> **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Select **Branch**: `main`, Folder: `/ (root)`.
   - Click **Save**.
   - Under **Custom domain**, ensure your domain is entered and check **Enforce HTTPS**.

---

💖 *Happy Birthday to the most special girl in the universe!*
