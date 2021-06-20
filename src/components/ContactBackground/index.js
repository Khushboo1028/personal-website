import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './index.module.css';
import SocialLinks from '../SocialLinks';
import ContactForm from '../ContactForm';
import Card from '@material-ui/core/Card';
import { animateScroll as scroll } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const ContactBackground = () => {
	const scrollTop = () => {
		scroll.scrollToTop();
	};

	useEffect(() => {
		scrollTop();
	}, []);

	return (
		<div className={styles.container}>
			<Row style={{ marginTop: '2rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
				<Col xs={12} md={6} lg={6}>
					<Fade bottom>
						<Row>
							<h1 className={styles.title}>Let's Connect</h1>
						</Row>
					</Fade>
					<Fade bottom>
						<Row>
							<p className={styles.description}>
								Fill up the form and I will get back to you within 24 hrs.
							</p>
						</Row>
					</Fade>
					<Fade bottom>
						<Row>
							<div className={styles.social}>
								<SocialLinks />
							</div>
						</Row>
					</Fade>
				</Col>

				<Col xs={12} md={6} lg={6}>
					<Fade bottom>
						<Card style={{ marginTop: '2rem' }}>
							<div className={styles.card}>
								<ContactForm />
							</div>
						</Card>
					</Fade>
				</Col>
			</Row>
		</div>
	);
};

export default ContactBackground;
