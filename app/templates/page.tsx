"use client";

import { useState } from "react";

import { useTemplatesContext } from "@/contexts/TemplatesContext";

const Templates = () => {
	const { allTemplates, currentTemplate, setCurrentTemplate, setFinalTemplates } = useTemplatesContext();

	const [template, setTemplate] = useState<string>("Basic");

	return (
		<div className="max-w-[1200px] mx-auto py-6 md:py-16 px-6">
			<div className="md:grid md:grid-cols-2 md:gap-6 items-center">
				<p className="text-center md:text-left text-lg font-semibold">
					{template ? template : "All"} Templates
				</p>
				<div className="block md:flex items-center gap-8 ml-auto">
					<div className="mt-6 md:mt-0 flex items-center font-semibold">
						<p className="mr-3">Type:</p>
						<select
							onChange={(e) => {
								setCurrentTemplate(e.target.selectedIndex);
								setTemplate(e.target.value);
							}}
							className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm"
							name="templateTypes"
							id="templateTypes"
						>
							{allTemplates.map((template, index) => (
								<option className="m-4 bg-gray-300" key={index} value={template.title}>
									{template.title}
								</option>
							))}
						</select>
					</div>
					<div className="mt-6 md:mt-0 flex items-center font-semibold">
						<p className="mr-3">Filters:</p>
						<select
							onChange={(e) => {
								setFinalTemplates([template, e.target.value]);
							}}
							className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm"
							name="templateTypes"
							id="templateTypes"
						>
							{allTemplates[currentTemplate].filters.map((filter, index) => (
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
