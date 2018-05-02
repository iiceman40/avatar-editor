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
		eyes: {
			color: '#11686c'
		}
	};

	constructor() {
	}

	ngOnInit() {
	}

	toggleHair() {
		this.avatar.hair.visible = !this.avatar.hair.visible;
	}
}
