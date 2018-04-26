import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import './rxjs-operators';
import {DnaService} from './state/dna.service';
import {HttpClientModule} from '@angular/common/http';
import {DnaFacade} from './state/dna.facade';
import { DnaItemComponent } from './dna-item/dna-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DnaItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    DnaService,
    DnaFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
