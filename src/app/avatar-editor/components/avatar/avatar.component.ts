import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

	avatar = {
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
}
