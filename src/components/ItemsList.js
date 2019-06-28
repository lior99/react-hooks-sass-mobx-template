import React, { useState, useRef } from 'react';
import store from '../store/store';
import Item from './Item';
import { observer } from 'mobx-react-lite';

const ItemsList = observer(() => {
	const [itemValue, setItemValue] = useState('');
	const refToInput = useRef();

	const handleChange = event => {
		setItemValue(event.target.value);
	};

	const addItem = () => {
		const id = new Date().getTime();
		store.addItem({
			id,
			name: itemValue,
		});

		setItemValue('');
		refToInput.current.focus();
	};

	const submitValue = event => {
		if (event.keyCode === 13) {
			addItem();
		}
	};

	return (
		<>
			<div className="list">
				<div>Items: {store.items.length}</div>
				{store.items.map((item, index) => (
					<Item item={item} key={`item_${index}`} />
				))}
			</div>
			<div>
				<input type="text" onChange={handleChange} onKeyUp={submitValue} value={itemValue} ref={refToInput} />
				<button onClick={addItem}>Add Item</button>
			</div>
		</>
	);
});

export default ItemsList;
