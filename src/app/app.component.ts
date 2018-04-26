import {Component, OnInit} from '@angular/core';
import {DnaFacade} from './state/dna.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  dnaData$ = this.facade.dnaData$;
  bgColor$ = this.facade.bgColor$;
  colors = [{
    name: 'Festive',
    value: '#FF00FF'
  }, {
    name: 'Azure',
    value: '#F0FFFF'
  }, {
    name: 'Flamingo',
    value: '#008B8B'
  }];

  constructor(private facade: DnaFacade) {
  }

  ngOnInit() {
    this.facade.loadDNAData();
  }

  setBackgroundColor(value) {
    this.facade.changeBgColor(value);
  }
}
