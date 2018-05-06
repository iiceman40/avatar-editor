export interface Item {
	id: string;
	type: string;
	availability: {
		gender: {
			male?: boolean,
			female?: boolean
		}
	};
}
