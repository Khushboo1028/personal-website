import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import insta from "../../assets/footer/ic_instagram.png";
import github from "../../assets/footer/ic_github.png";
import email from "../../assets/footer/ic_mail.png";
import twitter from "../../assets/footer/ic_twitter.png";
import linkdin from "../../assets/footer/ic_linkdin.png";

const index = () => {
  return (
    <div className={styles.stickyFooter}>
      <Row
        style={{
          textAlign: "center",
          background: "#272343",
          marginTop: "5rem",
        }}
      >
        <Col md={3} xs={12}>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/sayhellotokhushboo.appspot.com/o/khushboo-gandhi-resume.pdf?alt=media&token=3b09b2ef-06f7-40db-b8e3-423c4a91d9d1"
            style={{ textDecoration: "None" }}
            rel="noreferrer"
            target="_blank"
          >
            <p className={styles.description}>
              © {new Date().getFullYear()} Khushboo Gandhi - View Resume
            </p>
          </a>
        </Col>

        <Col md={3} xs={12} />
        <Col md={3} xs={12} />

        <Col md={3} xs={12}>
          <a href="https://github.com/khushboo1028/">
            <img className={styles.image} src={github} alt="github" />
          </a>

          <a href="https://www.instagram.com/thecitrusshake/">
            <img className={styles.image} src={insta} alt="instagram" />
          </a>

          <a href="https://twitter.com/thecitrusshake">
            <img className={styles.image} src={twitter} alt="twitter" />
          </a>

          <a href="https://www.linkedin.com/in/khushboo-gandhi-9aa57474/">
            <img className={styles.image} src={linkdin} alt="linkdin" />
          </a>

          <a href="mailto: khushboo1028@gmail.com">
            <img className={styles.image} src={email} alt="email" />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default index;
