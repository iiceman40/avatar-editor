import {Item} from './item';

export interface Avatar {
	gender: {
		item: Item;
	};
	hair: {
		visible: boolean;
		item: Item;
		color: string
	};
	beard: {
		visible: boolean;
		item: Item;
		color: string
	};
	eyes: {
		color: string
	};
}
