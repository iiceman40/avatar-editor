import {NgModule} from '@angular/core';
import {AvatarComponent} from './components/avatar/avatar.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';

@NgModule({
		declarations: [AvatarComponent],
		imports: [BrowserModule, FormsModule, ColorPickerModule],
		providers: [],
		exports: [AvatarComponent]
	}
)
export class AvatarEditorModule {
}
