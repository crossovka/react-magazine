import Drawer from './compontents/Drawer';
import Shapka from './compontents/Header';
import Card from './compontents/Card';

const arr = [
	{
		name: 'Микраховские говнодавы',
		price: 1999,
		imageUrl: "/img/products/2.webp",
	},
	{
		name: 'говнодавы',
		price: 99,
		imageUrl: "/img/products/3.webp",
	},
	{
		name: 'Микраховские',
		price: 19,
		imageUrl: "/img/products/4.webp",
	},
];

function App() {
	return (
		<div className="wrapper">
			<Drawer />

			<Shapka />

			<div className="content">
				<div className="content__container">
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
									<img
										width={12}
										height={12}
										src="/img/btn-cheked.svg"
										alt="добавить товар"
									/>
								</button>
							</div>
						</div>

						{/* пробегаюсь по массиву и преобразую каждый объект в реакт компонент */}
						{arr.map((obj) => 
							<Card 
							name= {obj.name} 
							price= {obj.price} 
							imageUrl= {obj.imageUrl} 
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
