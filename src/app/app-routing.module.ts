import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PostInputComponent } from './post-input/post-input.component';


const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent, children:[
    {path: '',component: PostInputComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
