import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailResComponent } from './detail-res/detail-res.component';
import { LoginComponent } from './login/login.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';

const routes: Routes = [

  {path:'products',  component: HomeComponent},
  {path :'residence', component : ResidenceComponent},
  {path :'login', component : LoginComponent},
  {path :'addRes', component : FormResidenceComponent},
  {path :'detailRes/:id', component : DetailResComponent}, // route parametre
  {path: '' , redirectTo : '/login', pathMatch : 'full'},  // route par defaut
  {path: '**' , component : NotFoundComponent},  // route not found


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
