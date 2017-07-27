import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent
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