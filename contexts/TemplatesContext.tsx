import React, { createContext, useContext, useEffect, useState } from "react";

type TemplateType = {
	title: string;
	description: string;
	filters: string[];
};

type TemplatesContextType = {
	allTemplates: TemplateType[];
	currentTemplate: number;
	setCurrentTemplate: (newTemplate: number) => void;
	finalTemplates: [string, string];
	setFinalTemplates: (arr: [string, string]) => void;
};

const allTemplates: TemplateType[] = [
	{
		title: "Basic",
		description: "Basic templates",
		filters: ["All", "Internal", "Open Source", "Instructor", "Onboarding"],
	},
	{
		title: "Profile",
		description: "Templates categorized by profile level",
		filters: ["All", "Basic", "Intermediate", "Advanced"],
	},
	{
		title: "General",
		description: "General purpose templates",
		filters: ["All", "Basic", "Minimalist", "Comprehensive"],
	},
	{
		title: "Language",
		description: "Templates based on programming language",
		filters: ["All", "JavaScript / TypeScript", "Python", "Java", "Dart", "PHP", "C / C++"],
	},
	{
		title: "Framework",
		description: "Templates based on framework",
		filters: ["All", "React.js", "Next.js", "Angular.js", "Vue.js", "Flutter", "Android / iOS"],
	},
	{
		title: "Project",
		description: "Templates based on project title",
		filters: ["All", "Web App", "Mobile App", "API", "Library"],
	},
	{
		title: "Documentation",
		description: "Documentation templates",
		filters: ["All", "Tutorials", "Setup", "User Guide"],
	},
	{
		title: "Specialized",
		description: "Specialized templates",
		filters: ["All", "Data Science", "Machine Learning", "Dev Ops", "Infrastructure"],
	},
];

const TemplatesContext = createContext<TemplatesContextType>({
	allTemplates: allTemplates,
	currentTemplate: 0,
	setCurrentTemplate: () => {},
	finalTemplates: ["", ""],
	setFinalTemplates: () => {},
});

export const TemplatesProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentTemplate, setCurrentTemplate] = useState<number>(0);
	const [finalTemplates, setFinalTemplates] = useState<[string, string]>(["Basic", ""]);

	useEffect(() => {
		console.log(finalTemplates);
	}, [finalTemplates]);

	const value: TemplatesContextType = {
		allTemplates,
		currentTemplate,
		setCurrentTemplate,
		finalTemplates,
		setFinalTemplates,
	};

	return <TemplatesContext.Provider value={value}>{children}</TemplatesContext.Provider>;
};

export const useTemplatesContext = () => useContext(TemplatesContext);
