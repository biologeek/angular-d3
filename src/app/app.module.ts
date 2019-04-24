import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { XAxisComponent } from './x-axis/x-axis.component';
import { YAxisComponent } from './y-axis/y-axis.component';
import { ClipPathComponent } from './clip-path/clip-path.component';
import { CurveComponent } from './curve/curve.component';

@NgModule({
  declarations: [
    AppComponent,
    XAxisComponent,
    YAxisComponent,
    ClipPathComponent,
    CurveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
