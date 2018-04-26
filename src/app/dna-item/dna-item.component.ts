import {Component, Input, OnInit} from '@angular/core';
import {IDnaItem} from '../model';
import {DnaFacade} from '../state/dna.facade';

@Component({
  selector: 'app-dna-item',
  templateUrl: './dna-item.component.html',
  styleUrls: ['./dna-item.component.scss']
})
export class DnaItemComponent implements OnInit {

  @Input() header: string;
  @Input() data: IDnaItem[];

  itemCollapsed$ = this.facade.itemCollapsed$;

  constructor(private facade: DnaFacade) { }

  toggleItem() {
    this.itemCollapsed$.next(!this.itemCollapsed$.getValue());
  }

  ngOnInit() {

  }

}
