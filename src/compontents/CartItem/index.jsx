import React from 'react';
import './CartItem.scss';

function CartItem({ imageUrl, name, price, onRemove }) {
	return (
		<div className="items__cart-item">
			<div className="cart-item__img">
				<img src={imageUrl} alt="фото товара" />
			</div>
			<div className="cart-item__description">
				<p>{name}</p>
				<b>{price}</b>
			</div>
			<img
				className="cart-item__remove"
				src="/img/btn-remove.svg"
				alt="убрать"
				onClick={onRemove}
			/>
		</div>
	);
}

export default CartItem;
