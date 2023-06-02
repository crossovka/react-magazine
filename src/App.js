import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Drawer from './compontents/Drawer';
import Shapka from './compontents/Header';
import Search from './compontents/Search';
import Card from './compontents/Card';

function App() {
	const [cartOpened, setCartOpened] = React.useState(false);
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');

	// если в useState хоть что-то обновляется, то функциональный компонент вызывается снова! useEffect фиксит
	// тобишь вызывается ток при первом рендере(пустой массив) ес стэйты обновляются, то снова не фетчится
	// React.useEffect(() => {
	// 	axios.get('https://6422645e86992901b2c711ab.mockapi.io/tems').then(res => {
	// 		setItems(res.data);
	// 	});
	// 	axios.get('https://6422645e86992901b2c711ab.mockapi.io/cart').then(res => {
	// 		setCartItems(res.data);
	// 	});
	// }, []);
	// React.useEffect(() => {
	// 	async function fetchData() {
	// 		try {
	// 			const [itemsRes, cartRes] = await Promise.all([
	// 				axios.get('https://6422645e86992901b2c711ab.mockapi.io/tems'),
	// 				axios.get('https://6422645e86992901b2c711ab.mockapi.io/cart'),
	// 			]);
	// 			setItems(itemsRes.data);
	// 			setCartItems(cartRes.data);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// 	fetchData();
	// }, []);
	React.useEffect(() => {
		axios.get('https://6422645e86992901b2c711ab.mockapi.io/tems').then(res => {
			setItems(res.data);
		});
		axios.get('https://6422645e86992901b2c711ab.mockapi.io/cart').then(res => {
			setCartItems(res.data);
		});
	}, []);

	const filteredItems = items.filter((item) =>
		item.name.toLowerCase().includes(searchValue.toLowerCase())
	);

	const onAddToCart = (obj) => {
		axios.post('https://6422645e86992901b2c711ab.mockapi.io/cart', obj);
		// к стаым данным добавляю новый объект, чтобы избежать мутации данных
		// setCartItems([...cartItems,  obj]);
		// созадй новый массив, возми предЪидущие данные, добавь объект верни новый массив и сохрани его в cartItems(эта функция не сохраняется там)
		setCartItems((prev) => [...prev, obj]);
	};

	const onRemoveCartItem = (id) => {
		axios.delete(`https://6422645e86992901b2c711ab.mockapi.io/cart/${id}`);
		// возьми пред данные в cartItems и отфльтруй тот id, который передал
		setCartItems((prev) => prev.filter((item) => item.id !== id));
		console.log(id);
	}

	function renderDrawer() {
		if (cartOpened) {
			return <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveCartItem} />;
		}
		return null;
	}

	function showSearching(searchValue) {
		if (searchValue) {
			return <h1>Поиск по запросу: "{searchValue}"</h1>;
		} else {
			return <h1>Все товары</h1>;
		}
	}

	return (
		<div className="wrapper">
			{renderDrawer()}
			{/* {cartOpened && <Drawer onClose={() => setCartOpened(false)} />} */}

			<Shapka onClickCart={() => setCartOpened(true)} />

			<main className="main">
				<div class="main__container">
					<div className="content">
						<div className="content__title-block">
							{showSearching(searchValue)}
							<Search
								searchValue={searchValue}
								setSearchValue={setSearchValue}
							/>
						</div>

						<div className="content__products">
							{/* пробегаюсь по массиву и преобразую каждый объект в реакт компонент */}
							{!searchValue || (searchValue && filteredItems.length > 0) ? (
								filteredItems.map((item) => (
									<Card
										key={item.id}
										name={item.name}
										price={item.price}
										imageUrl={item.imageUrl}
										onClickFavorite={() =>
											alert(item.name + ' Добавлены в избранное')
										}
										onPlus={(obj) => onAddToCart(obj)}
									/>
								))
							) : (
								<p>Нет товаров, удовлетворяющих запросу</p>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
