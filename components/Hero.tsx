import Image from "next/image";

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
			subText:
				"Engage with other developers by voting on their README files to show appreciation for their projects.",
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
		<main className="py-8 px-4">
			<div>
				<p className="text-center text-4xl font-bold mt-8 leading-normal">
					Documentation <br />
					made easy!
				</p>
				<p className="text-base text-center mt-12 text-gray-600">
					Easily create the ideal README file for your current or upcoming project using our user-friendly and
					intuitive tool. <br />
					We allow you to streamline project documentation and focus on what matters more!
				</p>
				<div className="flex flex-col mx-auto mt-12">
					<button className="bg-green-600 rounded text-white hover:opacity-85 px-4 py-2">Get Started</button>
					<button className="mt-3 bg-white border-2 border-green-600 rounded text-green-600 hover:opacity-85 px-4 py-2">
						Browse Templates
					</button>
				</div>
			</div>
			<div className="mt-16">
				<p className="text-center text-2xl font-semibold">How can we help?</p>
				<div>
					{features.map((feature, index) => (
						<div className="mt-6 px-4 py-6 rounded-xl border-2 border-gray-900" key={index}>
							<div className="flex items-center justify-center">
								<p className="text-3xl">{feature.icon}</p>
								<p className="text-base font-semibold ml-2">{feature.header}</p>
							</div>
							<p className="px-6 mt-3 text-base text-gray-500 text-center">{feature.subText}</p>
						</div>
					))}
				</div>
			</div>
			<div className="mt-16">
				<p className="text-center text-2xl font-semibold">Who made this?</p>
				<div className="mt-8 w-max mx-auto">
					<Image
						className="border-2 border-gray-900 rounded-full"
						src="/assets/henil_shah.png"
						width={225}
						height={225}
						alt="Henil Shah"
					/>
				</div>
				<div className="mt-3">
					<p className="text-2xl font-semibold text-center">Henil Shah</p>
					<p className="text-sm italic text-gray-500 text-center">Software Engineer</p>
					<div className="mt-6 bg-green-200 text-center rounded-lg p-6">
						<p className="italic">"{whoAmI.bio}"</p>
					</div>
					<div className="mt-6 px-12 flex items-center justify-between">
						<Image className="" src="/assets/github.svg" width={30} height={30} alt="Henil Shah" />
						<Image className="" src="/assets/linkedin.svg" width={28} height={28} alt="Henil Shah" />
						<Image className="" src="/assets/x.svg" width={28} height={28} alt="Henil Shah" />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
