import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

export const userRoutes = [

    {path: 'profile', component: ProfileComponent, canDeactivate: ['canDeactivateEditProfile']},
    {path: 'login', component: LoginComponent}
    
]