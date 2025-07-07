import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import SEOHead from './SEOHead'

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <SEOHead
        title="Page Not Found - BuildFlow"
        description="The page you're looking for doesn't exist or has been moved. Return to BuildFlow's homepage to continue exploring our web development services."
        keywords="404, page not found, buildflow, error page"
        noIndex={true}
        noFollow={true}
      />
      <div className="max-w-md w-full mx-auto text-center px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="text-6xl font-bold text-primary-600 dark:text-blue-400 mb-4">
            404
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center w-full"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center justify-center w-full"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
