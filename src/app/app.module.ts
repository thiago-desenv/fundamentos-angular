import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PessoaComponent } from './pessoa/pessoa.component';
import { statusClassPipe } from './pipes/status-class.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    statusClassPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
