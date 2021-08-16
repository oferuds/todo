import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { TodoComponent } from './todo/todo.component';
import { LobbyMassagesComponent } from './lobbyMassages/LobbyMassages.component';


const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'todo/:id', component: TodoComponent },
  { path: 'lobbyMassages', component: LobbyMassagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
