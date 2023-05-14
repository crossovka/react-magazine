import './Drawer.scss';

function Overlay() {
	return (
		<div className="overlay" style={{ display: 'none' }}>
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
						<img
							className="cart-item__remove"
							src="/img/btn-remove.svg"
							alt="убрать"
						/>
					</div>
					<div className="items__cart-item">
						<div className="cart-item__img">
							<img src="/img/products/2.webp" alt="фото товара" />
						</div>
						<div className="cart-item__description">
							<p>Мега крутая микраховская футболка</p>
							<b>12 990</b>
						</div>
						<img
							className="cart-item__remove"
							src="/img/btn-remove.svg"
							alt="убрать"
						/>
					</div>
					<div className="items__cart-item">
						<div className="cart-item__img">
							<img src="/img/products/3.webp" alt="фото товара" />
						</div>
						<div className="cart-item__description">
							<p>Мега крутая микраховская футболка</p>
							<b>12 990</b>
						</div>
						<img
							className="cart-item__remove"
							src="/img/btn-remove.svg"
							alt="убрать"
						/>
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
	);
}
export default Overlay;
