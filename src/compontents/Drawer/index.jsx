import './Drawer.scss';

import CartEmpty from '../CartEpmty';
import CartItem from '../CartItem';

function Overlay({ items = [], onClose, onRemove }) {
	function renderCartEmpty() {
		if (items.length === 0) {
			return <CartEmpty onClose={() => onClose} />;
		}
		return null;
	}
	return (
		<div className="overlay">
			<div className="overlay__drawer">
				<div className="drawer__drawer-title">
					<h2>корзина</h2>
					<button className="drawer-title__close-btn">
						<img src="/img/close-btn.svg" alt="закрыть" onClick={onClose} />
					</button>
				</div>
				{renderCartEmpty()}

				{items.length > 0 && (
					<>
						<div className="drawer__items">
							{items.map((item) => (
								<CartItem
									key={item.id} // Добавлено уникальное свойство key
									imageUrl={item.imageUrl}
									name={item.name}
									price={item.price}
									onRemove={() => onRemove(item.id)}
								/>
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
					</>
				)}
			</div>
		</div>
	);
}
export default Overlay;
