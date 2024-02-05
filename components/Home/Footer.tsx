import { Courier_Prime } from "next/font/google";

const courier = Courier_Prime({ weight: "400", subsets: ["latin"] });

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white text-center py-5">
			<p className={courier.className}>Made with {`</>`} and 💖.</p>
		</footer>
	);
};

export default Footer;
