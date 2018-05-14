import {Component, Input, OnInit} from '@angular/core';
import {Gender} from '../../interfaces/gender';

@Component({
	selector: 'g[app-head]',
	templateUrl: './head.component.html',
	styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

	@Input() gender: Gender;

	constructor() {
	}

	ngOnInit() {
	}

}
