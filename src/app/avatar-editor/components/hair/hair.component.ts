import {Component, Input, OnInit} from '@angular/core';
import {Avatar} from '../../interfaces/avatar';

@Component({
	selector: 'g[app-hair]',
	templateUrl: './hair.component.html',
	styleUrls: ['./hair.component.scss']
})
export class HairComponent implements OnInit {

	@Input() avatar: Avatar;

	constructor() {
	}

	ngOnInit() {
	}

}
