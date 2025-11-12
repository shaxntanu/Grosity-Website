# 🚚 Grosity Truck Loader - Usage Guide

## ✅ Improvements Made:

### 1. Fixed Jitter Issue
- Added initial transform state to prevent animation reset
- Used `will-change` for smoother GPU acceleration
- Improved easing functions for natural motion
- Increased slide distance for cleaner exit

### 2. Refined Animations
- **Entry**: Slides in from left with bounce effect (0.6s)
- **Exit**: Slides out to right smoothly (0.6s)
- **Easing**: Custom cubic-bezier for professional feel
- No more jitter or position reset!

## 🎯 How to Use the Loader:

### Basic Usage:
```javascript
// Show loader
showLoader();

// Hide loader
hideLoader();
```

### Current Implementations:

#### 1. Language Change (Already Active)
- Automatically shows when switching languages
- Displays for ~1.2 seconds during translation

#### 2. Form Submission (Already Active)
- Shows when contact form is submitted
- Simulates 2-second processing time
- Ready for real API integration

#### 3. Network Requests (Template Provided)
```javascript
// Use this pattern for API calls:
async function fetchWithLoader(url, options) {
    showLoader();
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        hideLoader();
        return data;
    } catch (error) {
        hideLoader();
        alert('Network error. Please check your connection.');
        throw error;
    }
}
```

#### 4. Slow Page Loads (Optional)
Uncomment the code in script.js to show loader if page takes >2 seconds to load.

### Custom Usage Examples:

```javascript
// For button clicks
document.querySelector('.my-button').addEventListener('click', async () => {
    showLoader();
    await doSomething();
    hideLoader();
});

// For data loading
async function loadData() {
    showLoader();
    const data = await fetch('/api/data').then(r => r.json());
    hideLoader();
    return data;
}

// With timeout
showLoader();
setTimeout(() => {
    hideLoader();
}, 3000);
```

## 🎨 Features:

- ✅ Smooth slide-in/out animations
- ✅ No jitter or position reset
- ✅ Dark mode compatible
- ✅ "Grosity" branding on truck
- ✅ Animated wheels and road
- ✅ Backdrop blur effect
- ✅ GPU accelerated
- ✅ Reusable functions

## 📝 Notes:

- Loader automatically handles animation timing
- Safe to call `showLoader()` multiple times
- Always pair `showLoader()` with `hideLoader()`
- Minimum display time: ~600ms for smooth UX
