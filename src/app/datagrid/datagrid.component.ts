import { Component, OnInit } from '@angular/core';
import {DataGridModule} from 'primeng/primeng';
import {Selection} from '../common/selection';
import {SelectionService} from "../selection.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  selections: Selection[];

  constructor(private selectionService: SelectionService,
  private router: Router) { }

  ngOnInit() {
    this.selectionService.getRaids().then(selections => this.selections = selections);
  }

  openRaidPage(raidID: number){
    this.router.navigate(['/raids/'+ raidID]);
    console.log("fired " + raidID);
  }

}
