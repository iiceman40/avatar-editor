import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

	avatar = {
		gender: 'male',
		hair: {
			visible: true,
			color: '#bca73a'
		},
		beard: {
			visible: true,
			color: '#bca73a'
		},
		eyes: {
			color: '#11686c'
		}
	};

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
