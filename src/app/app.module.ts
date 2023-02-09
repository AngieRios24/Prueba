import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PersonasComponent } from './component/personas/personas.component';
import { Routes } from '@angular/router';
import { peticiones } from './services/peticiones';

const routes: Routes = [
  { path: '', component: PersonasComponent},
  { path: '**', component: PersonasComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [peticiones],
  bootstrap: [AppComponent]
})
export class AppModule { }
