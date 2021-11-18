import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Micomponente } from './components/mi-componente/mi-componente.component';
import { Crudtable } from './components/crudtable/crudtable.component';
import { CrudtablerowComponent } from './components/crudtablerow/crudtablerow.component';
import { FormComponent } from './components/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    Micomponente,
    Crudtable,
    CrudtablerowComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
