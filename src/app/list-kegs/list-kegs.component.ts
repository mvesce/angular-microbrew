import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/keg.models';

@Component({
  selector: 'app-list-kegs',
  templateUrl: './list-kegs.component.html',
  styleUrls: ['./list-kegs.component.css']
})
export class ListKegsComponent implements OnInit {

  kegs: Keg[];
  constructor() { 
    this.kegs = []
  }

  ngOnInit(): void {
  }

  guardar(code:string, description:string, size:number, type:string) {
    this.kegs.push(new Keg(code, description, size, type));
    return false;
  }

}
