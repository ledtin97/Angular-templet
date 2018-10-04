import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent},
  { path: 'role', component: RoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
