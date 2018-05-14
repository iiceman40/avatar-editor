import {Hair} from './hair';
import {Beard} from './beard';
import {Gender} from './gender';
import {Eyes} from './eyes';

export interface Avatar {
	gender: Gender;
	hair: Hair;
	beard: Beard;
	eyes: Eyes;
}
