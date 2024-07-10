import "@/styles/global.scss";
import cn from "classnames";
import { Hanken_Grotesk } from "next/font/google";
import ReduxProvider from "@/components/ReduxProvider";
import Body from "@/components/Body";

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
      <Body className={hankenGrotesk.className}>
        {children}
        <div id="modal-root"></div>
      </Body>
    </ReduxProvider>
  </html>
);

export default RootLayout;
