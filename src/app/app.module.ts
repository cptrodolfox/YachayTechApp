import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Inject } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
/**
   Pages
 */
import { HomePage } from '../pages/home/home';
import { BusSchedulePage } from '../pages/bus-schedule/bus-schedule';
import { SettingsPage } from '../pages/settings/settings';
import { NewsPage } from '../pages/news/news';
import { NewsItemPage } from '../pages/news-item/news-item';
import { EventsPage } from '../pages/events/events';
import { EventItemPage } from '../pages/event-item/event-item';
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

/**
   App Preferences
 */
import { AppPreferences } from '@ionic-native/app-preferences';

/**
    Social Sharing
 */
import { SocialSharing } from '@ionic-native/social-sharing';

/**
    Ionic Storage
 */
import { IonicStorageModule } from '@ionic/storage';
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 *  Custom ErrorHandler
 */
import { AlertController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
export class ProductionErrorHandler implements ErrorHandler {
    constructor (
        @Inject (AlertController) private alerts: AlertController,
        @Inject (SplashScreen) public splashScreen: SplashScreen
    ){}

    async handleError(error) {
        const alert = this.alerts.create({
            title: 'An Error Has Ocurred',
            subTitle: 'Unfortunately, the app needs to be restarted',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Restart',
                    handler: () => {
                        this.splashScreen.show();
                        window.location.reload();
                    }
                }
            ]
        });
        alert.present();
    }
}
const production = false;
const ERROR_HANDLER = production ? ProductionErrorHandler : IonicErrorHandler;

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        BusSchedulePage,
        SettingsPage,
        NewsPage,
        NewsItemPage,
        EventsPage,
        EventItemPage
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
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        BusSchedulePage,
        SettingsPage,
        NewsPage,
        NewsItemPage,
        EventsPage,
        EventItemPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        SQLite,
        { provide: ErrorHandler, useClass: ERROR_HANDLER },
        YachaytechProvider,
        AppPreferences,
        SocialSharing
    ]
})
export class AppModule { }
