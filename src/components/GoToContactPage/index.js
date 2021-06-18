import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './index.module.css';
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-router-dom';

const GoToContactPage = () => {
	return (
		<div className={styles.horizontalLine}>
			<div style={{ marginTop: '2rem', padding: '4rem' }}>
				<Row>
					<Col md={6} sm={6} xs={12}>
						<h2 className={styles.description}>
							If you scrolled down till here, I hope you liked my work! <br />I am looking for a technical
							internship for summer 2022 in anything that you think will work best for me!
						</h2>
					</Col>
					<Col md={6} sm={6} xs={12} style={{ textAlign: 'center' }}>
						<Bounce right>
							<Link to="/connect">
								<button className={styles.button}>Let's Connect!</button>
							</Link>
						</Bounce>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default GoToContactPage;
