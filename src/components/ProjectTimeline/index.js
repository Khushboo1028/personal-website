import React from 'react';
import styles from './index.module.css';
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent
} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fade from 'react-reveal/Fade';

import ilaakaIcon from '../../assets/work/ic-ilaaka.png';
import ilaakaImage from '../../assets/work/img-ilaaka.png';
import atithiIcon from '../../assets/work/ic-atithi.png';
import atithiImage from '../../assets/work/img-atithi.png';
import vsmIcon from '../../assets/work/img-vsm.png';
import vsmImage from '../../assets/work/img-sarees.png';
import hiweIcon from '../../assets/work/ic-hiwe.png';
import hiweImage from '../../assets/work/img-hiwe.png';
import graceImage from '../../assets/work/img-grace.png';
import graceIcon from '../../assets/work/ic-grace.png';
import beforeVisitIcon from '../../assets/work/ic-beforevisit.png';
import beforeVisitImage from '../../assets/work/img-beforevisit.png';
import aarjayImage from '../../assets/work/img-chairs.png';
import aarjayIcon from '../../assets/work/ic-chairs.png';
import mommyImage from '../../assets/work/img-momma.png';
import mommyIcon from '../../assets/work/ic-momma.png';
import farmerImage from '../../assets/work/img-farmer.png';
import farmerIcon from '../../assets/work/ic-farmer.png';
import tractorImage from '../../assets/work/img-tractor.png';
import tractorIcon from '../../assets/work/ic-tractor.png';
import meImage from '../../assets/work/img-me.png';
import meIcon from '../../assets/work/ic-me.png';

const useStyles = makeStyles((theme) => ({
	rootRight : {
		maxWidth : 280
	},
	connector : {
		minHeight       : '200px',
		backgroundColor : '#272343',
		width           : '0.2rem'
	}
}));

