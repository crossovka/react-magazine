import { useState } from 'react';

import './Card.scss';

// import styles from './Card.module.scss'
// console.log(styles);
{/* <div className={styles.products__card}></div> */}
// CSS MODULES ПОДХОД ГУГЛИ ЕС ПЕРЕХОЧЕШЬ ЮЗАТЬ BEM

function Card( { imageUrl, name, price, onClickFavorite, onPlus  } ) {
	const [isAdded, setIsAdded] = useState(false);


	const addButtonImage = '/img/btn-plus.svg';
	const checkedButtonImage = '/img/btn-cheked.svg';
	
	const getButtonImage = () => {
		return isAdded ? checkedButtonImage : addButtonImage;
	};

	const onClickPlus = () => {
		// onPlus();
		// булево значение инвертируется
		setIsAdded(!isAdded);
		// alert(props.name + ' Добавлены в избранное')
	}

	return (
		<div className="products__card">
			<div className="card__favorite" onClick={onClickFavorite}>
				<img src="/img/unliked.svg" alt="лайкнуть товар" />
			</div>
			<div className="card__img">
				<img src={imageUrl} alt="" />
			</div>
			<p> {name} </p>

			<div className="card__bottom">
				<div className="bottom__price">
					<span> Цена: </span>
					<b> {price} </b>
				</div>
				<button className="add-product-btn" onClick={onClickPlus}>
					<img src={getButtonImage()} alt="добавить товар"/>
				</button>
			</div>
		</div>
	);
}

export default Card;
