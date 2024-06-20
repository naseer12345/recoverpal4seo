import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { MyProvider } from "@/context/context";
import { cn } from "@/lib/utils";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "24/7 Vehicle Recovery and Car Breakdown Services UK –  Recoverpal",
  description: "Recoverpal offers fast, effective & reliable vehicle recovery, Jumpstart, and car breakdown recovery services in Watford, Borehamwood & surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
         <link rel="canonical" href="https://recoverpal.uk/">
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBtRLTK2xMQWQovc-RUWO0t7Ntl5S9glxk&libraries=places`}
            async
            defer
          ></script>
        </head>
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <MyProvider>
          {children}
        </MyProvider>

        </body>
    </html>
  );
}
