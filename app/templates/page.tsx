"use client";

import { useTemplatesContext } from "@/contexts/TemplatesContext";

import Filters from "@/components/Templates/Filters";

const Templates = () => {
	const { templates } = useTemplatesContext();

	return (
		<div className="max-w-[1200px] mx-auto py-6 md:py-16 px-6">
			<Filters />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
				{templates.map((template, index) => (
					<div
						key={index}
						className="w-full max-w-sm p-4 bg-white border-2 border-gray-300 rounded-xl shadow sm:p-8 "
					>
						<h5 className="mb-4 text-lg text-gray-500">{template.title}</h5>
						<ul role="list" className="space-y-5 my-7">
							<li className="flex items-center">
								<svg
									className="flex-shrink-0 w-4 h-4 text-blue-600 "
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
								</svg>
								<span className="text-base font-normal leading-tight text-gray-500 ms-3">
									{template.description}
								</span>
							</li>
						</ul>
						<button
							type="button"
							className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
						>
							Choose plan
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Templates;
