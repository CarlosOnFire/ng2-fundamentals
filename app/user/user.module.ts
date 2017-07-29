import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [
      {
      provide: 'canDeactivateEditProfile',
      useValue: checkDirtyStateEditProfile
      }
    ]
})

export class UserModule {

 }

function checkDirtyStateEditProfile(component:ProfileComponent){
  if(component.isDirty)
    return window.confirm('You have not saved your changes in your profile, do you really want to cancel?')
  return true
}