import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

class ProductList extends Component {
	render () {
		return (

			//Fragment lets you group a list of children without adding extra nodes to the DOM.
			<React.Fragment>
				<div className="py-5"> 
					<div className="container">
						<Title name="our" title="shrimp" />
							<div className="row">

							//Allows access to the product functions in context.js
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										return <Product key={product.id} product=
										{product} />;
									})
								}}
							</ProductConsumer>
							</div>
					</div>

				</div>
			</React.Fragment>
				// <Product />
			
			)
	}
} 

export default ProductList