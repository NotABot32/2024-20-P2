import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from '../trainer-list/trainer-list.component';
import { TrainerDetailComponent } from '../trainer-detail/trainer-detail.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'list', component : TrainerListComponent},
  {path: ':id', component : TrainerDetailComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainerRoutingModule { }
