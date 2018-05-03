import {Component, Input, OnInit} from '@angular/core';
import {Avatar} from '../../interfaces/avatar';

@Component({
	selector: 'g[app-cloths]',
	templateUrl: './cloths.component.html',
	styleUrls: ['./cloths.component.scss']
})
export class ClothsComponent implements OnInit {

	@Input() avatar: Avatar;

	constructor() {
	}

	ngOnInit() {
	}

}
