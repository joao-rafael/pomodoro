import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ClockComponent } from './components/clock/clock.component';
import { FooterComponent } from './components/footer/footer.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ClockComponent,
    FooterComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
