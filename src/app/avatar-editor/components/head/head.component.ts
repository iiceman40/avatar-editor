import {Component, Input, OnInit} from '@angular/core';
import {Avatar} from '../../interfaces/avatar';

@Component({
	selector: 'g[app-head]',
	templateUrl: './head.component.html',
	styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

	@Input() avatar: Avatar;

	constructor() {
	}

	ngOnInit() {
	}

}
