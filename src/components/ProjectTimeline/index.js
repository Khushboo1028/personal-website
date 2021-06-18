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
import ilaakaIcon from '../../assets/work/ic-ilaaka.png';
import ilaakaImage from '../../assets/work/img-ilaaka.png';
import atithiIcon from '../../assets/work/ic-atithi.png';
import atithiImage from '../../assets/work/img-atithi.png';
import vsmIcon from '../../assets/work/img-vsm.png';
import vsmImage from '../../assets/work/img-sarees.png';
import hiweIcon from '../../assets/work/ic-hiwe.png';
import hiweImage from '../../assets/work/img-hiwe.png';

const useStyles = makeStyles((theme) => ({
	rootRight : {
		maxWidth : 280
	},
	connector : {
		minHeight       : '300px',
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
						{/* Item 1 */}
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
								</Card>
							</TimelineContent>
						</TimelineItem>

						{/* Item 2 */}

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
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>

						{/* Item 3 */}

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
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>

						{/* Item 4 */}

						<TimelineItem>
							<TimelineOppositeContent>
								<h3 className={styles.date}>February 2020</h3>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<img className={styles.dotIcon} src={hiweIcon} alt="VSM Sarees" />

								<TimelineConnector className={classes.connector} />
							</TimelineSeparator>
							<TimelineContent style={{ padding: '20px 16px' }}>
								<Card className={classes.rootRight}>
									<CardActionArea>
										<CardContent>
											<p className={styles.cardTitle}>Hiwe Fitness - Go to app for all gyms!</p>
										</CardContent>
										<CardMedia
											component="img"
											alt="atithi"
											image={hiweImage}
											title="VSM Sarees - An app for saree wholesalers"
										/>
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>

						{/* Item 5 */}

						<TimelineItem>
							<TimelineOppositeContent>
								<h3 className={styles.date}>April 2020</h3>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<img className={styles.dotIcon} src={hiweIcon} alt="VSM Sarees" />

								<TimelineConnector className={classes.connector} />
							</TimelineSeparator>
							<TimelineContent style={{ padding: '20px 16px' }}>
								<Card className={classes.rootRight}>
									<CardActionArea>
										<CardContent>
											<p className={styles.cardTitle}>Grace - The Health App</p>
										</CardContent>
										<CardMedia
											component="img"
											alt="grace"
											image={hiweImage}
											title="Grace - The Health App"
										/>
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>
						{/* Item 6 */}

						<TimelineItem>
							<TimelineOppositeContent>
								<h3 className={styles.date}>July 2020</h3>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<img className={styles.dotIcon} src={hiweIcon} alt="VSM Sarees" />

								<TimelineConnector className={classes.connector} />
							</TimelineSeparator>
							<TimelineContent style={{ padding: '20px 16px' }}>
								<Card className={classes.rootRight}>
									<CardActionArea>
										<CardContent>
											<p className={styles.cardTitle}>Before Visit</p>
										</CardContent>
										<CardMedia
											component="img"
											alt="before visit"
											image={hiweImage}
											title="Before Visit"
										/>
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>

						{/* Item 7 */}
						<TimelineItem>
							<TimelineOppositeContent>
								<h3 className={styles.date}>September 2020</h3>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<img className={styles.dotIcon} src={hiweIcon} alt="aarjay chairs" />

								<TimelineConnector className={classes.connector} />
							</TimelineSeparator>
							<TimelineContent style={{ padding: '20px 16px' }}>
								<Card className={classes.rootRight}>
									<CardActionArea>
										<CardContent>
											<p className={styles.cardTitle}>Aarjay Chairs - Website</p>
										</CardContent>
										<CardMedia
											component="img"
											alt="aarjay chairs"
											image={hiweImage}
											title="Aarjay Chairs"
										/>
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>

						{/* Item 8 */}
						<TimelineItem>
							<TimelineOppositeContent>
								<h3 className={styles.date}>August 2020</h3>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<img className={styles.dotIcon} src={hiweIcon} alt="aarjay chairs" />

								<TimelineConnector className={classes.connector} />
							</TimelineSeparator>
							<TimelineContent style={{ padding: '20px 16px' }}>
								<Card className={classes.rootRight}>
									<CardActionArea>
										<CardContent>
											<p className={styles.cardTitle}>Aarjay Chairs - Website</p>
										</CardContent>
										<CardMedia
											component="img"
											alt="aarjay chairs"
											image={hiweImage}
											title="Aarjay Chairs"
										/>
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>

						{/* Item 9 */}
						<TimelineItem>
							<TimelineOppositeContent>
								<h3 className={styles.date}>August 2020</h3>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<img className={styles.dotIcon} src={hiweIcon} alt="momma's kitchen" />

								<TimelineConnector className={classes.connector} />
							</TimelineSeparator>
							<TimelineContent style={{ padding: '20px 16px' }}>
								<Card className={classes.rootRight}>
									<CardActionArea>
										<CardContent>
											<p className={styles.cardTitle}>Momma's Kitchen - App</p>
										</CardContent>
										<CardMedia
											component="img"
											alt="momma's kitchen"
											image={hiweImage}
											title="Momma's Kitchen"
										/>
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>

						{/* Item 10 */}
						<TimelineItem>
							<TimelineOppositeContent>
								<h3 className={styles.date}>April 2021</h3>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<img className={styles.dotIcon} src={hiweIcon} alt="Krsi Karma" />

								<TimelineConnector className={classes.connector} />
							</TimelineSeparator>
							<TimelineContent style={{ padding: '20px 16px' }}>
								<Card className={classes.rootRight}>
									<CardActionArea>
										<CardContent>
											<p className={styles.cardTitle}>Krsi Karms Rider App</p>
										</CardContent>
										<CardMedia
											component="img"
											alt="krsi karma"
											image={hiweImage}
											title="Krsi Karma App"
										/>
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>

						{/* Item 11 */}
						<TimelineItem>
							<TimelineOppositeContent>
								<h3 className={styles.date}>April 2021</h3>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<img className={styles.dotIcon} src={hiweIcon} alt="Krsi Karma" />

								<TimelineConnector className={classes.connector} />
							</TimelineSeparator>
							<TimelineContent style={{ padding: '20px 16px' }}>
								<Card className={classes.rootRight}>
									<CardActionArea>
										<CardContent>
											<p className={styles.cardTitle}>Krsi Karms Captain App</p>
										</CardContent>
										<CardMedia
											component="img"
											alt="krsi karma captain"
											image={hiweImage}
											title="Krsi Karma captain App"
										/>
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>

						{/* Item 12 */}
						<TimelineItem>
							<TimelineOppositeContent>
								<h3 className={styles.date}>June 2021</h3>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<img className={styles.dotIcon} src={hiweIcon} alt="Krsi Karma" />

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
											image={hiweImage}
											title="Say Hello To Khushboo Website"
										/>
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</div>
			</div>
		</div>
	);
};

export default ProjectTimeline;
