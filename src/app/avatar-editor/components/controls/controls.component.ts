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
	}

	ngOnInit() {
	}

	choose(item: Item) {
		this.avatar[item.type].item = item;
	}

}
