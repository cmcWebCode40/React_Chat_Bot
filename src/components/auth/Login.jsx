/** @format */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../images/login.svg';

const Login = ({ history }) => {
	const [userData, setUserData] = useState({ email: '', password: '' });
	const [message, setMessage] = useState(false);
	const [loading, setLoading] = useState(false);
	const [changeRoute, setChangeRoute] = useState(false);

	const handleLogin = async e => {
		e.preventDefault();
		setLoading(true);
	};
	console.log('Login Page!!!');

	useEffect(() => {}, [message]);

	return (
		<div className='form' onSubmit={handleLogin}>
			<div className='form-wrapper'>
				<div className='form-wrapper-image'>
					<img src={loginImage} alt='login portal ' height='350' />
				</div>
				<div className='form-wrapper-field'>
					<h2> LOGIN</h2>
					<form>
						{message && message}
						<div>
							<label htmlFor='emailR'>Email</label>
							<input
								id='emailR'
								name='emailR'
								type='email'
								placeholder='enter email'
								onChange={e => setUserData({ ...userData, email: e.target.value })}
								required
							/>
						</div>
						<div>
							<label htmlFor='passwordR'>Password</label>
							<input
								id='passwordR'
								name='passwordR'
								type='text'
								placeholder='enter password'
								onChange={e => setUserData({ ...userData, password: e.target.value })}
								required
							/>
						</div>
						<div>
							<button type='submit' className={loading ? 'btn btn-disabled' : ' btn'}>
								{loading ? 'loading....' : 'LOGIN'}
							</button>
						</div>
						<div>
							<Link to='/register'>
								<p>create account</p>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
