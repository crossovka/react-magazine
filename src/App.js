import React from 'react';

import Drawer from './compontents/Drawer';
import Shapka from './compontents/Header';
import Card from './compontents/Card';

// const [isLoading, setIsLoading] = React.useState(true);
// 	const [items, setItems] = React.useState([]);

// 	const fetchPosts = () => {
// 		setIsLoading(true);
// 		axios
// 			.get('https://6422645e86992901b2c711ab.mockapi.io/post')
// 			// в момент,когда получу ответ от бэкэнда с помощью деструктуризации вытащить data
// 			// и поместить его в set items
// 			.then(({ data }) => {
// 				setItems(data);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 				// Сверху импортировал Alert
// 				Alert.alert('ААА ОШИБКА', 'Не удалось получить статьи');
// 				// Alert.conform()
// 				// alert('ошибка при получении статей');
// 			})
// 			.finally(() => {
// 				setIsLoading(false);
// 			});
// 	};

// 	// говорю,что во время первого рендера мне необходимо отправить запрос на бэкэнд.позже я все это вынес в отдельную функцию сверху
// 	React.useEffect(fetchPosts, []);

// 	// Пустой массив обозначет, что  что эффект будет запускаться только один раз, при монтировании компонента. Без этого массива,
// 	// useEffect будет вызываться при каждом рендере компонента, что может вызвать проблемы с производительностью.

// 	// елси идет загрузка,то необходимо использовать View с ActivityIndicator
// 	if (isLoading) {
// 		return <Loading />;
// 	}

function App() {
	const [cartOpened, setCartOpened] = React.useState(false);
	const [items, setItems] = React.useState([]);
	
	// если в useState хоть что-то обновляется, то функциональный компонент вызывается снова! useEffect фиксит
	// тобишь вызывается ток при первом рендере(пустой массив) ес стэйты обновляются, то снова не фетчится
	React.useEffect(() => {
		fetch(' https://6422645e86992901b2c711ab.mockapi.io/react-magazine')
		.then((res) => {
			return res.json();
		})
		.then((json) => {
			setItems(json);
		})
	}, []);

	function renderDrawer() {
		if (cartOpened) {
			return <Drawer onClose={() => setCartOpened(false)} />;
		}
		return null;
	}

	return (
		<div className="wrapper">
			{renderDrawer()}
			{/* {cartOpened && <Drawer onClose={() => setCartOpened(false)} />} */}

			<Shapka onClickCart={() => setCartOpened(true)} />

			<main className="main">
				<div class="main__container">
					<div className="content">
						<div className="content__title-block">
							<h1> Все товары </h1>
							<div className="title-block__search-block">
								<img src="/img/search.svg" alt="" />
								<input type="text" placeholder="Поиск..." />
							</div>
						</div>

						<div className="content__products">
							{/* пробегаюсь по массиву и преобразую каждый объект в реакт компонент */}
							{items.map((obj) => (
								<Card
									name={obj.name}
									price={obj.price}
									imageUrl={obj.imageUrl}
									onClickFavorite={() =>
										alert(obj.name + ' Добавлены в избранное')
									}
								/>
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
