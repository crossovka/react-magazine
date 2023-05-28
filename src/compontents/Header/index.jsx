import './Header.scss';

function Header(props) {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__header-inner">
					<div className="header-inner__header-left">
						{/* react сразу понимает, что статичные файлы в publick папке */}
						<img src="/img/logo.webp" alt="лого" />
						<div className="header-left__info">
							<h3> Magazine </h3>
							<p> Самый лучший магазин </p>
						</div>
					</div>

					<ul className="header-inner__header-right">
						<li onClick={props.onClickCart} >
							<img src="/img/cart.svg" alt="корзина" />
						</li>
						<li>
							<span> 12990 ₽ </span>
						</li>
						<li>
							<img
								width={40}
								height={40}
								src="/img/profile.svg"
								alt="профиль"
							/>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
export default Header;
