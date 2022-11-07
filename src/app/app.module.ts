import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';


import { Pipe, PipeTransform } from '@angular/core';
import { StockComponent } from './stock/stock.component';

@Pipe({
  name: 'valueArray',
})
export class ValueArrayPipe implements PipeTransform {

  // El parametro object representa, los valores de las propiedades o indice
  transform(objects : any = []) {
    return Object.values(objects);
  }
}
@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    StockComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
