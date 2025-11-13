# Grosity - Fresh Produce Website

![Grosity](https://img.shields.io/badge/Status-Beta-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

**Grosity** is a Patiala-based fresh produce startup connecting farmers, vendors, and customers through a simple, transparent, and sustainable supply chain.

## 🌟 Features

- **Trilingual Support**: English, Hindi (हिंदी), and Punjabi (ਪੰਜਾਬੀ)
- **Dark/Light Mode**: Beautiful animated theme toggle with sun/moon transition
- **Interactive Animations**: Particles.js background effects
- **Contact Form**: Firebase-integrated form with real-time submissions
- **Responsive Design**: Mobile-first, works on all devices
- **Network Cards**: Separate interfaces for Farmers, Vendors, and Consumers

## 🚀 Live Demo

[View Live Site](#) <!-- Add your deployed URL here -->

## 📋 Prerequisites

- A modern web browser
- Firebase account (for contact form functionality)
- Basic knowledge of HTML/CSS/JavaScript (for customization)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/grosity-website.git
   cd grosity-website
   ```

2. **Open the project**
   - Simply open `index.html` in your browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

3. **Configure Firebase** (Optional - for contact form)
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Copy your Firebase config and replace in `index.html` (lines 400-408)
   - Deploy the security rules from `firestore.rules`

## 🔥 Firebase Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Enable Firestore Database in "Build" → "Firestore Database"

### 2. Get Configuration
1. Go to Project Settings → General
2. Scroll to "Your apps" → Web app
3. Copy the `firebaseConfig` object
4. Replace the config in `index.html` (lines 400-408)

### 3. Deploy Security Rules
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login and initialize:
   ```bash
   firebase login
   firebase init firestore
   ```

3. Deploy the rules:
   ```bash
   firebase deploy --only firestore:rules
   ```

### 4. Security Rules Explanation
The `firestore.rules` file includes:
- **Public write access** for contact form submissions (with validation)
- **Authenticated read/update** for admin access
- **Data validation** to prevent spam and malicious input
- **Size limits** on all fields

## 📁 Project Structure

```
grosity-website/
├── index.html              # Main HTML file
├── style.css               # All styles and animations
├── script.js               # JavaScript functionality
├── firestore.rules         # Firebase security rules
├── README.md               # This file
├── .gitignore             # Git ignore file
├── consumer.png           # Consumer card image
├── farmer.png             # Farmer card image
└── vendor.png             # Vendor card image
```

## 🎨 Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --bg-primary: #ffffff;
    --accent-primary: #FFD700;
    --accent-secondary: #22C55E;
    /* ... more variables */
}
```

### Update Contact Information
Edit the contact section in `index.html`:
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<p>+91 YOUR PHONE NUMBER</p>
```

### Modify Languages
Add or edit translations in `script.js` under the `translations` object.

## 🌐 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select branch and folder
4. Your site will be live at `https://yourusername.github.io/grosity-website`

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy!

### Vercel
```bash
npm i -g vercel
vercel
```

## 🔒 Security Best Practices

1. **Firebase Security Rules**: Already configured in `firestore.rules`
2. **Rate Limiting**: Consider adding Firebase App Check
3. **Email Validation**: Built into the contact form
4. **Input Sanitization**: Firestore rules validate all inputs

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Grosity**
- Email: grosity.connect@gmail.com
- Phone: +91 73096 85242
- Location: Patiala, Punjab, India

**Social Media**
- [Instagram](https://www.instagram.com/grosityindia/)
- [LinkedIn](http://www.linkedin.com/in/grosity-india)
- [Facebook](https://www.facebook.com/people/Grosity-India/61583786994817)
- [WhatsApp](https://wa.me/917309685242)

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 Grosity

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- [Particles.js](https://vincentgarreau.com/particles.js/) for background animations
- [Firebase](https://firebase.google.com/) for backend services
- [Google Fonts](https://fonts.google.com/) for typography
- All the farmers, vendors, and customers who inspire this project

---

**Made with ❤️ in Patiala, Punjab**

*Fresh. Fast. Fair.*
