import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kittens } from '../models/kitten.model'

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  constructor() { }

  @Input() kittenList: Kittens[] = [];
  @Output() adoptKitten = new EventEmitter<Kittens>();

  adoptMe(kitten: Kittens) {
    const cat = this.kittenList.findIndex(k => k.id === kitten.id);
    this.kittenList.splice(cat, 1);
    this.adoptKitten.emit(kitten);
  }

  ngOnInit(): void {
  }

}
