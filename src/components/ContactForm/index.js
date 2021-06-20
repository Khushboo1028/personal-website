import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './index.module.css';

import emailjs from 'emailjs-com';

emailjs.init(process.env.REACT_APP_MAIL_USERID);

const ContactForm = () => {
	const [ validated, setValidated ] = useState(false);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');

	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [ loading, setLoading ] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			event.preventDefault();
			setValidated(true);
			setLoading(true);
			var templateParams = {
				user_name    : name,
				user_email   : email,
				user_message : message
			};
			console.log(templateParams);

			emailjs.send('service_q4zmzzi', 'template_77itrdn', templateParams, 'user_jbd7hzDvLU7zmEX2wXnPv').then(
				function(response) {
					setName('');
					setEmail('');
					setMessage('');
					handleShow();
					setValidated(false);
					setLoading(false);
					console.log('SUCCESS!', response.status, response.text);
				},
				function(error) {
					setLoading(false);
					alert('Uh-Oh. Error sending form. You can contact me directly at khushboo1028@gmail.com');
				}
			);
		}
		setValidated(true);
	};

	const handleName = (event) => {
		setName(event.currentTarget.value);
	};

	const handleEmail = (event) => {
		setEmail(event.currentTarget.value);
	};

	const handleMessage = (event) => {
		setMessage(event.currentTarget.value);
	};

	const loadingButton = () => {
		return (
			<Button type="submit" className={styles.button} disabled>
				<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" style={{}} /> Loading...{' '}
			</Button>
		);
	};

	const normalButton = () => {
		return (
			<Button type="submit" className={styles.button}>
				Send Message
			</Button>
		);
	};

	return (
		<div id="contact">
			<Container style={{ paddingTop: '1rem' }}>
				<Row>
					<Col lg={12} md={12} xs={12}>
						<Form
							noValidate
							validated={validated}
							onSubmit={handleSubmit}
							style={{ position: 'relative', padding: '1rem' }}>
							<Form.Row>
								<Form.Group as={Col} controlId="validationCustom01">
									<Form.Label style={{ color: '#fdfdfd' }}>Name</Form.Label>
									<Form.Control
										required
										type="text"
										className="input-field"
										style={{ boxShadow: 'none', border: 'none', backgroundColor: '#fdfdfd' }}
										value={name}
										onChange={handleName}
									/>
									<Form.Control.Feedback style={{ color: '#fdfdfd' }} type="invalid">
										Please provide a valid Name.
									</Form.Control.Feedback>
								</Form.Group>
							</Form.Row>

							<Form.Row>
								<Form.Group as={Col} controlId="validationCustomEmail">
									<Form.Label style={{ color: '#fdfdfd', marginTop: '1rem' }}>Email</Form.Label>
									<Form.Control
										type="email"
										required
										className="input-field"
										style={{ boxShadow: 'none', border: 'none', backgroundColor: '#fdfdfd' }}
										value={email}
										onChange={handleEmail}
									/>
									<Form.Control.Feedback style={{ color: '#fdfdfd' }} type="invalid">
										Please provide a valid Email.
									</Form.Control.Feedback>
								</Form.Group>
							</Form.Row>
							<Form.Group style={{ marginBottom: '1rem' }}>
								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label style={{ color: '#fdfdfd', marginTop: '1rem' }}>Message</Form.Label>
									<Form.Control
										as="textarea"
										rows="3"
										required
										className="input-field"
										style={{
											boxShadow       : 'none',
											border          : 'none',
											resize          : 'none',
											backgroundColor : '#fdfdfd'
										}}
										value={message}
										onChange={handleMessage}
									/>
									<Form.Control.Feedback type="invalid" style={{ color: '#fdfdfd' }}>
										Please type a message.
									</Form.Control.Feedback>
								</Form.Group>
							</Form.Group>
							<div className={styles.buttonAlign}>{loading ? loadingButton() : normalButton()}</div>
						</Form>

						<Modal show={show} onHide={handleClose}>
							<Modal.Header>
								<Modal.Title>Successfully Submitted Form</Modal.Title>
							</Modal.Header>
							<Modal.Body>Thank you for contacting me! I will respond ASAP.</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>
									Close
								</Button>
							</Modal.Footer>
						</Modal>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ContactForm;
