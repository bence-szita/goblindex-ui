import type { Metadata } from "next";
import { Gantari } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/app/ui/navigation-bar";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "./theme";

const gantari = Gantari({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goblindex",
  description: "WoW Auction House data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gantari.className} antialiased dark bg-zinc-900 text-neutral-50 dark:text-neutral-200`}
    >
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavigationBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
