import { Header } from "@/components/share/Header/HeaderMain";
import type { Metadata } from "next";
import "./global.css";
import { ThemeContext } from "@/context/themeContext";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContext>
          <Header />
          {children}
        </ThemeContext>
      </body>
    </html>
  );
}
