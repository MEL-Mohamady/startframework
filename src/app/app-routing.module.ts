import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
{path:"", redirectTo: 'home', pathMatch: 'full'},
{path:'home', component: HomeComponent},
{path:"about",component:AboutComponent , title:"About" },
{path:"portfolio", component:PortfolioComponent , title:"portfolio"},
{path:"contact", component:ContactComponent,title:"contact"},
{path:"**",component:ErrorComponent, title:"error"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
