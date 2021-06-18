import React, { useEffect } from 'react';
import workPic from '../../assets/work/img-work.png';
import styles from './index.module.css';
import { animateScroll as scroll } from 'react-scroll';
import { Row, Col } from 'react-bootstrap';

const WorkIntro = () => {
	const scrollTop = () => {
		scroll.scrollToTop();
	};

	useEffect(() => {
		scrollTop();
	}, []);

	return (
		<div>
			<div style={{ textAlign: 'center' }}>
				<Row style={{ textAlign: 'center' }}>
					<Col style={{ textAlign: 'center' }} md={6} xs={12}>
						<div className={styles.centerDiv}>
							<Row>
								<h1 className={styles.subtitle}>
									Thank you for showing<br /> an eye on my work. <br /> <br />It means a lot :)
								</h1>
							</Row>
						</div>
					</Col>
					<Col style={{ textAlign: 'center' }} md={6} xs={12}>
						<div
							style={{
								position  : 'relative',
								top       : '50%',
								transform : 'translateY(-30%)'
							}}>
							<img className={styles.image} src={workPic} alt="work" />
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default WorkIntro;
