import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-bus-schedule',
    templateUrl: 'bus-schedule.html',
})
export class BusSchedulePage {
    busSchedule: Entry[];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BusSchedulePage');
    }

    getBusSchedule(){}
}

/**
   Enum Type for days of the week
*/
export enum Day {
    Mon,
    Tues,
    Wed,
    Thur,
    Fri,
    Sat,
    Sun
}

/**
   An entry of the schedule
   */
export class Entry{
    day: Day; // Day of the week.
    location: string; // Starting location of the bus line.
    time: string; // Time in the format hh:mm of bus departure from location.


    constructor(day:Day, location: string, time: string){
        this.day = day;
        this.location = location;
        this.time = time;
    }

    /**
       Returns the day of the week of the Entry as a human readable string English
     */
    getDayEn(){
        var dayString;
        switch(+this.day){
            case Day.Mon:
                dayString="Monday";
                break;
            case Day.Tues:
                dayString="Tuesday";
                break;
            case Day.Wed:
                dayString="Wednesday";
                break;
            case Day.Thur:
                dayString="Thursday";
                break;
            case Day.Fri:
                dayString="Friday";
                break;
            case Day.Sat:
                dayString="Saturday";
                break;
            case Day.Sun:
                dayString="Sunday";
                break;
        }
        return dayString;
    }

}
