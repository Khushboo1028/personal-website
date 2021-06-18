import React from 'react';
import styles from './index.module.css';
import { Row, Col } from 'react-bootstrap';
import Jump from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

import photoshop from '../../assets/skills/adobe-photoshop.png';
import premierePro from '../../assets/skills/adobe-premiere-pro.png';
import adobeXD from '../../assets/skills/adobe-xd.png';
import androidStudio from '../../assets/skills/android-studio.png';
import cplus from '../../assets/skills/c.png';
import mongodb from '../../assets/skills/mongodb.png';
import css from '../../assets/skills/css.png';
import firebase from '../../assets/skills/firebase.png';
import github from '../../assets/skills/github.png';
import html from '../../assets/skills/html.png';
import javaScript from '../../assets/skills/java-script.png';
import java from '../../assets/skills/java.png';
import mysql from '../../assets/skills/mysql.png';
import nodeJS from '../../assets/skills/node-js.png';
import npm from '../../assets/skills/npm.png';
import postman from '../../assets/skills/postman.png';
import python from '../../assets/skills/python.png';
import react from '../../assets/skills/react.png';
import vscode from '../../assets/skills/visual-studio-code.png';
import yarn from '../../assets/skills/yarn.png';
import Bounce from 'react-reveal/Bounce';

const SkillsCarousel = () => {
	return (
		<div className={styles.horizontalLine} id="skills">
			<div style={{ textAlign: 'center' }}>
				<Row>
					<Col sm={12} md={12}>
						<h1 className={styles.title}>Technical Skills</h1>
					</Col>
				</Row>
				<Jump>
					<Row style={{ marginTop: '2rem' }}>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={react} alt="react" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={javaScript} alt="javascript" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={yarn} alt="yarn" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={npm} alt="npm" />
						</Col>
					</Row>
				</Jump>
				{/* Row 2 */}
				<Jump>
					<Row>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={nodeJS} alt="nodejs" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={python} alt="python" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={java} alt="java" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={cplus} alt="c++" />
						</Col>
					</Row>
				</Jump>
				{/* Row 3 */}

				<Jump>
					<Row>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={html} alt="html" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={css} alt="css" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={mysql} alt="mysql" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={github} alt="github" />
						</Col>
					</Row>
				</Jump>
				{/* Row 4 */}

				<Jump>
					<Row>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={androidStudio} alt="android studio" />
						</Col>

						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={firebase} alt="firebase" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={vscode} alt="visual studio code" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={mongodb} alt="mongodb" />
						</Col>
					</Row>
				</Jump>

				{/* Row 5*/}

				<Jump>
					<Row>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={postman} alt="android studio" />
						</Col>

						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={photoshop} alt="photoshop" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={adobeXD} alt="adobeXD" />
						</Col>
						<Col md={3} sm={3} xs={6}>
							<img className={styles.imgStyle} src={premierePro} alt="premierePro" />
						</Col>
					</Row>
				</Jump>
			</div>

			<div style={{ marginTop: '2rem', padding: '3rem' }}>
				<Row style={{ textAlign: 'center' }}>
					<Col md={6} sm={6} xs={12}>
						<h2 className={styles.description}>
							So, now that you have gone through all that I know, why don’t we have a look at some of my
							projects?
						</h2>
					</Col>
					<Col md={6} sm={6} xs={12} style={{ textAlign: 'center' }}>
						<Bounce right>
							<Link to="/work">
								<button className={styles.button}>Click to view projects!</button>
							</Link>
						</Bounce>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default SkillsCarousel;
