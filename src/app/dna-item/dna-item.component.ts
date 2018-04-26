import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dna-item',
  templateUrl: './dna-item.component.html',
  styleUrls: ['./dna-item.component.scss']
})
export class DnaItemComponent implements OnInit {

  @Input() header: string;
  @Input() data: any[];

  constructor() { }

  ngOnInit() {
  }

}
