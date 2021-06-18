import React from 'react';
import styles from './index.module.css';
import { Row, Col } from 'react-bootstrap';
import TreeImage from '../../assets/img-tree.png';
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-scroll';

const HomeMySpace = () => {
	return (
		<div className={styles.horizontalLine}>
			<div style={{ marginTop: '2rem', padding: '1rem' }}>
				<Row>
					<Col style={{ textAlign: 'center' }} md={{ span: 6 }} xs={{ span: 12 }}>
						<div
							style={{
								position  : 'relative',
								top       : '50%',
								transform : 'translateY(-50%)'
							}}>
							<img className={styles.imgStyle} src={TreeImage} alt="tree" />
						</div>
					</Col>
					<Col md={{ span: 6 }} xs={{ span: 12 }}>
						<h1 className={styles.title}>Welcome to my space…</h1>
						<p className={styles.description}>
							If you have come here to have a look at my work, I am truly grateful to you!<br />
							<br />I enjoy creating, designing, developing and learning!<br />
							<br />I am a 22 year old software engineer with a degree in information technology from
							NMIMS, Mumbai, India.<br />
							<br />Currently, I am pursuing Msc in computer science at the San Francisco State
							University, California.<br />
							<br />Lovely weather here, btw!
						</p>
					</Col>
				</Row>

				<Row>
					<Col />
					<Col>
						<Bounce right>
							<Link to="story">
								<button className={styles.button}>So! What have I done so far?</button>
							</Link>
						</Bounce>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default HomeMySpace;
