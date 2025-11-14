# Deployment Guide

This project can be deployed on both **Vercel** and **Netlify**.

## Current Setup

- **Vercel**: Currently deployed (primary)
- **Netlify**: Alternative deployment option

---

## Vercel Deployment

### Files Used
- `vercel.json` - Configuration file
- `api/chat.js` - Serverless function

### Steps

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your Git repository

2. **Set Environment Variable**
   - Go to Project Settings → Environment Variables
   - Add: `GEMINI_API_KEY` = `your_api_key_here`
   - Get API key from: https://makersuite.google.com/app/apikey

3. **Deploy**
   - Vercel will auto-detect `vercel.json` and deploy
   - API endpoint: `https://your-domain.vercel.app/api/chat`

---

## Netlify Deployment

### Files Used
- `netlify.toml` - Configuration file
- `netlify/functions/chat.js` - Serverless function

### Steps

1. **Connect Repository**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

2. **Build Settings** (Auto-detected from netlify.toml)
   - Build command: `echo 'No build needed'`
   - Publish directory: `.`
   - Functions directory: `netlify/functions`

3. **Set Environment Variable**
   - Go to Site Settings → Environment Variables
   - Add: `GEMINI_API_KEY` = `your_api_key_here`
   - Get API key from: https://makersuite.google.com/app/apikey

4. **Deploy**
   - Click "Deploy site"
   - API endpoint: `https://your-domain.netlify.app/api/chat`

---

## Environment Variables

Both platforms need the same environment variable:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

### Getting Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and add it to your deployment platform

---

## Testing Locally

### Vercel (using Vercel CLI)

```bash
# Install Vercel CLI
npm i -g vercel

# Create .env file
echo "GEMINI_API_KEY=your_key_here" > .env

# Run dev server
vercel dev
```

### Netlify (using Netlify CLI)

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Create .env file
echo "GEMINI_API_KEY=your_key_here" > .env

# Run dev server
netlify dev
```

---

## API Endpoint Structure

Both platforms expose the same endpoint:

**POST** `/api/chat`

**Request Body:**
```json
{
  "message": "What is Grosity?"
}
```

**Response:**
```json
{
  "candidates": [{
    "content": {
      "parts": [{ "text": "Grosity is a Patiala-based..." }]
    }
  }]
}
```

---

## Troubleshooting

### Cappi Shows "Offline"

1. **Check Environment Variable**
   - Verify `GEMINI_API_KEY` is set correctly
   - Redeploy after adding the variable

2. **Check API Key**
   - Ensure the key is valid and active
   - Check quota limits at Google AI Studio

3. **Check Logs**
   - Vercel: Project → Deployments → Click deployment → Functions tab
   - Netlify: Site → Functions → Click function → Logs

4. **Test API Endpoint**
   ```bash
   curl -X POST https://your-domain.com/api/chat \
     -H "Content-Type: application/json" \
     -d '{"message":"Hello"}'
   ```

### Function Timeout

- Vercel: Max 30 seconds (configured in vercel.json)
- Netlify: Max 10 seconds (free tier), 26 seconds (pro)

If timeouts occur, the chatbot will fall back to offline responses.

---

## File Structure

```
project/
├── api/                      # Vercel functions
│   └── chat.js
├── netlify/                  # Netlify functions
│   └── functions/
│       └── chat.js
├── vercel.json              # Vercel config
├── netlify.toml             # Netlify config
├── .env.example             # Environment variable template
└── DEPLOYMENT.md            # This file
```

---

## Notes

- Both deployment configs coexist peacefully
- Choose one platform or use both for redundancy
- The frontend code works with both platforms (same API structure)
- Remember to set `GEMINI_API_KEY` on whichever platform you use
