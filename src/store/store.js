import { observable, action } from 'mobx';

class Store {
	@observable items = [];

	@action addItem = item => {
		this.items.push(item);
	}

	@action removeItem = item => {
		const index = this.items.findIndex(element => element.id === item.id);
		this.items = [
			...this.items.slice(0, index),
			...this.items.slice(index + 1)
		]
	}

	@action printItems = () => {
		return this.items;
	}
}

const store = new Store();
export default store;