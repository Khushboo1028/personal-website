import React from 'react';
import styles from './index.module.css';
import { Row, Col } from 'react-bootstrap';
import BookImage from '../../assets/img-book.png';
import Bounce from 'react-reveal/Slide';
import { Link } from 'react-scroll';

const HomeMySpace = () => {
	return (
		<div className={styles.horizontalLine} id="story">
			<div
				style={{
					marginTop    : '2rem',
					padding      : '2rem',
					paddingLeft  : '3rem',
					paddingRight : '3rem'
				}}>
				<Row>
					<Col md={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
						<h1 className={styles.title}>So it's Story Time!</h1>
						<p className={styles.description}>
							I quenched my thirst of creating by learning how to make apps!<br />
							<br />
							Starting off with android app development, I was thrilled to run my first “hello world” app
							on my phone.<br />
							<br />
							Getting hooked onto this new virtual development world, I explored more code, designs, ideas
							and created complex multi page apps having more than 10 different layouts and 100+ users!{' '}
							<br />
							<br />
							Turning this into a business idea, I co founded a company (June 2019 to 2021) with two of my
							equally enthusiastic friends. We started freelancing apps together and have published over 9
							apps on the play store!
						</p>
					</Col>
					<Col style={{ textAlign: 'center' }} md={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
						<div
							style={{
								position  : 'relative',
								top       : '50%',
								transform : 'translateY(-50%)'
							}}>
							<img className={styles.imgStyle} src={BookImage} alt="book" />
						</div>
					</Col>
				</Row>

				<Row>
					<Col>
						<Bounce right>
							<Link to="skills">
								<button className={styles.button}>What after android? Did you learn more?</button>
							</Link>
						</Bounce>
					</Col>
					<Col />
				</Row>
			</div>
		</div>
	);
};

export default HomeMySpace;
