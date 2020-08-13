import React, { Component } from 'react';
import {availableShrimp, detailProduct} from './data';

/* Context provides a way to pass data through the component tree without 
having to pass props down manually at every level */
const ProductContext = React.createContext();

//This is divided into two parts: Provider and Consumer

//Provider will encapsule App and Route on index.js
//ProductConsumer will cover Details.js
export default class ProductProvider extends Component {
	state ={
		products:[],
		detailProduct:detailProduct,
		cart: [],
		cartSubTotal:0,
		cartTax:0,
		cartTotal:0,
	};

	//This lifecycle method only runs once
	componentDidMount() {
		this.setProducts();
	}


	setProducts = () => {
		let tempProducts = [];
		// The forEach() method executes a provided function once for each array element.
		availableShrimp.forEach(item => {
			// The spread syntax allows an expression to be expanded in places where multiple arguments are expected.
			const singleItem = {...item};
			tempProducts = [...tempProducts, singleItem];

		});
		this.setState(() => {
			return { products:tempProducts };
		});
	};

    //Function to retrieve item by id
	getItem = (id) => {
		const product = this.state.products.find(item => item.id === id);
		return product;
	};


	handleDetail = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return {detailProduct:product}
		});
	};

	addToCart = (id) => {
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index]
		product.inCart = true;
		product.count =1;
		const price = product.price;
		product.total = price;

		this.setState(
			() => {
			return {products:tempProducts,cart:[...this.state.cart,
				product] };
		},
		() => {
			this.addTotals();
		});

	};

	increment = (id) => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find(item=>item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count + 1;
		product.total = product.count * product.price;

		this.setState(
			() => {
			return{cart:[...tempCart]};
		 },
		 ()=> {
		 	this.addTotals()
		 }
		);
	};

	decrement = (id) => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find(item=>item.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count - 1;

		if(product.count === 0) {
			this.removeItem(id)
		}
		else {
			product.total = product.count * product.price;
			this.setState(
			() => {
			return{cart:[...tempCart]};
		 },
		 ()=> {
		 	this.addTotals()
		 });

		}
	};

	removeItem= (id) => {
		let tempProducts = [...this.state.products];
		let tempCart = [...this.state.cart];

		tempCart = tempCart.filter(item => item.id !== id);
		const index = tempProducts.indexOf(this.getItem(id));
		let removedProduct = tempProducts[index];
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;

		this.setState(() => {
			return {
				cart: [...tempCart],
				products:[...tempProducts]
			};
		}, 
		() => {
			this.addTotals();
		});

	};

	clearCart = () => {
		this.setState(() => {
			return {cart:[] };
		}, ()=> {
			this.setProducts();
			this.addTotals();
		});
		
	};

	addTotals = () => {
		let subTotal = 0;
		this.state.cart.map(item =>(subTotal) += item.total);
		const tempTax = subTotal * 0.08;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subTotal + tax;
		this.setState(() => {
			return {
				cartSubtotal:subTotal,
				cartTax:tax,
				cartTotal:total
			}
		})
	}


	render() {
		return (
			<ProductContext.Provider 
			  value={{
				...this.state,
				handleDetail:this.handleDetail,
				addToCart:this.addToCart,
				increment:this.increment,
				decrement:this.decrement,
				removeItem:this.removeItem,
				clearCart:this.clearCart
			}}
			>

				{this.props.children}
			</ProductContext.Provider>

			);
	}
	
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
