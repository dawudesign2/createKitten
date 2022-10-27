import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kittens } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {

  constructor() { }

  model: Kittens = new Kittens('', new Date(), '', '', this.generateId());

  @Output() sendKitten = new EventEmitter<Kittens>();

  submitted = false;

  generateId() {
    return Math.floor(Math.random() * 1000000000);
  }

  reset() {
    this.model = new Kittens('', new Date(), '', '', this.generateId());
  }

  onSubmit() {
    this.sendKitten.emit(this.model);
    this.submitted = true;
    this.reset();
  }

  ngOnInit(): void {
  }

}
