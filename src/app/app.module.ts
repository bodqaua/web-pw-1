import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import {FormsModule} from "@angular/forms";
import { HoverDirective } from './shared/directives/hover.directive';
import { AlertDirective } from './shared/directives/alert.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    HoverDirective,
    AlertDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
