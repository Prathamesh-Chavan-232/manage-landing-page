import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Hectec Solutions",
	description:
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos harum voluptate, sunt illo ratione similique quidem sed aliquam nisi eveniet id, sapiente corporis, minima quae repellendus consectetur dignissimos dicta dolores.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
