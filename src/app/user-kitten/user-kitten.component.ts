import { Component, OnInit, Input } from '@angular/core';
import { Kittens } from '../models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {

  constructor() { }

  @Input() mykittenList: Kittens[] = [];

  ngOnInit(): void {
  }

}
