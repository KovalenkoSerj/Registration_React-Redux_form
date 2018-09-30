import React, { Component } from 'react'

export default class HomePage extends Component {

	state = {
		currency: []
	}


	componentDidMount = () => {
		const endpoint = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
		fetch(endpoint)
			.then(response => response.json())
			.then(data => this.setState({ currency: data }))
			.catch((error) => alert(typeof error));
	}

	render() {
		const { currency } = this.state;
		return (
			<div className="home-page" >
				<marquee behavior="scroll" direction="left">
					{currency.map((item, index) => {
						return (
							<span key={index}> <b className='currency'>
								{item.base_ccy} - {item.ccy}</b>  <b>{(+item.buy).toFixed(2)} - {(+item.sale).toFixed(2)}</b>
							</span>		
						)
					})}
				</marquee>
				<div className="prices-header"><h2 >PRICING</h2></div>
				<section className="prices">
					<div className="price-tag">
						<span>Starter</span>
						<h3 className="dollar">FREE</h3>
						<span>Free Service</span>
						<span>Multiply Accounts</span>
						<span>Managment No</span>
						<div className="buy">
							<span>TRY</span>
						</div>
					</div>
					<div className="price-tag">
						<span className='best'>BEST</span><span> Business</span>
						<h3 className="dollar">$97</h3>
						<span>Free Service</span>
						<span>Multiply Accounts</span>
						<span>Managment No</span>
						<span>Unlimited Data</span>
						<div className="buy">
							<span>SIGN UP</span>
						</div>
					</div>
					<div className="price-tag">
						<span>Professional</span>
						<h3 className="dollar">$297</h3>
						<span>Free Service</span>
						<span>Multiply Accounts</span>
						<span>Managment No</span>
						<span>Unlimited Data</span>
						<span>Whatever you need</span>
						<div className="buy">
							<span >SIGN UP</span>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
