import './globals.css';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script'; // ✅ import Script from next

export const metadata = {
  title: 'HRPP Website',
  template: '%s | HR Posting Partner', 
  description: 'Official website of HRRP',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B3HPPZMWT4"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B3HPPZMWT4', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* ✅ Google AdSense Script */}
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3826573131304099"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
