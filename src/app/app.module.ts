import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { WordFrequencyAnalyzerComponent } from './shared/word-frequency-analyzer/word-frequency-analyzer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormComponent } from './shared/form/form.component';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    WordFrequencyAnalyzerComponent,
    HomePageComponent,
    FormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
