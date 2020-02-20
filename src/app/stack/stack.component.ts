import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
  Data: any;
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.Data = this.dataService.getData();
  }

}
