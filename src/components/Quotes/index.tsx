import React from 'react';
import { Col, Image } from 'react-bootstrap';

import team from '../../media/team-dev.svg';

import './style.scss';

const Quotes = () => {
	return (
		<div className='landing-lower'>
			<Col>
				<p className='quote'>
					<q>
						Write a bit about our motives message so we can explain our self
					</q>
				</p>
			</Col>

			<Col className='lower'>
				<Image src={team} alt='team-svg' />

				<h4 className='lower-title'>About TeamDev</h4>
				<p className='lower-text'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
					excepturi dolorem quas unde esse est? Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Debitis excepturi dolorem quas unde esse
					est?
				</p>
			</Col>
		</div>
	);
};

export default Quotes;
