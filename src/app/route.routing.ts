import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './component/consulta/consulta.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ConsultaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

