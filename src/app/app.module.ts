import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideAnimations(),
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    importProvidersFrom(
      NgxsModule.forRoot(),
      HttpClientModule
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
