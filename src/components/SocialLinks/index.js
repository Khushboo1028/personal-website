import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './index.module.css';
import mail from '../../assets/connect/mail.png';
import github from '../../assets/connect/github.png';
import instagram from '../../assets/connect/instagram.png';
import twitter from '../../assets/connect/twitter.png';
import linkedin from '../../assets/connect/linkedin.png';

const SocialLinks = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<Row>
				<Col xs={1} md={1} lg={1}>
					<img className={styles.imageMail} src={mail} alt="mail" />
				</Col>
				<Col xs={3} md={3} lg={3}>
					<Row>
						<p className={styles.text}>khushboo1028@gmail.com</p>
					</Row>
				</Col>
			</Row>

			<Row>
				<Col xs={1} md={1} lg={1} style={{ marginLeft: '0.5rem' }}>
					<a href="https://github.com/khushboo1028/">
						<img className={styles.image} src={github} alt="github" />
					</a>
				</Col>
				<Col xs={1} md={1} lg={1}>
					<a href="https://www.instagram.com/thecitrusshake/">
						<img className={styles.image} src={instagram} alt="instagram" />
					</a>
				</Col>
				<Col xs={1} md={1} lg={1}>
					<a href="https://twitter.com/thecitrusshake">
						<img className={styles.image} src={twitter} alt="twitter" />
					</a>
				</Col>
				<Col xs={1} md={1} lg={1}>
					<a href="https://www.linkedin.com/in/khushboo-gandhi-9aa57474/">
						<img className={styles.image} src={linkedin} alt="linkedin" />
					</a>
				</Col>
			</Row>
		</div>
	);
};

export default SocialLinks;
