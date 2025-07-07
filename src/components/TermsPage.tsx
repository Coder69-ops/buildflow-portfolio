import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Users, FileText, AlertTriangle, Globe, CreditCard, Mail, Calendar } from 'lucide-react'
import SEOHead from './SEOHead'

const TermsPage: React.FC = () => {
  const lastUpdated = new Date(2025, 6, 7) // July 7, 2025
  
  return (
    <section className="relative min-h-screen bg-gradient-mesh section-padding overflow-hidden">
      <SEOHead
        title="Terms of Service - BuildFlow"
        description="Read BuildFlow's comprehensive Terms of Service to understand your rights and responsibilities when using our web development platform and services."
        keywords="terms of service, terms and conditions, buildflow terms, user agreement, website terms, service agreement, legal, template license"
        canonicalUrl="https://buildflow.aixplore.me/terms"
        noIndex={false}
        breadcrumbs={[
          { name: "Home", url: "https://buildflow.aixplore.me/" },
          { name: "Terms of Service", url: "https://buildflow.aixplore.me/terms" }
        ]}
      />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-20"></div>
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-400/40 to-accent-400/40 rounded-full blur-3xl float animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent-400/40 to-primary-400/40 rounded-full blur-3xl float-delayed animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-green-400/25 to-teal-400/25 rounded-full blur-xl float"></div>
      </div>

      {/* Dark mode background elements */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-gradient-to-r from-green-500/15 to-teal-500/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
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
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-blue-600 dark:to-purple-600 px-6 sm:px-8 py-8 sm:py-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 sm:mb-6">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Your agreement with BuildFlow for using our web development platform and services
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
            {/* Quick Summary */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Quick Summary
              </h2>
              <p className="text-blue-800 dark:text-blue-300 text-xs sm:text-sm leading-relaxed">
                By using BuildFlow, you agree to these terms. We provide web development templates and services. You can purchase and use our templates for your projects, but cannot resell them. We aim to provide quality service while protecting both your rights and ours.
              </p>
            </div>
            
            <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
              {/* Section 1: Acceptance */}
              <section className="mb-8 sm:mb-12">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg">
                    1
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      Acceptance of Terms
                    </h2>
                  </div>
                </div>
                <div className="pl-12 sm:pl-16">
                  <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    By accessing and using BuildFlow's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    These terms apply to all visitors, users, and others who access or use our service, including our website templates, customization services, and any related services.
                  </p>
                </div>
              </section>

              {/* Section 2: Services */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Our Services
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    BuildFlow provides:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-primary-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Ready-made website templates for various industries and purposes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Custom website development and customization services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Technical support and documentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>User account management and authentication services</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: User Accounts */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      User Accounts
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    To access certain features of our service, you may be required to create an account. You are responsible for:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                    <li>• Providing accurate and complete information when creating your account</li>
                    <li>• Maintaining the security of your account and password</li>
                    <li>• Notifying us immediately of any unauthorized use of your account</li>
                    <li>• All activities that occur under your account</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    You must be at least 18 years old to create an account. Accounts may not be shared or transferred to others.
                  </p>
                </div>
              </section>

              {/* Section 4: Template License */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Template License & Usage Rights
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                      ✓ What You Can Do
                    </h3>
                    <ul className="space-y-2 text-green-800 dark:text-green-300 text-sm">
                      <li>• Use purchased templates for unlimited personal or commercial projects</li>
                      <li>• Modify, customize, and adapt templates to fit your needs</li>
                      <li>• Create derivative works based on the templates</li>
                      <li>• Use templates for client projects (if you're a developer/agency)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                      ✗ What You Cannot Do
                    </h3>
                    <ul className="space-y-2 text-red-800 dark:text-red-300 text-sm">
                      <li>• Resell, redistribute, or share the original template files</li>
                      <li>• Claim ownership of the template designs</li>
                      <li>• Create competing template libraries using our designs</li>
                      <li>• Share your account access with others</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5: Payments */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Payments & Refunds
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    All payments are processed securely through our payment providers. By making a purchase, you agree to:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                    <li>• Provide accurate payment information</li>
                    <li>• Pay all charges incurred under your account</li>
                    <li>• Be responsible for any applicable taxes</li>
                  </ul>
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-300 mb-3 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Refund Policy
                    </h3>
                    <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
                      Due to the digital nature of our products, refunds are generally not available once a template has been downloaded. However, we may provide refunds in cases of technical issues or if the template significantly differs from its description. Please contact us within 7 days of purchase for refund requests.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Prohibited Uses */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    6
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Prohibited Uses
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts. Prohibited uses include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Harassment or discrimination</li>
                      <li>• Violating intellectual property rights</li>
                      <li>• Transmitting viruses or malicious code</li>
                      <li>• Attempting to gain unauthorized access</li>
                    </ul>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Spamming or unsolicited marketing</li>
                      <li>• Illegal activities or content</li>
                      <li>• Impersonating others</li>
                      <li>• Reverse engineering our software</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 7: Disclaimers */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    7
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Disclaimers & Limitations
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Important Notice
                    </h3>
                    <p className="text-yellow-800 dark:text-yellow-300 text-sm leading-relaxed">
                      Our services are provided "as is" without warranties of any kind. We strive to provide high-quality templates and services but cannot guarantee uninterrupted availability or error-free operation.
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    BuildFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                  </p>
                </div>
              </section>

              {/* Section 8: Changes */}
              <section className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    8
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Changes to Terms
                    </h2>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of our services after changes constitutes acceptance of the new terms.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    For significant changes, we will notify users via email or through our service notifications.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary-600 dark:bg-blue-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Questions About These Terms?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2">
                    If you have any questions about these Terms of Service, please don't hesitate to contact us. We're here to help clarify any concerns you may have.
                  </p>
                  <div className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    <p><strong>Email:</strong> legal@buildflow.com</p>
                    <p><strong>Support:</strong> support@buildflow.com</p>
                    <p><strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
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

export default TermsPage
