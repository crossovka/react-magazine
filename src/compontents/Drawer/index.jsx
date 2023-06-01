import './Drawer.scss';

function Overlay( {onClose, items=[] } ) {
	return (
		<div className="overlay">
			<div className="overlay__drawer">
				<div className="drawer__drawer-title">
					<h2>корзина</h2>
					<button className="drawer-title__close-btn">
						<img src="/img/close-btn.svg" alt="закрыть" onClick={onClose}/>
					</button>
				</div>
				<div className="drawer__items">
				{items.map((obj) => (
					<div className="items__cart-item">
						<div className="cart-item__img">
							{/* style={{backgroundImage: `url(${obj.imageUrl})`}} */}
							<img src={obj.imageUrl} alt="фото товара" />
						</div>
						<div className="cart-item__description">
							<p>{obj.name}</p>
							<b>{obj.price}</b>
						</div>
						<img
							className="cart-item__remove"
							src="/img/btn-remove.svg"
							alt="убрать"
						/>
					</div>
				))}
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
