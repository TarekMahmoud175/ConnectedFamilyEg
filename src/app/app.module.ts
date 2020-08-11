import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { profileControlsComponent } from './profile/profile-controls/profile-controls.component';
import { UserPicComponent } from './profile/user-pic/user-pic.component';

// import { UserEventsComponent } from './profile/user-events/user-events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { EventsComponent } from './dashboard/events/events.component';
import { DashboardMainLayoutComponent } from './dashboard-main-layout/dashboard-main-layout.component';
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
import { CrewComponent } from './crew/crew.component';
import { CommiteesComponent } from './commitees/commitees.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { PostInputComponent } from './post-input/post-input.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from "@angular/material/core";

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { UsersComponent } from './dashboard/users/users.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { DirectivesModule } from './directives/directives.module';
import {MatTabsModule} from '@angular/material/tabs';
import { UserDialogComponent } from './dashboard/users/user-dialog/user-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    UserPicComponent,
    // UserEventsComponent,
    DashboardComponent,
    SideNavComponent,
    EventsComponent,
    DashboardMainLayoutComponent,
    EventDetailsComponent,
    AddEventComponent,
    FormsComponent,
    AddFormComponent,
    PreferenceComponent,
    AddPreferenceComponent,
    InterviewsComponent,
    AddInterviewComponent,
    GroupDiscussionsComponent,
    AddGroupDiscussionComponent,
    LogsComponent,
    CrewComponent,
    CommiteesComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    profileControlsComponent,
    PostInputComponent,
    HomeComponent,
    EditProfileComponent,
    SignInComponent,
    UserInfoComponent,
    SignUpComponent,
    UsersComponent,
    UserDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgxChartsModule,
    DirectivesModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
