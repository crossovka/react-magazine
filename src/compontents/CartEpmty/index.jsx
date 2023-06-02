import './CartEmpty.scss';

function CartEmpty({onClose}) {
	return (
		<div className="cart-empty">
			<img src="/img/empty-cart.png" alt="Empty cart" />
			<h2>Корзина пустая</h2>
			<p>добавтье хотя бы один товар, чтобы сделать заказ.</p>
			<button onClick={onClose()} className="button">
				Вернуться назад
				<img src="/img/arrow.svg" alt="arrow" />
			</button>
		</div>
	);
}

export default CartEmpty;
