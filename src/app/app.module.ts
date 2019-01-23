import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';
import { Service } from './shared/app.service';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
