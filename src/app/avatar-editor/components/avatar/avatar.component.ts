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
			{id: 'male', type: 'gender', availability: {gender: {female: true, male: true}}},
			{id: 'female', type: 'gender', availability: {gender: {female: true, male: true}}}
		],
		hair: [
			{id: 'none', type: 'hair', availability: {gender: {female: true, male: true}}},
			{id: 'formal', type: 'hair', availability: {gender: {male: true}}},
			{id: 'styled', type: 'hair', availability: {gender: {male: true}}},
			{id: 'curled', type: 'hair', availability: {gender: {male: true}}},
			{id: 'wave', type: 'hair', availability: {gender: {female: true, male: true}}}
		],
		beard: [
			{id: 'none', type: 'beard', availability: {gender: {male: true}}},
			{id: 'light', type: 'beard', availability: {gender: {male: true}}}
		],
		eyes: []
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
