import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostPageComponent} from "./pages/post-page/post-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";

const routes: Routes = [
  {path: "posts", component: PostPageComponent},
  {path: "register", component: RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
