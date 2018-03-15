import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListenComponent } from './listen/listen.component';
import { SpeechService } from './speech.service';


@NgModule({
  declarations: [
    AppComponent,
    ListenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
