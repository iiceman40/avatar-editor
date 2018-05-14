import {Component, Input, OnInit} from '@angular/core';
import {Avatar} from '../../interfaces/avatar';
import {AvailableItems} from '../../interfaces/available-items';
import {Item} from '../../interfaces/item';

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

	@Input() avatar: Avatar;
	@Input() availableItems: AvailableItems;

	constructor() {
		// TODO watch gender changes to reset items
	}

	ngOnInit() {
	}

	choose(item: Item) {
		if (item.type === 'gender') {
			this.resetAvatarItemsByGender(item.id);
		}
		this.avatar[item.type].item = item;
	}

	resetAvatarItemsByGender(genderIdentifier: string) {
		for (const propertyName in this.avatar) {
			if (this.avatar.hasOwnProperty(propertyName) && propertyName !== 'gender') {
				if (this.avatar[propertyName]['item'].availability['gender'][genderIdentifier] !== true) {
					const newItem = this._findItemByGender(propertyName, genderIdentifier);
					console.log('new Item', newItem);
					if (!!newItem === false) {
						console.log('no item found', propertyName, genderIdentifier);
					}
					this.avatar[propertyName]['item'] = newItem;
				}
			}
		}
	}

	private _findItemByGender(propertyName: string, genderIdentifier: string) {
		return this.availableItems[propertyName].find(item => {
			return item.availability['gender'][genderIdentifier];
		});
	}
}
