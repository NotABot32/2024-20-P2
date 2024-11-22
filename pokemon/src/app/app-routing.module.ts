import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerListComponent } from './trainer/trainer-list/trainer-list.component';
const routes: Routes = [
 { path: 'trainers', component : TrainerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
