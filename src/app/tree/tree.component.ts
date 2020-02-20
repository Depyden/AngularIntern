import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  Data: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(){
    this.Data = this.dataService.getData();
  }
}
