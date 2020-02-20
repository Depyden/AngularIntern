import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  Data: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(){
    this.Data = this.dataService.getData();
  }
}
