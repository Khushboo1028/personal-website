import React from 'react';
import { Helmet } from 'react-helmet';
import HomeIntro from '../components/HomeIntro';
import HomeMySpace from '../components/HomeMySpace';
import HomeStoryTime from '../components/HomeStoryTime';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const HomePage = () => {
	return (
		<div className="/">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Khushboo Gandhi</title>
				<meta
					name="description"
					content="I am Khushboo Gandhi. I enjoy making apps, websites and working on new things. 
                    I can be a called a software engineer although officially I am a computer science student. I am actively looking for an internship on a related field. This website describes me and my work in a cool and casual way."
				/>
			</Helmet>
			<HomeIntro />
			<HomeMySpace />
			<HomeStoryTime />
			<Skills />
			<Footer />
		</div>
	);
};

export default HomePage;