const ProjectTimeline = () => {
	const classes = useStyles();

	return (
		<div>
			<div className={styles.horizontalLine}>
				<div style={{ marginTop: '4rem', textAlign: 'center' }}>
					<h1 className={styles.title}>Projects So Far</h1>
				</div>
				{/* Starting Project Timeline Now */}
				<div style={{ marginTop: '4rem', textAlign: 'center' }}>
					<Timeline>
						{/* ilaaka */}
						<Fade bottom>
							<TimelineItem>
								<TimelineOppositeContent>
									<h3 className={styles.date}>August 2019</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<img className={styles.dotIcon} src={ilaakaIcon} alt="ilaaka" />

									<TimelineConnector className={classes.connector} />
								</TimelineSeparator>
								<TimelineContent style={{ padding: '20px 16px' }}>
									<Card className={classes.rootRight}>
										<a
											className={styles.alink}
											href="https://play.google.com/store/apps/details?id=com.replon.www.replonhomy"
											target="_blank"
											rel="noreferrer">
											<CardActionArea>
												<CardContent>
													<p className={styles.cardTitle}>ilaaka - Society Management App</p>
												</CardContent>
												<CardMedia
													component="img"
													alt="ilaaka"
													image={ilaakaImage}
													title="ilaaka - society management"
												/>
											</CardActionArea>
										</a>
									</Card>
								</TimelineContent>
							</TimelineItem>
						</Fade>
						{/* atithi */}

						<Fade bottom>
							<TimelineItem>
								<TimelineOppositeContent>
									<h3 className={styles.date}>August 2019</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<img className={styles.dotIcon} src={atithiIcon} alt="Atithi" />

									<TimelineConnector className={classes.connector} />
								</TimelineSeparator>
								<TimelineContent style={{ padding: '20px 16px' }}>
									<Card className={classes.rootRight}>
										<CardActionArea>
											<a
												className={styles.alink}
												href="https://play.google.com/store/apps/details?id=com.hello.khushboo.replonguesty"
												target="_blank"
												rel="noreferrer">
												<CardContent>
													<p className={styles.cardTitle}>
														Atithi - Visitor and Guest Management App
													</p>
												</CardContent>
												<CardMedia
													component="img"
													alt="atithi"
													image={atithiImage}
													title="Atithi - Visitor and Guest Management App"
												/>
											</a>
										</CardActionArea>
									</Card>
								</TimelineContent>
							</TimelineItem>
						</Fade>
						{/* vsm sarees */}

						<Fade bottom>
							<TimelineItem>
								<TimelineOppositeContent>
									<h3 className={styles.date}>December 2019</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<img className={styles.dotIcon} src={vsmIcon} alt="VSM Sarees" />

									<TimelineConnector className={classes.connector} />
								</TimelineSeparator>
								<TimelineContent style={{ padding: '20px 16px' }}>
									<Card className={classes.rootRight}>
										<CardActionArea>
											<a
												className={styles.alink}
												href="https://play.google.com/store/apps/details?id=com.replon.vsm"
												target="_blank"
												rel="noreferrer">
												<CardContent>
													<p className={styles.cardTitle}>
														VSM Sarees - An app for saree wholesalers
													</p>
												</CardContent>
												<CardMedia
													component="img"
													alt="atithi"
													image={vsmImage}
													title="VSM Sarees - An app for saree wholesalers"
												/>
											</a>
										</CardActionArea>
									</Card>
								</TimelineContent>
							</TimelineItem>
						</Fade>
						{/* hiwe fitness*/}

						<Fade bottom>
							<TimelineItem>
								<TimelineOppositeContent>
									<h3 className={styles.date}>February 2020</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<img className={styles.dotIcon} src={hiweIcon} alt="hiwe fitness" />

									<TimelineConnector className={classes.connector} />
								</TimelineSeparator>
								<TimelineContent style={{ padding: '20px 16px' }}>
									<Card className={classes.rootRight}>
										<CardActionArea>
											<a
												className={styles.alink}
												href="https://play.google.com/store/apps/details?id=com.rgala98.hiwefitness"
												target="_blank"
												rel="noreferrer">
												<CardContent>
													<p className={styles.cardTitle}>
														Hiwe Fitness - Go to app for all gyms!
													</p>
												</CardContent>
												<CardMedia
													component="img"
													alt="hiwe"
													image={hiweImage}
													title="VSM Sarees - An app for saree wholesalers"
												/>
											</a>
										</CardActionArea>
									</Card>
								</TimelineContent>
							</TimelineItem>
						</Fade>
						{/* grac health */}
						<Fade bottom>
							<TimelineItem>
								<TimelineOppositeContent>
									<h3 className={styles.date}>April 2020</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<img className={styles.dotIcon} src={graceIcon} alt="grace health" />

									<TimelineConnector className={classes.connector} />
								</TimelineSeparator>
								<TimelineContent style={{ padding: '20px 16px' }}>
									<Card className={classes.rootRight}>
										<CardActionArea>
											<a
												className={styles.alink}
												href="https://play.google.com/store/apps/details?id=com.replon.www.grace_thehealthapp"
												target="_blank"
												rel="noreferrer">
												<CardContent>
													<p className={styles.cardTitle}>Grace - The Health App</p>
												</CardContent>
												<CardMedia
													component="img"
													alt="grace"
													image={graceImage}
													title="Grace - The Health App"
												/>
											</a>
										</CardActionArea>
									</Card>
								</TimelineContent>
							</TimelineItem>
						</Fade>
						{/* Before visit */}
						<Fade bottom>
							<TimelineItem>
								<TimelineOppositeContent>
									<h3 className={styles.date}>July 2020</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<img className={styles.dotIcon} src={beforeVisitIcon} alt="beforeVisit" />

									<TimelineConnector className={classes.connector} />
								</TimelineSeparator>
								<TimelineContent style={{ padding: '20px 16px' }}>
									<Card className={classes.rootRight}>
										<CardActionArea>
											<a
												className={styles.alink}
												href="https://play.google.com/store/apps/details?id=com.beforevisit.beforevisitapp"
												target="_blank"
												rel="noreferrer">
												<CardContent>
													<p className={styles.cardTitle}>Before Visit - App</p>
												</CardContent>
												<CardMedia
													component="img"
													alt="before visit"
													image={beforeVisitImage}
													title="Before Visit"
												/>
											</a>
										</CardActionArea>
									</Card>
								</TimelineContent>
							</TimelineItem>
						</Fade>
						{/* chairs*/}
						<Fade bottom>
							<TimelineItem>
								<TimelineOppositeContent>
									<h3 className={styles.date}>September 2020</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<img className={styles.dotIcon} src={aarjayIcon} alt="aarjay chairs" />

									<TimelineConnector className={classes.connector} />
								</TimelineSeparator>
								<TimelineContent style={{ padding: '20px 16px' }}>
									<Card className={classes.rootRight}>
										<CardActionArea>
											<a
												className={styles.alink}
												href="https://aarjaychairs.com/"
												rel="noreferrer"
												target="_blank">
												<CardContent>
													<p className={styles.cardTitle}>Aarjay Chairs - Website</p>
												</CardContent>
												<CardMedia
													component="img"
													alt="aarjay chairs"
													image={aarjayImage}
													title="Aarjay Chairs"
												/>
											</a>
										</CardActionArea>
									</Card>
								</TimelineContent>
							</TimelineItem>
						</Fade>

						{/*  mommas kitchen */}
						<Fade bottom>
							<TimelineItem>
								<TimelineOppositeContent>
									<h3 className={styles.date}>August 2020</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<img className={styles.dotIcon} src={mommyIcon} alt="momma's kitchen" />

									<TimelineConnector className={classes.connector} />
								</TimelineSeparator>
								<TimelineContent style={{ padding: '20px 16px' }}>
									<Card className={classes.rootRight}>
										<CardActionArea>
											<a
												className={styles.alink}
												href="https://play.google.com/store/apps/details?id=com.kitchen.mommaskitchen"
												target="_blank"
												rel="noreferrer">
												<CardContent>
													<p className={styles.cardTitle}>Momma's Kitchen - App</p>
												</CardContent>
												<CardMedia
													component="img"
													alt="momma's kitchen"
													image={mommyImage}
													title="Momma's Kitchen"
												/>
											</a>
										</CardActionArea>
									</Card>
								</TimelineContent>
							</TimelineItem>
						</Fade>
						{/* Krsi karma rider */}

						<Fade>
							<TimelineItem>
								<TimelineOppositeContent>
									<h3 className={styles.date}>April 2021</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<img className={styles.dotIcon} src={farmerIcon} alt="Krsi Karma" />

									<TimelineConnector className={classes.connector} />
								</TimelineSeparator>
								<TimelineContent style={{ padding: '20px 16px' }}>
									<Card className={classes.rootRight}>
										<CardActionArea>
											<a
												className={styles.alink}
												href="https://play.google.com/store/apps/details?id=com.krsikarma.app"
												target="_blank"
												rel="noreferrer">
												<CardContent>
													<p className={styles.cardTitle}>Krsi Karma Rider App</p>
												</CardContent>
												<CardMedia
													component="img"
													alt="krsi karma"
													image={farmerImage}
													title="Krsi Karma App"
												/>
											</a>
										</CardActionArea>
									</Card>
								</TimelineContent>
							</TimelineItem>
						</Fade>
						{/* krsi karma captain*/}
						<Fade bottom>
							<TimelineItem>
								<TimelineOppositeContent>
									<h3 className={styles.date}>April 2021</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<img className={styles.dotIcon} src={tractorIcon} alt="Krsi Karma" />

									<TimelineConnector className={classes.connector} />
								</TimelineSeparator>
								<TimelineContent style={{ padding: '20px 16px' }}>
									<Card className={classes.rootRight}>
										<CardActionArea>
											<a
												className={styles.alink}
												href="https://play.google.com/store/apps/details?id=com.krsikarma.captain"
												target="_blank"
												rel="noreferrer">
												<CardContent>
													<p className={styles.cardTitle}>Krsi Karms Captain App</p>
												</CardContent>
												<CardMedia
													component="img"
													alt="krsi karma captain"
													image={tractorImage}
													title="Krsi Karma captain App"
												/>
											</a>
										</CardActionArea>
									</Card>
								</TimelineContent>
							</TimelineItem>
						</Fade>
						{/* say hello to khushboo */}
						<Fade bottom>
							<TimelineItem>
								<TimelineOppositeContent>
									<h3 className={styles.date}>June 2021</h3>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<img className={styles.dotIcon} src={meIcon} alt="Krsi Karma" />

									<TimelineConnector className={classes.connector} />
								</TimelineSeparator>
								<TimelineContent style={{ padding: '20px 16px' }}>
									<Card className={classes.rootRight}>
										<CardActionArea>
											<CardContent>
												<p className={styles.cardTitle}>Say Hello To Khushboo Website!</p>
											</CardContent>
											<CardMedia
												component="img"
												alt="Say Hello To Khushboo Website"
												image={meImage}
												title="Say Hello To Khushboo Website"
											/>
										</CardActionArea>
									</Card>
								</TimelineContent>
							</TimelineItem>
						</Fade>
					</Timeline>
				</div>
			</div>
		</div>
	);
};

export default ProjectTimeline;
