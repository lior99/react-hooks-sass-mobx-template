import React from 'react';
import store from '../store/store';

const Item = ({item}) => {
	const deleteItem = () => {
		store.removeItem(item);
	}

	return (
		<div className="item">
			<div>{item.name}</div>
			<div>
				<button onClick={deleteItem}>X</button>
			</div>
		</div>
	)
}

export default Item;