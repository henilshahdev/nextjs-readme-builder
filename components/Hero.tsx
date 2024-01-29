import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	const features = [
		{
			icon: "🎨",
			header: "Customizable templates",
			subText: "Choose from a variety of templates and customize them to match your project style.",
		},
		{
			icon: "🚀",
			header: "Boost your visibility",
			subText:
				"Enhance your GitHub profile and make a strong first impression on visitors and potential collaborators.",
		},
		{
			icon: "📝",
			header: "Markdown preview",
			subText:
				"Preview your README in real-time with Markdown rendering, ensuring it looks perfect before publishing.",
		},
		{
			icon: "🔧",
			header: "Flexible configuration",
			subText: "Easily configure and update your README profile with new projects, achievements, and skills.",
		},
		{
			icon: "👍",
			header: "Vote and Support",
			subText: "Engage with other developers by voting on their README files to show appreciation.",
		},
		{
			icon: "🔗",
			header: "Social Media Integration",
			subText: "Enhance your README profile by adding links to your social media with customizable icons.",
		},
	];

	const whoAmI = {
		name: "Henil Shah",
		role: "Founder & Developer",
		bio: "I'm passionate about creating innovative solutions that empower developers worldwide by sacrificing my sleep sometimes. With over a 9 years of experience in software development, I lead this project with vision, dedication and some help from ChatGPT.",
		socialLinks: {
			linkedin: "https://www.linkedin.com/in/henilshah106",
			twitter: "https://twitter.com/henil_106",
			github: "https://github.com/henilshahdev",
		},
	};

	return (
		<main className="">
			<div className="max-w-[1200px] mx-auto py-16 px-4">
				<p className="text-center text-4xl leading-normal md:text-5xl md:leading-tight font-bold md:mt-8">
					Documentation <br />
					made easy!
				</p>
				<p className="px-6 text-base text-center md:text-xl mt-12 text-gray-600">
					Easily create the ideal README file for your current or upcoming project using our user-friendly and
					intuitive tool. <br />
					We allow you to streamline project documentation and focus on what matters more!
				</p>
				<div className="flex flex-col px-4 md:flex-row md:justify-around mx-auto mt-12 md:text-lg">
					<button className="border-2 border-green-600 bg-green-600 rounded text-white hover:opacity-75 px-4 py-2 md:px-8 md:py-4">
						Get Started
					</button>
					<Link
						href="/templates"
						className="mt-4 md:mt-0 bg-gray-900 border-2 border-gray-900 rounded text-white text-center hover:opacity-75 hover:text-white px-4 py-2 md:px-8 md:py-4"
					>
						Browse Templates
					</Link>
				</div>
			</div>
			<div className="py-16 bg-gray-900 text-white">
				<p className="mt-6 text-center text-2xl md:text-3xl font-semibold md:mb-12">How can we help?</p>
				<div className="mb-6 px-6 md:grid md:grid-cols-3 md:gap-16 md:px-16">
					{features.map((feature, index) => (
						<div className="md:mt-0 mt-6 px-4 py-12 rounded-xl border-2 border-white" key={index}>
							<div className="flex items-center justify-center">
								<p className="text-3xl md:text-4xl">{feature.icon}</p>
								<p className="text-base md:text-2xl font-semibold ml-2">{feature.header}</p>
							</div>
							<p className="px-6 mt-3 text-base md:text-xl text-gray-400 text-center">
								{feature.subText}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="max-w-[1200px] mx-auto py-16 px-4">
				<p className="mt-6 text-center text-2xl md:text-3xl font-semibold md:mb-12">About Me</p>
				<div className="md:flex md:items-center md:justify-between">
					<div className="mt-8 w-max mx-auto md:w-full">
						<Image
							className="border-2 border-gray-900 rounded-full md:w-max md:mx-auto"
							src="/assets/henil_shah.png"
							width={225}
							height={225}
							alt="Henil Shah"
						/>
						<p className="text-2xl md:text-4xl mt-6 font-semibold text-center">Henil Shah</p>
						<p className="text-sm md:text-lg italic text-gray-500 text-center">Software Engineer</p>
					</div>
					<div className="mt-3 m:mt-0">
						<div className="mt-6 bg-green-200 text-center rounded-lg p-6 md:mt-0 md:p-16 md:text-xl md:leading-relaxed">
							<p className="italic">"{whoAmI.bio}"</p>
						</div>
						<div className="mt-8 px-12 flex items-center justify-between md:justify-end md:px-0">
							<Image
								className="md:ml-6"
								src="/assets/github.svg"
								width={30}
								height={30}
								alt="Henil Shah"
							/>
							<Image
								className="md:ml-6"
								src="/assets/linkedin.svg"
								width={28}
								height={28}
								alt="Henil Shah"
							/>
							<Image className="md:ml-6" src="/assets/x.svg" width={28} height={28} alt="Henil Shah" />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
