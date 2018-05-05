import {Component, OnInit} from '@angular/core';
import {Avatar} from '../../interfaces/avatar';
import {AvailableItems} from '../../interfaces/available-items';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

	availableItems: AvailableItems = {
		gender: [
			{id: 'male', type: 'gender', gender: 'male'},
			{id: 'female', type: 'gender', gender: 'female'}
		],
		hair: [
			{id: 'none', type: 'hair', gender: 'male'},
			{id: 'short', type: 'hair', gender: 'male'},
			{id: 'curled', type: 'hair', gender: 'male'}
		],
		beard: [
			{id: 'none', type: 'beard', gender: 'male'},
			{id: 'light', type: 'beard', gender: 'male'}
		]
	};

	avatar: Avatar = {
		gender: {
			item: this.availableItems.gender[0] || null
		},
		hair: {
			visible: true,
			item: this.availableItems.hair[0] || null,
			color: '#bca73a'
		},
		beard: {
			visible: true,
			item: this.availableItems.beard[0] || null,
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
