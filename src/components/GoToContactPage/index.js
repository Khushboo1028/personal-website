import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './index.module.css';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const GoToContactPage = () => {
	return (
		<div className={styles.horizontalLine}>
			<div style={{ marginTop: '1rem', padding: '3rem' }}>
				<Fade bottom>
					<Row>
						<Col md={6} sm={6} xs={12}>
							<h2 className={styles.description}>
								Thank you for having a look at my work! It means a lot. <br />I am looking for a
								technical internship for summer 2022 in anything that you think will work best for me!
								Happy to connect :)
							</h2>
						</Col>
						<Col md={6} sm={6} xs={12} style={{ textAlign: 'center' }}>
							<Fade bottom>
								<Link to="/connect">
									<button className={styles.button}>Let's Connect!</button>
								</Link>
							</Fade>
						</Col>
					</Row>
				</Fade>
			</div>
		</div>
	);
};

export default GoToContactPage;
