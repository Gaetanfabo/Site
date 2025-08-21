import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';  
import { LocationStrategy, HashLocationStrategy } from '@angular/common'; 
import { ServicesComponent } from './services/services.component';
import { CataloguesComponent } from './catalogues/catalogues.component';
import { OrdinateursPortablesComponent } from './ordinateurs-portables/ordinateurs-portables.component';

const routes: Routes = [
        { path: '', component: AppComponent },
        { path: 'catalogue', component: CataloguesComponent },
        { path: 'service', component: ServicesComponent },
        { path: 'ordinateurs-portables', component: OrdinateursPortablesComponent }, // Example route for laptops
          
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }] // Use hash location strategy
})
export class AppRoutingModule { }  
