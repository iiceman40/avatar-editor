import {Component, Input, OnInit} from '@angular/core';
import {Avatar} from '../../interfaces/avatar';

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

	@Input() avatar: Avatar;

	constructor() {
	}

	ngOnInit() {
	}

	toggle(type) {
		this.avatar[type].visible = !this.avatar[type].visible;
	}

	toggleGender() {
		this.avatar.gender = this.avatar.gender === 'male' ? 'female' : 'male';
	}
}
