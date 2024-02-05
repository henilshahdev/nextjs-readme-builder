import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import Root from "./Root";

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
				<Root>{children}</Root>
			</body>
		</html>
	);
}
