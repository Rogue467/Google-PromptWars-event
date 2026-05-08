# Google Prompt Wars - Project Handover

## Current State
The project has been initialized with a clear separation of concerns to maximize our score on the **Code Assessment (Platform Scoring)**. 

What has been completed:
1. **Frontend Skeleton**: A React + Vite project (`/frontend`) with a premium dark mode, glassmorphism UI.
2. **Authentication Flow**: I am actively connecting **Firebase Authentication (Google Sign-in)**. 
3. **Database Setup**: Firestore is initialized in the frontend code for saving itineraries later.

---

## 🛠️ Your Tasks (Backend & Core Engine)

Once I push the final authentication changes, you can take over the backend API and deployment. According to the rules, your implementation needs to score high on *Google Services usage, Efficiency, and Security*.

### 1. Build the Planning API
Set up your backend (FastAPI or Express) with the following endpoints:
* `POST /plan`: 
  * Accepts: destination, dates, budget, user interests, and constraints.
  * Action: Calls **Gemini 2.0 API** and **Google Places API** to generate a dynamic day-by-day itinerary.
  * Returns: JSON format itinerary.
* `POST /replan`: 
  * Accepts: itinerary ID + a real-time event (e.g., "It's raining today").
  * Action: Re-prompts Gemini to adjust the schedule dynamically.

### 2. Mandatory Google Integrations
To win points on the "Google Services usage" axis, you must use:
* **Gemini API**: For the natural language planning and constraint resolution.
* **Places API / Maps SDK**: For fetching real-time points of interest and distances.
* **Secret Manager**: **DO NOT hardcode API keys!** Use Secret Manager to store your Gemini and Maps keys (this satisfies the "Security" grading axis).

### 3. Cloud Run Deployment (Critical)
* You must deploy the backend to **Google Cloud Run**.
* 🚨 **CRITICAL RULE**: The Top 10 are disqualified if the Cloud Run deployed project link is broken. Make sure it stays alive and handles cold starts properly.

---

## 💻 How to run the Frontend locally
To test your backend API against the UI:
1. Make sure you have Node.js installed.
2. Open a terminal and run:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
3. The app will run on `http://localhost:5173`. When you build the backend, let me know the base URL so we can connect the frontend `fetch()` calls to your Cloud Run instance.
