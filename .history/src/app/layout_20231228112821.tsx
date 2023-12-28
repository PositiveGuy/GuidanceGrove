import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import ThemeWrapper from '@/components/ThemeWrapper';

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
            <ThemeWrapper>
              <main className={inter.className}>{children}</main>
            </ThemeWrapper>
            <Footer />
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
