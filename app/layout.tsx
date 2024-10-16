import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://geoffreypaul.vercel.app/"),

	title: {
		template: "%s | Geoffrey's Portfolio",
		default: "Geoffrey's Portfolio",
	},
	authors: {
		name: "Geoffrey Paul",
	},

	description:
		"I'm a Fullstack developer passionate about building modern web applications with great user experiences.",
	openGraph: {
		title: "Geoffrey's Portfolio",
		description:
			"I'm a Fullstack developer passionate about building modern web applications with great user experiences..",
		url: "https://geoffreypaul.vercel.app/",
		siteName: "Geoffrey's Portfolio",
		images: "/og.png",
		type: "website",
	},
	keywords: ["Frontend Developer", "Geoffrey", "Fullstack Developer"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
