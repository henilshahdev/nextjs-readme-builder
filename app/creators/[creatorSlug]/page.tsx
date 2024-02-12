const CreatorPage = ({ params }: { params: { [key: string]: string | string[] | undefined } }) => {
	return (
		<>
			<h1>Single Creator Page {params.creatorSlug}</h1>
		</>
	);
};

export default CreatorPage;
