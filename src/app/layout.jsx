import { Hanken_Grotesk } from 'next/font/google';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "TestMe",
  description: "Test application",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
