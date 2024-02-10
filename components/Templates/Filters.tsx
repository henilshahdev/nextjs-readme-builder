"use client";

import { useTemplatesContext } from "@/contexts/TemplatesContext";

const Filters = () => {
	const defaultTemplates = ["Basic", "Profile", "Language", "Project", "Framework", "Documentation"];

	const { currentTemplate, setCurrentTemplate } = useTemplatesContext();

	return (
		<div className="md:grid md:grid-cols-2 md:gap-6 items-center mb-10">
			<p className="text-center md:text-left text-lg font-semibold">{currentTemplate} Templates</p>
			<div className="block md:flex items-center gap-8 ml-auto">
				<div className="mt-6 md:mt-0 flex items-center font-semibold">
					<p className="mr-3">Type:</p>
					<select
						onChange={(e) => {
							setCurrentTemplate(e.target.value);
						}}
						className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm"
						name="templateTypes"
						id="templateTypes"
					>
						{defaultTemplates.map((template, index) => (
							<option className="m-4 bg-gray-300" key={index} value={template}>
								{template}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
};

export default Filters;
