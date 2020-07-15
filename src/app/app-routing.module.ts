import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './dashboard/events/events.component';
import { EventDetailsComponent } from './dashboard/events/event-details/event-details.component';
import { AddEventComponent } from './dashboard/events/add-event/add-event.component';
import { FormsComponent } from './dashboard/forms/forms.component';
import { AddFormComponent } from './dashboard/forms/add-form/add-form.component';
import { PreferenceComponent } from './dashboard/preference/preference.component';
import { AddPreferenceComponent } from './dashboard/preference/add-preference/add-preference.component';
import { GroupDiscussionsComponent } from './dashboard/group-discussions/group-discussions.component';
import { AddGroupDiscussionComponent } from './dashboard/group-discussions/add-group-discussion/add-group-discussion.component';
import { InterviewsComponent } from './dashboard/interviews/interviews.component';
import { AddInterviewComponent } from './dashboard/interviews/add-interview/add-interview.component';
import { LogsComponent } from './dashboard/logs/logs.component';

import { PostInputComponent } from './post-input/post-input.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './profile/Edit-profile/Edit-Profile.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  //home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  //signIn
  { path: 'signIn', component: SignInComponent },
  //profile
  {
    path: 'profile', component: ProfileComponent, children: [
      { path: '', component: PostInputComponent },
      {path: 'EditProfile' , component: EditProfileComponent  },
    ]
  },
  //dashboard
  { path: 'dashboard', component: DashboardComponent },
  // events
  { path: 'dashboard/events', component: EventsComponent },
  { path: 'dashboard/events/event-details', component: EventDetailsComponent },
  { path: 'dashboard/events/add', component: AddEventComponent },
  // forms
  { path: 'dashboard/forms', component: FormsComponent },
  { path: 'dashboard/forms/form-details', component: EventDetailsComponent },
  { path: 'dashboard/forms/add', component: AddFormComponent },
  // preferences
  { path: 'dashboard/preferences', component: PreferenceComponent },
  { path: 'dashboard/preferences/add', component: AddPreferenceComponent },
  // interviews
  { path: 'dashboard/interviews', component: InterviewsComponent },
  { path: 'dashboard/interviews/add', component: AddInterviewComponent },
  // interviews
  { path: 'dashboard/group_discussions', component: GroupDiscussionsComponent },
  { path: 'dashboard/group_discussions/add', component: AddGroupDiscussionComponent },
  //Logs
  { path: 'dashboard/logs', component: LogsComponent },
  { path: 'dashboard/logs/id', component: LogsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
