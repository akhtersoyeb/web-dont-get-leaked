import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow">
          <CardHeader className="border-b border-gray-200 bg-gray-50">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Terms of Use for Don't Get Leaked
            </CardTitle>
            <p className="mt-1 text-sm text-gray-500">
              Last Updated: February 17, 2025
            </p>
          </CardHeader>
          <CardContent className="px-6 py-5 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By installing and using the Don't Get Leaked Chrome extension ("Extension"), you agree to these Terms of Use. If you do not agree to these terms, please do not use the Extension.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                Don't Get Leaked is a Chrome extension that allows users to hide/blur certain sections of webpages during screen sharing. The service includes:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Free Features</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Integration with YouTube, Google, Gmail, and WhatsApp</li>
                    <li>Basic blurring functionality</li>
                    <li>Local storage of settings</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Premium Features</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Additional website integrations</li>
                    <li>One-time payment for lifetime access</li>
                    <li>Premium support</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Accounts</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Free Users</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>No account required</li>
                    <li>Access to basic features</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Premium Users</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Must create an account using Google login or email/password</li>
                    <li>Account required for premium features</li>
                    <li>Responsible for maintaining account security</li>
                    <li>Must provide accurate information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Payment Terms</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>One-time payment for premium features</li>
                <li>All payments processed through Razorpay</li>
                <li>No refunds unless required by law</li>
                <li>Prices subject to change with notice</li>
                <li>Premium access is perpetual after payment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Use Restrictions</h2>
              <p className="text-gray-700 mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Modify, reverse engineer, or decompile the Extension</li>
                <li>Use the Extension for illegal purposes</li>
                <li>Attempt to bypass payment for premium features</li>
                <li>Distribute or copy the Extension</li>
                <li>Use the Extension to harvest data</li>
                <li>Interfere with the Extension's functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Disclaimer of Warranties</h2>
              <p className="text-gray-700 mb-3">THE EXTENSION IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Website integration may temporarily fail due to third-party website updates</li>
                <li>No guarantee of continuous, uninterrupted service</li>
                <li>No warranty of fitness for a particular purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h2>
              <p className="text-gray-700 mb-3">For questions about these Terms:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Email: sksoyebakhter2003@gmail.com</li>
                <li>Website: /contact page</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfUse;