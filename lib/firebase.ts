import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics, logEvent as firebaseLogEvent, isSupported } from 'firebase/analytics';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

let app: FirebaseApp;
let analytics: Analytics | null = null;
let db: Firestore;

// Initialize Firebase
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  
  // Analytics only works in browser
  if (typeof window !== 'undefined') {
    isSupported().then(supported => {
      if (supported) {
        analytics = getAnalytics(app);
        console.log('🔥 Firebase Analytics initialized');
      }
    });
  }
} else {
  app = getApps()[0];
  db = getFirestore(app);
  if (typeof window !== 'undefined') {
    isSupported().then(supported => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    });
  }
}

// Analytics helper functions
export const logEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    firebaseLogEvent(analytics, eventName, eventParams);
    console.log('📊 Event logged:', eventName, eventParams);
  }
};

export const trackCalculatorEvent = (action: string, data?: Record<string, any>) => {
  logEvent('calculator_interaction', {
    action,
    ...data,
    timestamp: new Date().toISOString()
  });
};

export const trackAssessmentEvent = (action: string, data?: Record<string, any>) => {
  logEvent('assessment_interaction', {
    action,
    ...data,
    timestamp: new Date().toISOString()
  });
};

export const trackServiceView = (serviceName: string) => {
  logEvent('service_viewed', {
    service_name: serviceName,
    timestamp: new Date().toISOString()
  });
};

export const trackConversion = (type: string, value?: number) => {
  logEvent('conversion', {
    conversion_type: type,
    value: value || 0,
    currency: 'USD',
    timestamp: new Date().toISOString()
  });
};

export const trackPageView = (pageName: string, path: string) => {
  logEvent('page_view', {
    page_name: pageName,
    page_path: path,
    timestamp: new Date().toISOString()
  });
};

export { app, analytics, db };
