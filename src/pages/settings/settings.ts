import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
   I18n support
 */
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private translateService: TranslateService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SettingsPage');
    }

}
