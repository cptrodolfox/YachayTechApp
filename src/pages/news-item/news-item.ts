import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { News } from '../news/news';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
*   Pages
* */
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-news-item',
  templateUrl: 'news-item.html',
})
export class NewsItemPage {
    news: News;
    constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
        this.news = navParams.get('news');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewsItemPage');
    }

    moveToHome(){
        this.navCtrl.popToRoot();
    }

}
