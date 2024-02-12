import React, { createContext, useContext, useEffect, useState } from "react";

import allTemplates from "./templates.json";

type TemplateType = {
	title: string;
	description: string;
	stars: number;
	sections: number;
	useCount: number;
	creator: string;
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
		switch (currentTemplate) {
			case "Basic":
				setTemplates(allTemplates.templates.Basic);
				break;
			case "Profile":
				setTemplates(allTemplates.templates.Profile);
				break;
			case "Language":
				setTemplates(allTemplates.templates.Language);
				break;
			case "Framework":
				setTemplates(allTemplates.templates.Framework);
				break;
			case "Project":
				setTemplates(allTemplates.templates.Project);
				break;
			case "Documentation":
				setTemplates(allTemplates.templates.Documentation);
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
