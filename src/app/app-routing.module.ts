import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserKittenComponent} from './user-kitten/user-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { Kittens } from './models/kitten.model';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'user', component: UserKittenComponent },
  { path: 'create', component: CreateKittenComponent },
  { path: 'list', component: ListKittenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
