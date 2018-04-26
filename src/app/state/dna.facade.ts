import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DnaService} from './dna.service';
import {haveMatches} from '../utils';

@Injectable()
export class DnaFacade {
  dnaData$ = new BehaviorSubject<any>(null);
  dnaDataLoading$ = new BehaviorSubject<boolean>(false);
  bgColor$ = new BehaviorSubject<string>('#FFFAF0');
  itemCollapsed$ = new BehaviorSubject<boolean>(false);

  constructor(private dnaService: DnaService) {
  }

  loadDNAData() {
    this.dnaDataLoading$.next(true);
    this.dnaService.getDNA()
      .finally(() => this.dnaDataLoading$.next(false))
      .map(data => ({
        ...data,
        otherDna: data.otherDna.map(item => ({...item, matched: haveMatches(item, data.yourDna)})
        )
      }))
      .subscribe(data => this.dnaData$.next(data));
  }

  changeBgColor(value: string) {
    this.bgColor$.next(value);
  }
}
