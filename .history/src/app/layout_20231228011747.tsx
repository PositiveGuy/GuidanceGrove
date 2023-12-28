import React from 'react';

//components import
import Header from '../components/header';
import Footer from '../components/footer';

//styles import
import { Inter } from 'next/font/google';
import './globals.css';

//font
const inter = Inter({ subsets: ['latin'] });



//header and footer layout
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <Header />
            <main className={inter.className}>{children}</main>
            <Footer />
          </body>
        </html>
        );
};

        export default RootLayout;
