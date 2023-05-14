import './Card.scss';

// import styles from './Card.module.scss'
// console.log(styles);
{/* <div className={styles.products__card}></div> */}
// CSS MODULES ПОДХОД ГУГЛИ ЕС ПЕРЕХОЧЕШЬ ЮЗАТЬ BEM

function Card(props) {
	return (
		<div className="products__card">
			<div className="card__favorite" onClick={props.onClickFavorite}>
				<img src="/img/unliked.svg" alt="лайкнуть товар" />
			</div>
			<div className="card__img">
				<img src={props.imageUrl} alt="" />
			</div>
			<p> {props.name} </p>

			<div className="card__bottom">
				<div className="bottom__price">
					<span> Цена: </span>
					<b> {props.price} </b>
				</div>
				<button className="add-product-btn" onClick={props.onClickPlus}>
					<img src="/img/btn-plus.svg" alt="добавить товар"/>
				</button>
			</div>
		</div>
	);
}

export default Card;
