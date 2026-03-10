# 🚀 Kaidi Yang — Personal Portfolio Website

A tech-themed personal job-seeking portfolio website built with pure HTML / CSS / JavaScript.

**Live Features:**
- ✨ Animated particle network background
- 🎯 Typing effect headline
- 📊 Animated skill progress bars
- 🃏 3D card tilt on hover
- 📱 Fully responsive (mobile-friendly)
- 💡 Smooth scroll & section highlighting

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML (all 6 sections)
├── css/
│   └── style.css       # Full styling (dark tech theme)
├── js/
│   └── main.js         # Particles, animations, interactions
├── images/
│   └── Snipaste_2026-03-10_15-32-59.png   # Your profile photo
├── 杨凯迪简.pdf          # Resume PDF (downloadable)
└── README.md           # This file
```

---

## 🌐 Deploy to GitHub Pages — Step by Step

### Step 1 — Create a GitHub Account (skip if you already have one)

Go to [https://github.com](https://github.com) and sign up.

---

### Step 2 — Create a New Repository

1. Click the **"+"** icon in the top-right corner → **"New repository"**
2. Fill in the details:
   - **Repository name:** `your-username.github.io`
     > ⚠️ This name is **critical**. Replace `your-username` with your actual GitHub username.
     > Example: if your username is `KaidiYang`, name it `KaidiYang.github.io`
   - **Description:** `Personal Portfolio Website`
   - **Visibility:** ✅ **Public**
   - ☑️ Check **"Add a README file"** (optional, we'll overwrite it)
3. Click **"Create repository"**

---

### Step 3 — Upload Your Files

#### Option A — Upload via GitHub Web (Easiest, no Git needed)

1. Open your new repository page on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop ALL files and folders:
   - `index.html`
   - `css/` folder (with `style.css` inside)
   - `js/` folder (with `main.js` inside)
   - `images/` folder (with your photo inside)
   - `杨凯迪简.pdf`
4. Scroll down → write a commit message, e.g. `Initial portfolio upload`
5. Click **"Commit changes"**

> ⚠️ **Important:** GitHub Web uploader may not preserve folder structure for nested folders.
> If `css/` and `js/` folders are not recognized, use **Option B** below.

---

#### Option B — Upload via Git (Recommended)

Make sure **Git** is installed: [https://git-scm.com/download/win](https://git-scm.com/download/win)

Open **Command Prompt** in your project folder:

```cmd
cd "c:\Users\32034\1-2026-python\2.25\网站"

REM Initialize git repo
git init

REM Add all files
git add .

REM First commit
git commit -m "Initial portfolio commit"

REM Connect to your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

REM Push to GitHub
git branch -M main
git push -u origin main
```

---

### Step 4 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top menu)
3. In the left sidebar, click **"Pages"**
4. Under **"Branch"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**

---

### Step 5 — Access Your Live Website

After 1–3 minutes, your website will be live at:

```
https://YOUR_USERNAME.github.io
```

> 🎉 Example: `https://KaidiYang.github.io`

You can check the deployment status in **Settings → Pages** — it will show a green checkmark with your URL.

---

## ✅ Checklist Before Submitting

- [ ] All 6 sections visible: Home / About / Skills / Projects / Resume / Contact
- [ ] Profile photo displays correctly
- [ ] Resume PDF download link works
- [ ] All navigation links scroll smoothly
- [ ] Website opens on mobile browser
- [ ] URL is publicly accessible (open in incognito window to test)

---

## 📝 Submission (Word Document)

Create a Word document (`.docx`) with the following content:

```
Name:       Kaidi Yang
Student ID: [Your Student ID]
Website URL: https://YOUR_USERNAME.github.io
```

---

## 🔧 Customization Tips

| What to change | Where |
|---|---|
| GitHub profile link | `index.html` → Contact section `href="https://github.com/"` |
| Resume PDF | Replace `杨凯迪简.pdf` with your updated PDF (keep same filename) |
| Profile photo | Replace `images/Snipaste_2026-03-10_15-32-59.png` |
| Email | Search `2924335217@qq.com` in `index.html` |
| Skill percentages | `index.html` → `data-w="88"` attributes in skill bars |

---

## 📞 Contact

- **Email:** 2924335217@qq.com
- **Phone (HK):** +852-84950911

---

*Built with ❤️ using HTML5 / CSS3 / Vanilla JavaScript*
