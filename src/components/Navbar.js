import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components'


class Navbar extends Component {
	render () {
		return (
			<nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
				<Link to='/'>
					<img src={logo} alt="" className="navbar-brand"/>
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
						Products
						</Link>

					</li>
				</ul>
				<Link to='/cart' classname="ml-auto">
					<ButtonContainer>
						<span className="mr-2">
							<FontAwesome className="fas fa-cart-plus" />
						</span>
						My cart

					</ButtonContainer>
				</Link>
			</nav>
			)
	}
} 


const ButtonContainer = styled.button`
	text-transform:capitalize;
	font-size:1.4rem;
	background:transparent;
	border:0.05rem solid var(--lightBlue);
	color:var(--lightBlue);
	border-radius:0.5rem;
`;

export default Navbar
