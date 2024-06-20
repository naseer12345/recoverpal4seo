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
  title: "RecoverPal",
  description: "Instant Recovery And Jumpstart Everywhere In The UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
         
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
