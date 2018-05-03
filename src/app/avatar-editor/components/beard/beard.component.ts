import {Component, Input, OnInit} from '@angular/core';
import {Avatar} from '../../interfaces/avatar';

@Component({
	selector: 'g[app-beard]',
	templateUrl: './beard.component.html',
	styleUrls: ['./beard.component.scss']
})
export class BeardComponent implements OnInit {

	@Input() avatar: Avatar;

	constructor() {
	}

	ngOnInit() {
	}

}
