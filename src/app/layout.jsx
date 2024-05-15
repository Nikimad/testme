import "@/styles/global.scss";
import cn from "classnames";
import { Hanken_Grotesk } from "next/font/google";

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
    <body className={cn(hankenGrotesk.className, "body")}>{children}</body>
  </html>
);

export default RootLayout;
