import { Component } from '@angular/core';
import { Kittens } from './models/kitten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'createKitten';

  kittenList: Kittens[] = [];
  mykittenList: Kittens[] = [];

  addKitten(event: Kittens) {
    this.kittenList.push(event);
  }

  addMyKitten(event: Kittens) {
    this.mykittenList.push(event);
  }
}
