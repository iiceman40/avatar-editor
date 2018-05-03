import {NgModule} from '@angular/core';
import {AvatarComponent} from './components/avatar/avatar.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import {HeadComponent} from './components/head/head.component';
import {ClothsComponent} from './components/cloths/cloths.component';
import {FaceComponent} from './components/face/face.component';
import {HairComponent} from './components/hair/hair.component';
import {BeardComponent} from './components/beard/beard.component';
import {ControlsComponent} from './components/controls/controls.component';
import {BackgroundComponent} from './components/background/background.component';

@NgModule({
		declarations: [
			AvatarComponent,
			HeadComponent,
			ClothsComponent,
			FaceComponent,
			HairComponent,
			BeardComponent,
			ControlsComponent,
			BackgroundComponent
		],
		imports: [
			BrowserModule,
			FormsModule,
			ColorPickerModule
		],
		providers: [],
		exports: [AvatarComponent]
	}
)
export class AvatarEditorModule {
}
