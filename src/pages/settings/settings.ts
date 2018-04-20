import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
/**
   I18n support
 */
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {
    language: string = "en";
    constructor(public navCtrl: NavController, public navParams: NavParams, private translateService: TranslateService, private appPreferences: AppPreferences) {
        /**this.appPreferences.fetch('language').then((res) => {
            this.language = res;
        });*/
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SettingsPage');
    }

    changeLanguageSetting(newLan: string) {
        /**this.appPreferences.store('language', newLan).then((res) => {
            console.log(res);
        });
        */
        this.translateService.use(newLan);
    }

}
