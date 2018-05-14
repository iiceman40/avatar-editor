import {Component, Input, OnInit} from '@angular/core';
import {Beard} from '../../interfaces/beard';

@Component({
	selector: 'g[app-beard]',
	templateUrl: './beard.component.html',
	styleUrls: ['./beard.component.scss']
})
export class BeardComponent implements OnInit {

	@Input() beard: Beard;

	constructor() {
	}

	ngOnInit() {
	}

}
