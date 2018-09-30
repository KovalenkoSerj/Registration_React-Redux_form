import React, { Component } from 'react';
import { connect } from 'react-redux';
import { user_register_request } from '../redux/actions/user.actions';
import logo from '../../img/logo.png';
import heart from '../../img/heart.png'
import compass from '../../img/compass.png'
import instruments from '../../img/instruments.png'
import lamp from '../../img/lamp.png'

const mapStateToProps = state => {
	return {
		register: state.registration,
		error: state.error
	}
}

class RegistrationPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			firstName: '',
			password: '',
			submitted: false
		}

	}

	handleChange = (name, value) => this.setState({ [name]: value });

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ submitted: true })
		const { dispatch } = this.props, { email, firstName, password } = this.state;
		if (email && firstName && password) {
			dispatch(user_register_request({ email, firstName, password }))
		}

	}
	render() {
		console.log(this.props.register)
		const { submitted, email, firstName, password } = this.state;
		return (
			<div className=''>
				<div className='header'>
					<img className='logo' src={logo} alt="logo" />
					<ul className="menu">
						<li>home</li>
						<li>about</li>
						<li>services</li>
						<li>gallery</li>
						<li>contacts</li>
					</ul>
				</div>
				<div className="travel">
					<h1>TRAVEL IS <span> BEAUTIFUL</span>
					</h1>
					<p className='quote'>“Broad, wholesome, charitable views of men and things <br />
						cannot be acquired by vegetating <br />
						in one little corner of the earth all of one's lifetime.” – Mark Twain </p>
					<form className='register-form' name='form' onSubmit={this.handleSubmit}>
						<h2 className='registration-header'>Registration Form</h2>
						<div className={submitted && !email ? 'has-error' : ''}>
							<label htmlFor='email'>Email</label>
							<input type="email"
								value={email}
								onChange={event => this.handleChange('email', event.target.value)}
								name='email'
								required
							/>
							{submitted && email && <div className='help-block'>E-mail is required</div>}
						</div>
						<div className={submitted && !firstName ? 'has-error' : ''}>
							<label htmlFor='firstName'>Name</label>
							<input type="text"
								value={firstName}
								onChange={event => this.handleChange('firstName', event.target.value)}
								name='firstName'
								required
							/>
							{submitted && firstName && <div className='help-block'>Name is required</div>}
						</div>
						<div className={submitted && !password ? 'has-error' : ''}>
							<label htmlFor='password'>Password</label>
							<input type="password"
								value={password}
								onChange={event => this.handleChange('password', event.target.value)}
								name='password'
								required
							/>
							{submitted && !password && <div className='help-block'>Password is required</div>}
						</div>
						<div className=''>
							<button className='submit'>Sign Up</button>
						</div>
					</form>
				</div>
				<div>
					<h2>OUR
            <span> SERVICES</span>
					</h2>
					<div className="services">
						<figure>
							<img src={heart} alt="firstimg"  />
							<figcaption>Making your trip beautiful<br />and easier</figcaption>
						</figure>
						<figure>
							<img src={instruments} alt="secondimg"  />
							<figcaption> Tools to help you <br />secceed tommorow</figcaption>
						</figure>
						<figure>
							<img src={lamp} alt="thirdimg" />
							<figcaption>Ideas that will blow <br />you out the blue</figcaption>
						</figure>
						<figure>
							<img src={compass} alt="fourthimg" />
							<figcaption> Navigate your path<br /> to beautiful world</figcaption>
						</figure>
					</div>
					<div className="footer">
						<span className="our-story">our story</span>
					</div>
				</div>
			</div>
		)
	}
}


export default connect(mapStateToProps, null)(RegistrationPage);
