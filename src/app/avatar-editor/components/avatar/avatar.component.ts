import {Component, OnInit} from '@angular/core';
import {Avatar} from '../../interfaces/avatar';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

	avatar: Avatar = {
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

}
