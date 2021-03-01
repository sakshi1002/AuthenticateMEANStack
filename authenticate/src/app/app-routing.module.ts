import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const appRoutes:Routes =
[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main',component:RegisterComponent},
    {path:'home',component:HomepageComponent},
    {path: 'login',component:LoginComponent},
    {path: 'register',component:RegisterComponent}
];





@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{


}
