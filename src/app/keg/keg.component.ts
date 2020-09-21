import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Keg } from '../models/keg.models';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent implements OnInit {

  @Input() keg: Keg;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() { }

  ngOnInit(): void {
  }

}
