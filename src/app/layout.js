import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Lexend } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Script from "next/script";

const lexend = Lexend({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.futureittouch.com/" />
        
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '872884498319936');
            fbq('track', 'PageView');
          `,
          }}
        />

        <meta
          name="description"
          content="Future IT Touch is the best Institute for Industrial Training in Chandigarh, Mohali, Panchkula for Web design, Digital Marketing, and Web & App Development."
        />
        <meta property="og:type" content="website" />
        <meta
          name="p:domain_verify"
          content="964bc30138b13d0b2842eda51332c939"
        />
        <meta property="og:image" href="https://futureittouch.com/" />
        <meta
          property="og:title"
          content="Industrial training Institute In Chandigarh - Future IT Touch"
        />
        <meta
          property="og:description"
          content="Future IT Touch is the best Institute for Industrial Training in Web design, Digital Marketing, and Web & App Development in Chandigarh, Mohali, Panchkula."
        />
        <meta property="og:url" content="https://futureittouch.com/" />
        <meta property="og:site-name" content="Future IT Touch" />
        <meta
          name="keywords"
          content="best industrial training institute in chandigarh, industrial training in mohali, training institute in chandigarh,best institute in chandigarh"
        />
        <meta
          name="google-site-verification"
          content="1HIoSKtFtTdrT6Oty65j03ycTL2ICOD-WD60Ye4vndI"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-981N1M3279"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-981N1M3279');
        `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=872884498319936&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body className={lexend.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
