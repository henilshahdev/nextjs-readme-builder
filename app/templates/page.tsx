"use client";

import { useTemplatesContext } from "@/contexts/TemplatesContext";

import Image from "next/image";

import Filters from "@/components/Templates/Filters";
import Link from "next/link";

const Templates = () => {
	const { templates } = useTemplatesContext();

	return (
		<div className="max-w-[1200px] mx-auto py-6 md:py-16 px-6">
			<Filters />
			<div className="grid grid-cols-1 md:grid-cols-3 flex-wrap gap-8 items-start">
				{templates.map((template, index) => (
					<div
						key={index}
						className="w-full max-w-sm p-4 bg-white border-2 border-gray-300 hover:border-gray-900 rounded-xl shadow sm:p-8 "
					>
						<div className="flex justify-between items-center border-b-2 border-gray-900 pb-3">
							<p className="text-xl">{template.title}</p>
							<div className="bg-yellow-400 rounded-lg text-gray-900 font-semibold px-2 py-0.5">
								<p className="flex">
									{template.stars}
									<Image
										className="md:ml-1 text-white"
										src="/assets/star-outline.svg"
										width={18}
										height={18}
										alt="Star Icon"
									/>
								</p>
							</div>
						</div>
						<div className="mt-6">
							<p className="text-base text-gray-900">{template.description}</p>
							<p className="mt-3 text-base text-gray-500">Sections: {template.sections}</p>
							<p className="mt-3 text-base text-gray-500">Used: {template.useCount}</p>
							<p className="mt-3 text-base text-gray-500">
								Creator:{" "}
								<Link href={`/creators/${template.creator}`} className="underline text-gray-500">
									{template.creator}
								</Link>
							</p>
						</div>
						<div className="mt-6 flex justify-between items-center gap-6">
							<button
								type="button"
								className="mt-3 text-white bg-gray-900 hover:opacity-75 rounded-lg text-base px-5 py-3 inline-flex justify-center w-full text-center"
							>
								Preview
							</button>
							<button
								type="button"
								className="mt-3 text-white bg-green-600 hover:opacity-75 rounded-lg text-base px-5 py-3 inline-flex justify-center w-full text-center"
							>
								Select
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Templates;
