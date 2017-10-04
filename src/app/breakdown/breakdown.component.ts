import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {SelectionService} from "../selection.service";
import {Selection} from '../common/selection';

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.css']
})
export class BreakdownComponent implements OnInit {

  paramsID: any;
  selections: Selection[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: SelectionService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.paramsID = params['raidID'];
     this.service.getRaids().then(selections => this.selections = selections);
    });
  }

  onBlas(){
  }

}
