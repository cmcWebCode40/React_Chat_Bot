/** @format */

import React, { useState, useEffect } from 'react';
import useSocket from 'use-socket.io-client';
import { useImmer } from 'use-immer';

const ChatRoom = () => {
	const [socket] = useSocket('https://open-chat-naostsaecf.now.sh');
	const [id, setId] = useState('michael');
	const [input, setInput] = useState('');
	const [message, setMessage] = useImmer([]);

	useEffect(() => {
		socket.connect();
		console.log(socket);
		socket.on('update', message =>
			setMessage(draft => {
				draft.push(['', message]);
			})
		);
		socket.on('message que', (nick, message) =>
			setMessage(draft => {
				draft.push([nick, message]);
			})
		);
		socket.emit('join', 'michael', 'dating');
	}, []);

	return (
		<div>
			<ul>
				{message.map(m =>
					m[0] !== '' ? (
						<li key={m[0]}>
							<strong>{m[0]}</strong>
						</li>
					) : (
						<li key={m[1]}>{m[1]}</li>
					)
				)}
			</ul>
			<div>
				<form
					onSubmit={e => {
						e.preventDefault();
						socket.emit('chat message', input, 'dating');
					}}>
					<input type='text' onChange={e => setInput(e.target.value.trim())} />
					<button type='submit'>Send Message</button>
				</form>
			</div>
		</div>
	);
};

export default ChatRoom;
