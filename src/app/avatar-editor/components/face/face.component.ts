import {Component, Input, OnInit} from '@angular/core';
import {Eyes} from '../../interfaces/eyes';
import {Gender} from '../../interfaces/gender';

@Component({
	selector: 'g[app-face]',
	templateUrl: './face.component.html',
	styleUrls: ['./face.component.scss']
})
export class FaceComponent implements OnInit {

	@Input() eyes: Eyes;
	@Input() gender: Gender;

	constructor() {
	}

	ngOnInit() {
	}

}
