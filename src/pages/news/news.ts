import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NewsItemPage } from '../news-item/news-item';
import { YachaytechProvider } from '../../providers/yachaytech/yachaytech';

// TODO Social Sharing capabilities.

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
    public news: News[]=[];
    loading : any;
    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                private translateService: TranslateService,
                public yachaytechProvider: YachaytechProvider,
                private loadingController: LoadingController) {

        this.loading  = this.loadingController.create({
            content: 'Loading news please wait...'
        });
        this.loading.present();
        this.news.push(new News("Noticia 1", 
                                new Date(), 
                                "El resumen de la noticia 1", 
                                "La noticia 1 es una noticia de prueba", 
                                ["assets/imgs/news.jpeg"]));
        this.news.push(new News("Noticia 2", 
                                new Date(), 
                                "El resumen de la noticia 2", 
                                "La noticia 2 es una noticia de prueba", 
                                ["assets/imgs/news.jpeg"]));
        this.news.push(new News("Noticia 3", 
                                new Date(), 
                                "El resumen de la noticia 3", 
                                "La noticia 3 es una noticia de prueba", 
                                ["assets/imgs/news.jpeg"]));
        this.yachaytechProvider.removeAllNews();
        this.loading.dismiss();   
    }

    ionViewDidLoad(){
        console.log('ionViewDidLoad NewsPage');
    }
    
    viewNewsItem(index){
        this.navCtrl.push(NewsItemPage, {
            news : this.news[index],
        })
    }
}

export class News{
    title: string;
    date: Date;
    summary:  string;
    full_text: string;
    images: string[];
    constructor(title: string, date: Date, summary: string, full_text: string, images: string[]){
        this.title = title;
        this.date = date;
        this.summary = summary;
        this.full_text = full_text;
        this.images = images;
    }

    getDate(): string{
        return this.date.toLocaleDateString();
    }
    /** The front image is the representative image of the news. */
    getFrontImage(): string{
        if(this.images.length > 0){
            return this.images[0];
        }
        else{
            return ""; //TODO Get default image.
        }
    }
}


