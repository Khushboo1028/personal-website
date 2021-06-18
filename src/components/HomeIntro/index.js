import React from 'react';
import codingPic from '../../assets/img-coding.png';
import Typing from 'react-typing-animation';
import styles from './index.module.css';
import { Row, Col } from 'react-bootstrap';

const HomeIntro = () => {
	return (
		<div>
			<div>
				<Row>
					<Col style={{ textAlign: 'center' }}>
						<div className={styles.centerDiv}>
							<Typing speed={1}>
								<Row>
									<h3 className={styles.subtitle}>Hello, it's me</h3>
								</Row>
								<Typing.Delay ms={500} />
								<Row>
									<h1 className={styles.title}>Khushboo.</h1>
								</Row>
							</Typing>
						</div>
					</Col>
					<Col style={{ textAlign: 'center' }}>
						<div
							style={{
								position  : 'relative',
								top       : '50%',
								transform : 'translateY(-50%)'
							}}>
							<img className={styles.image} src={codingPic} alt="happy coding pic" />
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default HomeIntro;
