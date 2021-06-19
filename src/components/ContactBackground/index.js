import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './index.module.css';
import SocialLinks from '../SocialLinks';
import ContactForm from '../ContactForm';
import Card from '@material-ui/core/Card';

const ContactBackground = () => {
	return (
		<div className={styles.container}>
			<Row style={{ marginTop: '2rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
				<Col xs={12} md={6} lg={6}>
					<Row>
						<h1 className={styles.title}>Let's Connect</h1>
					</Row>
					<Row>
						<p className={styles.description}>Fill up the form and I will get back to you within 24 hrs.</p>
					</Row>

					<Row style={{ marginTop: '5rem' }}>
						<SocialLinks />
					</Row>
				</Col>
				<Col xs={12} md={6} lg={6}>
					<Card style={{ backgroundColor: '#272343', height: '30rem', marginTop: '2rem' }}>
						<ContactForm />
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default ContactBackground;
