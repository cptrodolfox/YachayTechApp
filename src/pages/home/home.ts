import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
   Pages
 */
import { SettingsPage } from '../settings/settings';
import { BusSchedulePage } from '../bus-schedule/bus-schedule';
import { NewsPage } from '../news/news';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private translateService: TranslateService) {
        translateService.use('en');
    }

    moveToSettings() {
        this.navCtrl.push(SettingsPage);
    }

    moveToBusSchedule() {
        this.navCtrl.push(BusSchedulePage);
    }

    moveToNewsPage() {
        this.navCtrl.push(NewsPage);
    }

}
