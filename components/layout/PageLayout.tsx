import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title = 'Mecha Break - The Ultimate Mecha Combat Game',
  description = 'Mecha Break is an intense combat game featuring customizable mechas, strategic gameplay, and thrilling battles. Join the fight today!'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-8">
        {children}
      </div>
      <Script id="ad-options" strategy="afterInteractive">
        {`
          atOptions = {
            'key' : 'fa34bec6d08ecc95454858ca2082117d',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
          };
        `}
      </Script>
      <Script
        src="//www.highperformanceformat.com/fa34bec6d08ecc95454858ca2082117d/invoke.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default PageLayout; 