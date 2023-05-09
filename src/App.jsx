function App() {
	return (
		<div className="wrapper">
			<div className="overlay">
				<div className="overlay__drawer">
					<div className="drawer__drawer-title">
						<h2>корзина</h2>
						<button className="drawer-title__close-btn">
								<img src="/img/close-btn.svg" alt="закрыть" />
						</button>
					</div>
					<div className="drawer__items">
						<div className="items__cart-item">
							<div className="cart-item__img">
								<img src="/img/products/1.webp" alt="фото товара" />
							</div>
							<div className="cart-item__description">
								<p>Мега крутая микраховская футболка</p>
								<b>12 990</b>
							</div>
							<img className="cart-item__remove" src="/img/btn-remove.svg" alt="убрать" />
						</div>
						<div className="items__cart-item">
							<div className="cart-item__img">
								<img src="/img/products/2.webp" alt="фото товара" />
							</div>
							<div className="cart-item__description">
								<p>Мега крутая микраховская футболка</p>
								<b>12 990</b>
							</div>
							<img className="cart-item__remove" src="/img/btn-remove.svg" alt="убрать" />
						</div>
						<div className="items__cart-item">
							<div className="cart-item__img">
								<img src="/img/products/3.webp" alt="фото товара" />
							</div>
							<div className="cart-item__description">
								<p>Мега крутая микраховская футболка</p>
								<b>12 990</b>
							</div>
							<img className="cart-item__remove" src="/img/btn-remove.svg" alt="убрать" />
						</div>
					</div>
					<div className="drawer__total">
						<ul>
							<li>
								<span>Итого:</span>
								<div className="total__dash"></div>
								<b>12 990 ₽</b>
							</li>
							<li>
								<span>Доставка:</span>
								<div className="total__dash"></div>
								<b>900 ₽</b>
							</li>
						</ul>
						<button className="button">
							Оформить заказ
							<img src="/img/arrow.svg" alt="arrow" />
						</button>
					</div>
				</div>	
			</div>

			<header className="header">
				<div className="header__container">
					<div className="header__header-inner">	
						<div className="header-inner__header-left">
							{/* react сразу понимает, что статичные файлы в publick папке */}
							<img src="/img/logo.webp" alt="лого" />
							<div className="header-left__info">
								<h3> Magazine </h3>
								<p> Самый лучший магазин </p>
							</div>
						</div>

						<ul className="header-inner__header-right">
							<li> 
								<img width={40} height={40} src="/img/cart.svg" alt="корзина" />
							</li>
							<li>
								<span> 12990 ₽ </span> 
							</li>
							<li> 
								<img width={40} height={40} src="/img/profile.svg" alt="профиль" />
							</li>
						</ul>
					</div>
				</div>
			</header>

			<div className="content">
				<div className="content__title-block">
					<h1> Все товары </h1>
					<div className="title-block__search-block">
						<img src="/img/search.svg" alt="" />
						<input type="text" placeholder="Поиск..." />
					</div>
				</div>
				
				<div className="content__products">

					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/liked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/1.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-cheked.svg" alt="добавить товар" />
							</button>
						</div>
					</div>

					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/2.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>
					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/3.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>

					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/4.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>
					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/liked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/1.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-cheked.svg" alt="добавить товар" />
							</button>
						</div>
					</div>

					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/2.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>
					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/3.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>

					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/4.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>
					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/liked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/1.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-cheked.svg" alt="добавить товар" />
							</button>
						</div>
					</div>

					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/2.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>
					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/3.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>

					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/4.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>
					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/liked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/1.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-cheked.svg" alt="добавить товар" />
							</button>
						</div>
					</div>

					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/2.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>
					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/3.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>

					<div className="products__card">
						<div className="card__favorite">
							<img src="/img/unliked.svg" alt="лайкнуть товар" />
						</div>
						<div className="card__img">
							<img src="/img/products/4.webp" alt="" />
						</div>
						<p> Мега крутая микраховская футболка </p>
						
						<div className="card__bottom">
							<div className="bottom__price">
								<span> Цена: </span>
								<b> 12990 ₽ </b>
							</div>
							<button className="add-product-btn">
								<img width={12} height={12} src="/img/btn-plus.svg" alt="добавить товар" />
							</button>
						</div>
					</div>

				</div>
				
			</div>

		</div>
	);
}

export default App;
