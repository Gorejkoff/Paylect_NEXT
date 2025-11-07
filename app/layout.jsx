import Header from '@/components/Header/Header';
import './normalized.css';
import './variables.css';
import './globals.scss';
import stylesFirstScreen from '@/components/FirstScreenTitle/FirstScreenTitle.module.scss';
import LottieBlock from '@/components/LottieBlock/LottieBlock';
import FirstScreenTitle from '@/components/FirstScreenTitle/FirstScreenTitle';
import Lenis from '@/components/Lenis/Lenis';
import Footer from '@/components/Footer/Footer';
import Terms from '@/components/Modals/Terms/Terms';
import StoreRedux from '@/components/StoreRedux/StoreRedux';
import Privacy from '@/components/Modals/Privacy/Privacy';
import Contact from '@/components/Modals/Contact/Contact';
import Sent from '@/components/Modals/Sent/Sent';
import Exchange from '@/components/Modals/Exchange/Exchange';
import Blockchain from '@/components/Modals/Coins/Blockchain';
import Standard from '@/components/Modals/Coins/Standard';
import QRCode from '@/components/Modals/QRCode/QRCode';


export const metadata = {
  title: 'Paylect',
  description: 'Paylect is a cryptocurrency payment platform made to help businesses accept and manage crypto transactions seamlessly. With no geographical barriers and easy integration, Paylect enables businesses to accept over 65 cryptocurrencies, utilize static wallets for simplified deposits, and automatically convert funds to stablecoins for security.',
  metadataBase: new URL('https://paylect-g3vl8bwt1wykdo56ey.passimpay.io/'),
  keywords: ['cryptocurrency', 'payment platform', 'crypto transactions', 'business payments'],
  authors: [{ name: 'Paylect' }],
  creator: 'Paylect',
  publisher: 'Paylect',

  openGraph: {
    title: 'Paylect',
    description: 'Paylect is a cryptocurrency payment platform made to help businesses accept and manage crypto transactions seamlessly. With no geographical barriers and easy integration, Paylect enables businesses to accept over 65 cryptocurrencies, utilize static wallets for simplified deposits, and automatically convert funds to stablecoins for security.',
    url: 'https://paylect.com/',
    siteName: 'Paylect',
    images: [
      {
        url: '/url_cover_480.png',
        width: 800,
        height: 480,
        alt: 'Paylect',
      },
    ],
    locale: 'en',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Paylect',
    description: 'Paylect is a cryptocurrency payment platform made to help businesses accept and manage crypto transactions seamlessly. With no geographical barriers and easy integration, Paylect enables businesses to accept over 65 cryptocurrencies, utilize static wallets for simplified deposits, and automatically convert funds to stablecoins for security.',
    images: ['/url_cover_480.png'],
  },

  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },

  manifest: '/manifest.json',

  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'theme-color': '#ffffff',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* <base href='https://paylect-g3vl8bwt1wykdo56ey.passimpay.io/' /> */}
      </head>
      <body>
        <Lenis>
          <StoreRedux>
            <div className={stylesFirstScreen['first-screen']} >
              <Header />
              <LottieBlock />
              <FirstScreenTitle />
            </div>
            <main>
              {children}
            </main>
            <Footer />

            <Terms />
            <Privacy />
            <Contact />
            <Sent />
            <Exchange />
            <Blockchain />
            <Standard />
            <QRCode />

          </StoreRedux>
        </Lenis>
      </body>
    </html>
  );
}
