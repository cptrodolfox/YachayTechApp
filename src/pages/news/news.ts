import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

export class News{
  title: String;
  date: Date;
  summary:  String;
  full_text: String;
  images: String[];
}


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private translateService: TranslateService) {
    translateService.use('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
