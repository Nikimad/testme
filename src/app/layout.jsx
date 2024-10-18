import "@/styles/global.scss";
import { Hanken_Grotesk } from "next/font/google";
import cn from "classnames";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "TestMe",
  description: "Test application",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={cn("body", hankenGrotesk.className)}>{children}</body>
  </html>
);

export default RootLayout;
