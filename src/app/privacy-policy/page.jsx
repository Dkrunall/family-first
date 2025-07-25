'use client';
import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-global-1">
      <Header />
      <main className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-bold leading-normal lg:leading-[80px] text-center mx-auto bg-gradient-to-r from-[#E9866E] via-[#959189] to-[#4A9CA5] bg-clip-text text-transparent mb-8 py-4">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-white">
            <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-6 lg:leading-[24px] text-white mb-6">
              <strong>Effective Date:</strong> July 24, 2025
            </p>
            
            <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-6 lg:leading-[24px] text-white mb-6">
              This Privacy Policy explains how Family1st ("we," "us," or "our") collects, uses, and safeguards your information when you use our mobile application ("App") and its associated services. We are committed to protecting your privacy and ensuring transparency about the data we collect and how it is used.
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-white mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-base sm:text-lg lg:text-[20px] font-semibold leading-6 lg:leading-[24px] text-white mt-6 mb-3">a. Personal Information</h3>
            <ul className="list-disc pl-6 mb-4 text-white">
              <li>Parent's contact information (name, mobile number, email)</li>
              <li>SIM card number and mobile number of the child device</li>
            </ul>

            <h3 className="text-base sm:text-lg lg:text-[20px] font-semibold leading-6 lg:leading-[24px] text-white mt-6 mb-3">b. Device & App Data</h3>
            <ul className="list-disc pl-6 mb-4 text-white">
              <li>Device ID, model, OS version</li>
              <li>App usage statistics</li>
              <li>Installed applications</li>
              <li>Camera and app access status</li>
            </ul>

            <h3 className="text-base sm:text-lg lg:text-[20px] font-semibold leading-6 lg:leading-[24px] text-white mt-6 mb-3">c. Location Information</h3>
            <ul className="list-disc pl-6 mb-4 text-white">
              <li>Real-time and last known GPS location of the child device</li>
              <li>Offline location sync (when reconnected to internet)</li>
            </ul>

            <h3 className="text-base sm:text-lg lg:text-[20px] font-semibold leading-6 lg:leading-[24px] text-white mt-6 mb-3">d. Network & Connectivity</h3>
            <ul className="list-disc pl-6 mb-4 text-white">
              <li>Internet status (online/offline)</li>
              <li>Wi-Fi or mobile data usage status</li>
            </ul>

            <h3 className="text-base sm:text-lg lg:text-[20px] font-semibold leading-6 lg:leading-[24px] text-white mt-6 mb-3">e. Permissions Used</h3>
            <ul className="list-disc pl-6 mb-6 text-white">
              <li>Location services</li>
              <li>Accessibility service</li>
              <li>Device Administrator permissions</li>
              <li>Foreground and background service access</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-white mt-8 mb-4">2. How We Use the Information</h2>
            <p className="mb-4 text-white">
              We collect the information solely to provide parental control features and enhance safety:
            </p>
            <ul className="list-disc pl-6 mb-4 text-white">
              <li>Remotely lock/unlock the child's phone</li>
              <li>Send dynamic lock screen reminders</li>
              <li>Track live and offline location</li>
              <li>Monitor SIM number and network status</li>
              <li>Restrict app or camera usage if needed</li>
              <li>Prevent unauthorized uninstall attempts</li>
            </ul>
            <p className="mb-6 font-medium text-white">
              We do <strong>not</strong> use or share this data for advertising or commercial purposes.
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-white mt-8 mb-4">3. Data Storage and Security</h2>
            <ul className="list-disc pl-6 mb-6 text-white">
              <li>All data is stored securely using encrypted connections and secured databases</li>
              <li>Firebase or socket-based real-time services are used for command control</li>
              <li>No sensitive data is stored on the child's device permanently</li>
              <li>Data access is role-based and limited only to the parent and system administrators</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-white mt-8 mb-4">4. Data Sharing</h2>
            <p className="mb-4 text-white">
              We <strong>do not</strong> share, sell, or lease your or your child's personal data with any third party unless:
            </p>
            <ul className="list-disc pl-6 mb-6 text-white">
              <li>Required by law or regulation</li>
              <li>Necessary to protect our rights or the safety of users</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-white mt-8 mb-4">5. Your Control and Rights</h2>
            <ul className="list-disc pl-6 mb-6 text-white">
              <li>Parents can deactivate or delete access to their child's device at any time</li>
              <li>Upon deactivation, all remote features are revoked</li>
              <li>You may request deletion of your account and associated data by contacting us</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-white mt-8 mb-4">6. Children's Privacy</h2>
            <p className="mb-6 text-white">
              The Family1st App is intended to be used by parents or guardians to monitor their child's device. We do not knowingly collect personal information from children directly.
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-white mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="mb-6 text-white">
              We may update this Privacy Policy occasionally. Any significant changes will be communicated via the app or email. Continued use of the app implies acceptance of the updated policy.
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-white mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4 text-white">
              If you have any questions or concerns regarding this policy or your data, please contact us at:
            </p>
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg mb-6">
              <p className="mb-2 text-white"><strong>Email:</strong> bkbfamilyfirst@gmail.com</p>
              <p className="text-white"><strong>Phone:</strong> +91-8770493757</p>
            </div>

            <p className="text-center font-medium text-lg mt-8 p-4 bg-blue-600 bg-opacity-50 rounded-lg text-white">
              By using the Family1st app, you consent to this privacy policy.
            </p>
          </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;