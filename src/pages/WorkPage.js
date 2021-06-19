import React from 'react';
import { Helmet } from 'react-helmet';
import WorkIntro from '../components/WorkIntro';
import ProjectTimeline from '../components/ProjectTimeline';
import GoToContactPage from '../components/GoToContactPage';
import Footer from '../components/Footer';

const WorkPage = () => {
	return (
		<div className="work">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Khushboo Gandhi | Work</title>
				<meta
					name="description"
					content="Here is a list of some of the projects that I have worked on. It includes android apps, websites and more"
				/>
			</Helmet>
			<WorkIntro />
			<ProjectTimeline />
			<GoToContactPage />
			<Footer />
		</div>
	);
};

export default WorkPage;
