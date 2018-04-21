import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';


@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
    events: Event[]=[];

    constructor(public navCtrl: NavController, public navParams: NavParams, private translateService: TranslateService) {
     
        this.events.push(new Event("Evento 1",
                                  Date(),
                                  Date(),
                                  "Este es el evento 1",
                                  [],
                                  Date())); 
   
        this.events.push(new Event("Evento 2",
                                  Date(),
                                  Date(),
                                  "Este es el evento 2",
                                  [],
                                  Date())); 
    

        this.events.push(new Event("Evento 3",
                                  Date(),
                                  Date(),
                                  "Este es el evento 3",
                                  [],
                                  Date())); 
    
   
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EventsPage');
    }

}

export class Event{
    title: string;
    start_date: Date;
    end_date: Date;
    description: string;
    images: string[]=[];
    published_date:Date;
    hasAlarm: boolean = false;
    constructor(title: string, 
                start_date: Date, 
                end_date: Date, 
                description: string, 
                images: string[], 
                published_date: Date){
        this.title = title;
        this.start_date=start_date;
        this.end_date=end_date;
        this.description=description;
        this.images=images;
        this.published_date=published_date;
    }

}
