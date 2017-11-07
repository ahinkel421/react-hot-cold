import React from 'react';

import './guess-feedback.css';

export default function GuessFeedback(props) {
	return <h4 className='guessFeedback'>{props.feedback}</h4>;
}
