import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { ErrorComponent } from './error/error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


const routes: Routes = [
  { path:'forgot',component: ForgotComponent},
  {path:'product',component: ProductsComponent},
  {path:'error',component: ErrorComponent},
  {path:'login',component: LoginComponent},
  {path: 'home',component: HomeComponent, children:[
    { path:'aboutus',component:AboutusComponent},
    { path:'contactus',component:ContactusComponent}
  ]},
  {path:'reset',component:ResetpasswordComponent},
  {path: 'register',component: RegisterComponent},
  {path:'',redirectTo:'login',pathMatch: 'full'},
  {path:'**',component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
