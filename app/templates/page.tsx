"use client";

import { useEffect, useState } from "react";

const Templates = () => {
	const [templateType, setTemplateType] = useState("All");
	const [moreFilters, setMoreFilters] = useState<string[]>([]);

	useEffect(() => {
		extraFilters.map((eF) => {
			if (eF.type === templateType) {
				const newFilters: string[] = eF.filters;
				setMoreFilters(newFilters);
			}
			return null;
		});
	}, [templateType]);

	const templateTypes = [
		{ type: "All", slug: "/all", icon: "all" },
		{ type: "Profile", slug: "/profile", icon: "profile" },
		{ type: "General", slug: "/general", icon: "general" },
		{ type: "Language", slug: "/languages", icon: "languages" },
		{ type: "Framework", slug: "/frameworks", icon: "frameworks" },
		{ type: "Project", slug: "/projects", icon: "projects" },
		{ type: "Dcoumentation", slug: "/documentation", icon: "documentation" },
		{ type: "Specialized", slug: "/specialized", icon: "specialized" },
	];

	const extraFilters = [
		{ type: "All", filters: ["All", "Internal", "Open Source", "Instructor", "Onboarding"] },
		{ type: "Profile", filters: ["All", "Basic", "Intermediate", "Advanced"] },
		{ type: "General", filters: ["All", "Basic", "Minimalist", "Comprehensive"] },
		{ type: "Language", filters: ["All", "JavaScript / TypeScript", "Python", "Java", "Dart", "PHP", "C / C++"] },
		{
			type: "Framework",
			filters: ["All", "React.js", "Next.js", "Angular.js", "Vue.js", "Flutter", "Android / iOS"],
		},
		{ type: "Project", filters: ["All", "Web App", "Mobile App", "API", "Library"] },
		{ type: "Dcoumentation", filters: ["All", "Tutorials", "Setup", "User Guide"] },
		{ type: "Specialized", filters: ["All", "Data Science", "Machine Learning", "Dev Ops", "Infrastructure"] },
	];

	return (
		<div className="max-w-[1200px] mx-auto py-6 md:py-16 px-6">
			<div className="md:grid md:grid-cols-2 md:gap-6 items-center">
				<p className="text-center md:text-left text-lg font-semibold">{templateType} Templates</p>
				<div className="block md:flex items-center gap-8 ml-auto">
					<div className="mt-6 md:mt-0 flex items-center font-semibold">
						<p className="mr-3">Type:</p>
						<select
							onChange={(e) => {
								setTemplateType(e.target.value);
							}}
							className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm"
							name="templateTypes"
							id="templateTypes"
						>
							{templateTypes.map((template, index) => (
								<option className="m-4 bg-gray-300" key={index} value={template.type}>
									{template.type}
								</option>
							))}
						</select>
					</div>
					<div className="mt-6 md:mt-0 flex items-center font-semibold">
						<p className="mr-3">Filters:</p>
						<select
							onChange={(e) => {
								setTemplateType(e.target.value);
							}}
							className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm"
							name="templateTypes"
							id="templateTypes"
						>
							{moreFilters.map((filter, index) => (
								<option className="m-4 bg-gray-300" key={index} value={filter}>
									{filter}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-6 items-center"></div>
		</div>
	);
};

export default Templates;
