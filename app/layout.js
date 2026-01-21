import './globals.css'

export const metadata = {
  title: 'Lombok Tour & Travel - Explore Paradise Island',
  description: 'Discover pristine beauty of Lombok with premium tour packages. Gili Islands, Mount Rinjani, Pink Beach & more. Book your adventure today!',
  keywords: 'lombok tour, lombok travel, gili islands, mount rinjani, indonesia tourism, lombok agency, senggigi beach, pink beach',
  authors: [{ name: 'Lombok Tour & Travel' }],
  openGraph: {
    title: 'Lombok Tour & Travel - Explore Paradise',
    description: 'Premium tour packages for Gili Islands, Mount Rinjani & more',
    url: 'https://lomboktour.com',
    siteName: 'Lombok Tour & Travel',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lombok Tour & Travel',
    description: 'Discover Lombok with premium tours',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}