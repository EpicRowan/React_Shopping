import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components'
import {ButtonContainer} from './Button';


class Navbar extends Component {
	render () {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link to='/'>
					<img src={logo} alt="" className="navbar-brand"/>
				</Link>
			
				<Link to='/cart' className="ml-auto">
					<ButtonContainer>
						<span className="mr-2">
							<FontAwesome className="fas fa-cart-plus" />
						</span>
						My cart

					</ButtonContainer>
				</Link>
			</NavWrapper>
			)
	}
} 

//Using styled-components

const NavWrapper = styled.nav`
	background:var(--mainBlue);
	.nav-link {
		color:var(--mainWhite) !important;
		font-size:1.3rem;
		text-transform: capitalize;
	}
`


export default Navbar
