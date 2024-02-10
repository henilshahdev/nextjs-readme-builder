import React, { createContext, useContext, useEffect, useState } from "react";

type TemplateType = {
	title: string;
	description: string;
};

type TemplatesContextType = {
	templates: TemplateType[];
	currentTemplate: string;
	setCurrentTemplate: (newTemplate: string) => void;
};

const TemplatesContext = createContext<TemplatesContextType>({
	templates: [],
	currentTemplate: "Basic",
	setCurrentTemplate: () => {},
});

export const TemplatesProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentTemplate, setCurrentTemplate] = useState<string>("Basic");
	const [templates, setTemplates] = useState<TemplateType[]>([]);

	useEffect(() => {
		console.log(currentTemplate);
		switch (currentTemplate) {
			case "Basic":
				setTemplates([
					{ title: "Open Source", description: "Open Source" },
					{ title: "Instructor", description: "Instructor" },
					{ title: "Onboarding", description: "Onboarding" },
				]);
				break;
			case "Profile":
				setTemplates([
					{ title: "Basic", description: "Basic" },
					{ title: "Intermediate", description: "Intermediate" },
					{ title: "Advanced", description: "Advanced" },
				]);
				break;
			case "Language":
				setTemplates([
					{ title: "JavaScript / TypeScript", description: "JavaScript / TypeScript" },
					{ title: "Python", description: "Python" },
					{ title: "Java", description: "Java" },
					{ title: "Dart", description: "Dart" },
					{ title: "PHP", description: "PHP" },
					{ title: "C / C++", description: "C / C++" },
				]);
				break;
			case "Profile":
				setTemplates([
					{ title: "Basic", description: "Basic" },
					{ title: "Intermediate", description: "Intermediate" },
					{ title: "Advanced", description: "Advanced" },
				]);
				break;
			case "Framework":
				setTemplates([
					{ title: "React.js", description: "React.js" },
					{ title: "Next.js", description: "Next.js" },
					{ title: "Angular.js", description: "Angular.js" },
					{ title: "Vue.js", description: "Vue.js" },
					{ title: "Flutter", description: "Flutter" },
					{ title: "Android / iOS", description: "Android / iOS" },
				]);
				break;
			case "Project":
				setTemplates([
					{ title: "Web App", description: "Web App" },
					{ title: "Mobile App", description: "Mobile App" },
					{ title: "API", description: "API" },
					{ title: "Library", description: "Library" },
				]);
				break;
			case "Documentation":
				setTemplates([
					{ title: "Tutorials", description: "Tutorials" },
					{ title: "Setup", description: "Setup" },
					{ title: "User Guide", description: "User Guide" },
				]);
				break;
		}
	}, [currentTemplate]);

	const value: TemplatesContextType = {
		templates,
		currentTemplate,
		setCurrentTemplate,
	};

	return <TemplatesContext.Provider value={value}>{children}</TemplatesContext.Provider>;
};

export const useTemplatesContext = () => useContext(TemplatesContext);
