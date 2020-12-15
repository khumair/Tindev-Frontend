import React from 'react';
import { Col, Container, Media, Row, Image } from 'react-bootstrap';
import Quotes from '../../components/Quotes';
import welcome from '../../media/landing-img-1.svg';

import './style.scss';

const Landing = () => (
	<>
		<Container>
			<Row className='container'>
				<Col md={6} className='heading-text'>
					<h2>Heading</h2>
					<Media>
						<Media.Body>
							<h5> Heading Text will be here</h5>
							<p>
								Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
								scelerisque ante sollicitudin commodo. Cras purus odio,
								vestibulum.
							</p>
						</Media.Body>
					</Media>
				</Col>
				<Col>
					<Image src={welcome} className='header-image' alt='header-image' />
				</Col>
			</Row>
		</Container>

		<Quotes />
	</>
);

export default Landing;
