// pages/contact.tsx
import Head from 'next/head';
import { Twitter, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Have questions? We&apos;re here to help.
            </p>
          </div>

          <div className="space-y-8">
            {/* Twitter Contact */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between hover:border-gray-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Twitter className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">Follow on Twitter</h2>
                  <p className="text-gray-600">For updates and quick responses</p>
                </div>
              </div>
              <a
                href="https://x.com/sooooyeb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                @sooooyeb
                <span className="sr-only">Twitter (Opens in new window)</span>
              </a>
            </div>

            {/* Email Contact */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between hover:border-gray-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-green-50 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">Send an Email</h2>
                  <p className="text-gray-600">For detailed inquiries and support</p>
                </div>
              </div>
              <a
                href="mailto:sksoyebakhter2003@gmail.com"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Email us
                <span className="sr-only">Email (Opens email client)</span>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center text-gray-600 text-sm">
              <p>We typically respond within 24-48 hours during business days.</p>
              <p className="mt-2">For immediate assistance, reaching out on Twitter is recommended.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;