import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../interfaces/item';

@Component({
	selector: 'g[app-hair]',
	templateUrl: './hair.component.html',
	styleUrls: ['./hair.component.scss']
})
export class HairComponent implements OnInit {

	@Input() hair: Item;
	@Input() mode: 'front' | 'back' = 'front';

	constructor() {
	}

	ngOnInit() {
	}

}
