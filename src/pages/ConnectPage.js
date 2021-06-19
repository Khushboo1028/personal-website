import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import ContactBackground from '../components/ContactBackground';

const ConnectPage = () => {
	return (
		<div>
			<div className="/">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Khushboo Gandhi | Connect</title>
					<meta name="description" content="Contact page to connect with Khushboo Gandi or khushboo1028" />
				</Helmet>

				<ContactBackground />
				<Footer
					style={{
						position : 'absolute',
						left     : '0',
						bottom   : '0',
						width    : '100%'
					}}
				/>
			</div>
		</div>
	);
};

export default ConnectPage;
