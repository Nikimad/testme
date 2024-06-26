import "@/styles/global.scss";
import cn from "classnames";
import { Hanken_Grotesk } from "next/font/google";
import ReduxProvider from "@/components/ReduxProvider";

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
    <ReduxProvider>
        <body className={cn(hankenGrotesk.className, "body")}>{children}</body>
    </ReduxProvider>
  </html>
);

export default RootLayout;
