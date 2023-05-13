function Card(pops) {
	return (
		<div className="products__card">
			<div className="card__favorite">
				<img src="/img/unliked.svg" alt="лайкнуть товар" />
			</div>
			<div className="card__img">
				<img src={pops.imageUrl} alt="" />
			</div>
			<p> {pops.name} </p>

			<div className="card__bottom">
				<div className="bottom__price">
					<span> Цена: </span>
					<b> {pops.price} </b>
				</div>
				<button className="add-product-btn">
					<img src="/img/btn-plus.svg"	alt="добавить товар"/>
				</button>
			</div>
		</div>
	);
}
export default Card;
