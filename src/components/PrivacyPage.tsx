import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Globe, 
  Settings, 
  Mail, 
  Calendar, 
  Database, 
  Smartphone,
  Cookie,
  UserCheck,
  CheckCircle,
  FileText
} from 'lucide-react'
import SEOHead from './SEOHead'

const PrivacyPage: React.FC = () => {
  const lastUpdated = new Date(2025, 6, 7) // July 7, 2025
  
  return (
    <section className="relative min-h-screen bg-gradient-mesh section-padding overflow-hidden">
      <SEOHead
        title="Privacy Policy - BuildFlow"
        description="Learn about BuildFlow's comprehensive privacy policy and how we protect your personal information when you use our web development platform and services."
        keywords="privacy policy, data protection, personal information, buildflow privacy, user privacy, data security, GDPR, CCPA, cookies"
        canonicalUrl="https://buildflow.aixplore.me/privacy"
        noIndex={false}
        breadcrumbs={[
          { name: "Home", url: "https://buildflow.aixplore.me/" },
          { name: "Privacy Policy", url: "https://buildflow.aixplore.me/privacy" }
        ]}
      />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-20"></div>
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-400/40 to-teal-400/40 rounded-full blur-3xl float animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/40 to-green-400/40 rounded-full blur-3xl float-delayed animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full blur-2xl float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-blue-400/25 to-purple-400/25 rounded-full blur-xl float"></div>
      </div>

      {/* Dark mode background elements */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-teal-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 lg:top-8 lg:left-8 z-20 flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="font-medium hidden sm:inline">Back to Home</span>
      </Link>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Content */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden mt-16 lg:mt-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-600 dark:to-blue-600 px-6 sm:px-8 py-8 sm:py-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 sm:mb-6">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-white/80 text-sm sm:text-base">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Last updated: {lastUpdated.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
            {/* Privacy Commitment */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-base sm:text-lg font-semibold text-green-900 dark:text-green-300 mb-3 flex items-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Our Privacy Commitment
              </h2>
              <p className="text-green-800 dark:text-green-300 text-xs sm:text-sm leading-relaxed">
                We are committed to protecting your privacy and ensuring transparency about how we handle your data. We only collect information necessary to provide our services and never sell your personal information to third parties.
              </p>
            </div>
            
            <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
              {/* Section 1: Information We Collect */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg">
                    1
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      Information We Collect
                    </h2>
                  </div>
                </div>
                <div className="pl-12 sm:pl-16">
                  <div className="grid gap-4 sm:gap-6 mb-4 sm:mb-6 lg:grid-cols-2">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center">
                        <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Personal Information
                      </h3>
                      <ul className="space-y-2 text-blue-800 dark:text-blue-300 text-xs sm:text-sm">
                        <li>• Name and email address</li>
                        <li>• Account credentials</li>
                        <li>• Profile information</li>
                        <li>• Payment information</li>
                        <li>• Communication preferences</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3 flex items-center">
                        <Database className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Usage Information
                      </h3>
                      <ul className="space-y-2 text-purple-800 dark:text-purple-300 text-xs sm:text-sm">
                        <li>• Pages visited and features used</li>
                        <li>• Time spent on our platform</li>
                        <li>• Templates viewed and purchased</li>
                        <li>• Search queries and preferences</li>
                        <li>• Error reports and feedback</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-300 mb-3 flex items-center">
                      <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Technical Information
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
                      We automatically collect certain technical information when you visit our website:
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                      <li>• IP address and general location</li>
                      <li>• Browser type and version</li>
                      <li>• Operating system</li>
                      <li>• Screen resolution and device type</li>
                      <li>• Referral source</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 2: How We Use Information */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      How We Use Your Information
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Settings className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Service Delivery
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Process orders, manage accounts, and provide customer support
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Improvement
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Analyze usage patterns to improve our services and user experience
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Communication
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Send important updates, newsletters, and promotional content
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Your Rights */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Your Privacy Rights
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3">
                      Under GDPR, CCPA, and other privacy laws, you have the right to:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-purple-800 dark:text-purple-300 text-sm">
                        <li>• Access your personal information</li>
                        <li>• Correct inaccurate data</li>
                        <li>• Delete your data (right to be forgotten)</li>
                        <li>• Export your data (data portability)</li>
                      </ul>
                      <ul className="space-y-2 text-purple-800 dark:text-purple-300 text-sm">
                        <li>• Object to processing</li>
                        <li>• Restrict processing</li>
                        <li>• Withdraw consent</li>
                        <li>• Lodge a complaint with authorities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Data Security */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Data Security & Protection
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-300 mb-3 flex items-center">
                        <Lock className="w-5 h-5 mr-2" />
                        Technical Safeguards
                      </h3>
                      <ul className="space-y-2 text-indigo-800 dark:text-indigo-300 text-sm">
                        <li>• SSL/TLS encryption</li>
                        <li>• Secure data centers</li>
                        <li>• Regular security audits</li>
                        <li>• Access controls and monitoring</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Organizational Measures
                      </h3>
                      <ul className="space-y-2 text-blue-800 dark:text-blue-300 text-sm">
                        <li>• Employee training</li>
                        <li>• Privacy by design</li>
                        <li>• Incident response procedures</li>
                        <li>• Regular policy updates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Cookies */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Cookies & Tracking
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-3 flex items-center">
                      <Cookie className="w-5 h-5 mr-2" />
                      What Are Cookies?
                    </h3>
                    <p className="text-orange-800 dark:text-orange-300 text-sm leading-relaxed">
                      Cookies are small text files stored on your device that help us provide a better experience. We use both session cookies (deleted when you close your browser) and persistent cookies (remain until deleted or expired).
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Essential
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Required for basic functionality (authentication, security)
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Analytics
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Help us understand how visitors use our site
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Preferences
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Remember your settings and preferences
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Information Sharing */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    6
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Information Sharing
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                      We Never Sell Your Data
                    </h3>
                    <p className="text-red-800 dark:text-red-300 text-sm leading-relaxed">
                      We do not sell, rent, or trade your personal information to third parties for marketing purposes. Your data is not a commodity to us.
                    </p>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    We may share information in these limited circumstances:
                  </h3>
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Service Providers:</strong> With trusted partners who help us operate our platform
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Legal Requirements:</strong> When required by law or to protect our rights
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Business Transfers:</strong> In the event of a merger or acquisition
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Contact Section */}
              <section className="mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 dark:bg-blue-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Privacy Questions or Concerns?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2">
                    We're committed to protecting your privacy. If you have any questions about this policy or how we handle your data, please don't hesitate to reach out.
                  </p>
                  <div className="grid gap-6 sm:gap-8 max-w-4xl mx-auto md:grid-cols-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Privacy Officer
                      </h3>
                      <div className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        <p><strong>Email:</strong> privacy@buildflow.com</p>
                        <p><strong>Response Time:</strong> Within 2 business days</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        General Support
                      </h3>
                      <div className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        <p><strong>Email:</strong> support@buildflow.com</p>
                        <p><strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPage
