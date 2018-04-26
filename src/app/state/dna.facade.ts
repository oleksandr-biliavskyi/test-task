import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DnaService} from './dna.service';

@Injectable()
export class DnaFacade {
  dnaData$ = new BehaviorSubject<any>(null);
  dnaDataLoading$ = new BehaviorSubject<boolean>(false);
  bgColor$ = new BehaviorSubject<string>('#FFFAF0');

  constructor(private dnaService: DnaService) {}

  loadDNAData() {
    this.dnaDataLoading$.next(true);
    this.dnaService.getDNA()
      .finally(() => this.dnaDataLoading$.next(false))
      .subscribe(data => this.dnaData$.next(data));
  }

  changeBgColor(value: string) {
    this.bgColor$.next(value);
  }
}
