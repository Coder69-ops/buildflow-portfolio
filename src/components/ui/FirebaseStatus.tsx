import React from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'
import { isFirebaseConfigured } from '../../lib/firebase'

const FirebaseStatus: React.FC = () => {
  if (!isFirebaseConfigured) {
    return (
      <div className="fixed bottom-4 left-4 z-50 bg-yellow-500 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm">
        <AlertCircle className="w-4 h-4" />
        <span>Demo Mode - Firebase not configured</span>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm">
      <CheckCircle className="w-4 h-4" />
      <span>Connected to Firebase</span>
    </div>
  )
}

export default FirebaseStatus
