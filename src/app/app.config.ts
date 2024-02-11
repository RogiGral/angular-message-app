import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
    HttpClientModule,
} from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';


export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter(routes),
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
};