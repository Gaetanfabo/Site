import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  
import { CataloguesComponent } from './catalogues/catalogues.component';
import { ServicesComponent} from './services/services.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { OrdinateursPortablesComponent } from './ordinateurs-portables/ordinateurs-portables.component';
import { OrdinateursBureauxComponent } from './ordinateurs-bureaux/ordinateurs-bureaux.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { AccessoireComponent } from './accessoire/accessoire.component';
import { EquipReseauComponent } from './equip-reseau/equip-reseau.component';
import { ServeurComponent } from './serveur/serveur.component';
import { TelephoneComponent } from './telephone/telephone.component';

export const routes: Routes = [

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