import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "GitHub Readme Generator",
	description: "Readme File Generator using Next.js v13 and Headless UI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<div className="max-w-[1200px] mx-auto px-3">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
