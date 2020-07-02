import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AjoutOrdinateurComponent } from './components/ajout-ordinateur/ajout-ordinateur.component';
import { DetailOrdinateurComponent } from './components/detail-ordinateur/detail-ordinateur.component';
import { ModifOrdinateurComponent } from './components/modif-ordinateur/modif-ordinateur.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'ordi/ajout', component: AjoutOrdinateurComponent },
  { path: 'ordi/:id', component: DetailOrdinateurComponent},
  { path: 'ordi/modif/:id', component: ModifOrdinateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
