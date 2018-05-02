import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AvatarEditorModule} from './avatar-editor/avatar-editor.module';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AvatarEditorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
