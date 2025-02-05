import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import CustomCursor from "@/components/custom-cursor"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VeryCoolSoftware :3",
  description: "We create awesome tools for developers!",
  icons: {
    icon: [
      {
        url: "https://sjc.microlink.io/gWyeDWiUoHo_bcKXA9JKiAYXH9K9bTlfC0hjXUXkpN6gRet6myTBefTTx4aVjVrsv1EjfUkMvQbnAIBz_9jDbQ.jpeg",
        href: "https://sjc.microlink.io/gWyeDWiUoHo_bcKXA9JKiAYXH9K9bTlfC0hjXUXkpN6gRet6myTBefTTx4aVjVrsv1EjfUkMvQbnAIBz_9jDbQ.jpeg",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gradient-to-br from-cool-100 via-cool-200 to-cool-300 dark:from-cool-900 dark:via-cool-800 dark:to-cool-700`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          <div className="min-h-screen backdrop-blur-sm">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}

