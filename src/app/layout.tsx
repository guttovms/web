import "./globals.css";

import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = {
	title: "devstage",
};

const montserrat = Montserrat({
	variable: "--font-montserrat",
	weight: ["400", "600"],
	subsets: ["latin"],
});

const oxanium = Oxanium({
	variable: "--font-oxanium",
	weight: ["500", "600"],
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
			<body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat md:bg-right-top bg-top">
				{children}
			</body>
		</html>
	);
}
