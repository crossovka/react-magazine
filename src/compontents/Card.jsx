function Card() {
	return (
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
					<img
						width={12}
						height={12}
						src="/img/btn-plus.svg"
						alt="добавить товар"
					/>
				</button>
			</div>
		</div>
	);
}
export default Card;
