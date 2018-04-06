import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
/**
   Pages
 */
import { HomePage } from '../pages/home/home';
import { BusSchedulePage } from '../pages/bus-schedule/bus-schedule';
import { SettingsPage } from '../pages/settings/settings';
/**
   Data Provider
 */
import { YachaytechProvider } from '../providers/yachaytech/yachaytech';

/**
   Database Engine
 */
import { SQLite } from '@ionic-native/sqlite';

/**
   I18n support
*/
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


/** export function createTranslateLoader(http: HttpClient) {
return new TranslateHttpLoader(http, '.assets/i18n/', '.json');
}*/

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
@NgModule({
    declarations: [
        MyApp,
        HomePage,
        BusSchedulePage,
        SettingsPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        BusSchedulePage,
        SettingsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        SQLite,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        YachaytechProvider
    ]
})
export class AppModule { }
