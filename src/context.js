import React, { Component } from 'react'
import {availableShrimp, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider
//Consumer


export default class ProductProvider extends Component {
	state ={
		products:[],
		detailProduct:detailProduct
	};
	componentDidMount() {
		this.setProducts();
	}
	setProducts = () => {
		let tempProducts = [];
		availableShrimp.forEach(item => {
			const singleItem = {...item};
			tempProducts = [...tempProducts, singleItem];

		});
		this.setState(() => {
			return {products:tempProducts};
		});
	};

	
	handleDetail = () => {
		console.log('hello rom detail');
	};
	addToCart = (id) => {
		console.log('hello from cart');
	};


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