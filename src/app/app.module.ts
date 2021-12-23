import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent} from './components/post/post.component';
import {PostFormComponent} from './components/post-form/post-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HoverDirective} from './shared/directives/hover.directive';
import {AlertDirective} from './shared/directives/alert.directive';
import {FilterPipe} from './shared/pipes/filter.pipe';
import {RegisterFormComponent} from './components/register/register-form/register-form.component';
import {PostPageComponent} from './pages/post-page/post-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    HoverDirective,
    AlertDirective,
    FilterPipe,
    RegisterFormComponent,
    PostPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
