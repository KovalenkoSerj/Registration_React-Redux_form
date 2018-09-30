import React, { Component } from 'react';

export default class Currency extends Component {
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
		console.log(this.state.currency)
		return (
			<table className='col-lg-offset-9 col-md-offset-7 table table-hover'>
				<thead>
					<tr>
						<td> CURRENCY </td>
						<td> BUY </td>
						<td> SALE </td>
					</tr>
				</thead>
				{currency.map((item, index) => {
					return (
						<tbody key={index}>
							<tr>
								<th>{item.ccy} - {item.base_ccy}</th>
								<td> {item.buy}</td>
								<td> {item.sale} </td>
							</tr>
						</tbody>
					)
				})}
			</table>
		)
	}
}
