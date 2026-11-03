// =====================================================================
//  إعدادات الموقع — Site settings
// =====================================================================
// 1) Paste your Firebase web-app config below.
//    Firebase console → Project settings (⚙️) → Your apps → Web app → "SDK setup and configuration" → Config
//    These values are NOT secret. Who can read/edit is controlled by the Firestore rules (firestore.rules).
//
// While apiKey still starts with "PASTE", the site runs in DEMO mode with fake data (nothing is saved).

export const firebaseConfig = {
  apiKey: "AIzaSyBz_CIS-V-XeCZlB9E-aWgHObCULjXoCWQ",
  authDomain: "invoice-tracker-f1ed5.firebaseapp.com",
  projectId: "invoice-tracker-f1ed5",
  storageBucket: "invoice-tracker-f1ed5.firebasestorage.app",
  messagingSenderId: "5742233703",
  appId: "1:5742233703:web:09fed97cb337b26ec1ecc2"
};

// 2) Titles shown at the top of the site (optional).
export const APP_TITLE = "متابعة الفواتير";
export const ORG_NAME = "الفواتير غير المسددة";
