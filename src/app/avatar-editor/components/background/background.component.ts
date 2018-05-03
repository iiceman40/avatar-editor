import {Component, Input, OnInit} from '@angular/core';
import {Avatar} from '../../interfaces/avatar';

@Component({
	selector: 'g[app-background]',
	templateUrl: './background.component.html',
	styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

	@Input() avatar: Avatar;

	constructor() {
	}

	ngOnInit() {
	}

}
