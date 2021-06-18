import React from 'react';
import WorkIntro from '../components/WorkIntro';
import ProjectTimeline from '../components/ProjectTimeline';
import GoToContactPage from '../components/GoToContactPage';
import Footer from '../components/Footer';

const WorkPage = () => {
	return (
		<div className="work">
			<WorkIntro />
			<ProjectTimeline />
			<GoToContactPage />
			<Footer />
		</div>
	);
};

export default WorkPage;
