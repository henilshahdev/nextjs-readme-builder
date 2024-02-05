"use client";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

import { TemplatesProvider } from "@/contexts/TemplatesContext";

const Root = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<Navbar />
			<TemplatesProvider>{children}</TemplatesProvider>
			<Footer />
		</>
	);
};

export default Root;
