import React, { Component } from 'react'
import {availableShrimp, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider
//Consumer


export default class ProductProvider extends Component {
	state ={
		products:availableShrimp,
		detailProduct:detailProduct
	}
	handleDetail = () => {
		console.log('hello rom detail');
	}
	addToCart = () => {
		console.lof('hello from cart');
	}
	render() {
		return (
			<ProductContext.Provider value={{
				...this.state,
				handleDetail:this.handleDetail,
				addToCart:this.addToCart,
			}}>
				{this.props.children}
			</ProductContext.Provider>

			)
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};