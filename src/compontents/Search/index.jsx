import { useState } from 'react';
import './SearchInput.scss';

function SearchInput({ searchValue, setSearchValue }) {
	// можно ли вообще стэйт создать тут и потом отправить searchValue в app.js?
	const onChangeSearchInput = (e) => {
		setSearchValue(e.target.value);
		// 30:10
		console.log(e.target.value);
	};

	const handleClearInput = () => {
		setSearchValue('');
	};

	return (
		<div className="search-block">
			<img src="/img/search.svg" alt="" />
			<input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
			{searchValue && (
				<img
					src="/img/close-btn.svg"
					alt="очистить"
					onClick={handleClearInput}
				/>
			)}
		</div>
	);
}
export default SearchInput;
