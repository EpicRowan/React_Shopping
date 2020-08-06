import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import  {ProductConsumer} from '../context';
import FontAwesome from 'react-fontawesome';


export default class Product extends Component {
	render () {
		const {id, title, img, price, inCart} = this.props.product;
		return (
			<ProductWrapper className="col-9 mx-auto col-med-6 col-lg-3 my-3">

				<div className="card">
				<div className="img-container p-5" onClick={() => console.log("Click")

				}>
					<Link to="/details">
						<img src={img} alt="product" className="card-img-top">
						</img>
					</Link>
					
					<button 
						className="cart-btn" 
						disabled={inCart ? true : false}
						onClick={() => {
							console.log("added");
					     }}
				     >
				     {inCart ? (
				     	<p className="text-capitalize mb-0" disabled>
				     	{""}
				     	in inCart
				     	</p>
				     	) : (<FontAwesome className="fas fa-cart-plus" />
				     	)}
					</button>
				</div>
				</div>
			</ProductWrapper>
			)
	}

} 


const ProductWrapper = styled.div`

`