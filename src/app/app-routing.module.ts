import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';  
import { HomeComponent } from './home/home.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { TelephoneComponent } from './telephone/telephone.component'; 
import { ServeurComponent } from './serveur/serveur.component';
import { EquipReseauComponent } from './equip-reseau/equip-reseau.component';
import { AccessoireComponent } from './accessoire/accessoire.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { OrdinateursBureauxComponent } from './ordinateurs-bureaux/ordinateurs-bureaux.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'; 
import { ServicesComponent } from './services/services.component';
import { CataloguesComponent } from './catalogues/catalogues.component';
import { OrdinateursPortablesComponent } from './ordinateurs-portables/ordinateurs-portables.component';

const routes: Routes = [
      {path: 'telephone', component: TelephoneComponent},
          {path: 'serveur', component: ServeurComponent},
          {path: 'equip-reseau', component: EquipReseauComponent},
          {path: 'accessoire', component: AccessoireComponent},
          {path: 'imprimante', component: ImprimanteComponent},
          {path: 'ordinateurs-bureaux', component: OrdinateursBureauxComponent},
          {path: 'ordinateurs-portables', component: OrdinateursPortablesComponent},
          {path: 'a-propos', component: AProposComponent},
          {path: 'nous-contacter', component: NousContacterComponent},
          {path:'services',component: ServicesComponent},
          {path: 'catalogues', component: CataloguesComponent},
          {path: '', component: HomeComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }] // Use hash location strategy
})
export class AppRoutingModule { }  
