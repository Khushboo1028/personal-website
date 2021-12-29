import React from "react";
import styles from "./index.module.css";
import { Row, Col } from "react-bootstrap";
import TreeImage from "../../assets/img-tree.png";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

const HomeMySpace = () => {
  return (
    <div className={styles.horizontalLine}>
      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      >
        <Fade bottom>
          <Row>
            <Col
              style={{ textAlign: "center" }}
              md={{ span: 6 }}
              xs={{ span: 12 }}
            >
              <div
                style={{
                  position: "relative",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <img className={styles.imgStyle} src={TreeImage} alt="tree" />
              </div>
            </Col>
            <Col md={{ span: 6 }} xs={{ span: 12 }}>
              <h1 className={styles.title}>Welcome to my space…</h1>
              <p className={styles.description}>
                If you have come here to have a look at my work, I am truly
                grateful to you!
                <br />
                <br />I enjoy creating, designing, developing and learning!
                <br />
                <br />I am a 23 year old software engineer pursuing Msc in
                computer science at San Francisco State University, California.
                <br />
              </p>
            </Col>
          </Row>
        </Fade>
        <Fade bottom>
          <Row>
            <Col md={{ span: 6 }} xs={{ span: 12 }} lg={{ span: 6 }} />
            <Col md={{ span: 6 }} xs={{ span: 12 }} lg={{ span: 6 }}>
              <Fade bottom>
                <Link to="story">
                  <button className={styles.button}>
                    So! What have I done so far?
                  </button>
                </Link>
              </Fade>
            </Col>
          </Row>
        </Fade>
      </div>
    </div>
  );
};

export default HomeMySpace;
