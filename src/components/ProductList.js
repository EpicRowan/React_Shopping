import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {availableShrimp} from '../data';

class ProductList extends Component {
	state= {
		products:[]
	}
	render () {
		return (
			<React.Fragment>
				<div className="py-5"> 
					<div className="container">
					<Title name="our" title="shrimp" />
					<div className="row">
					</div>
					</div>

				</div>
			</React.Fragment>
				// <Product />
			
			)
	}
} 

export default ProductList