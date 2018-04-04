import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the YachaytechProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YachaytechProvider {
    static readonly db_name = 'yachaytechapp_db';
    static readonly db_location = 'default';
    constructor(public http: HttpClient, private sqlite: SQLite) {
        console.log('Hello YachaytechProvider Provider');
    }

    createTableNews(){
        this.sqlite.create({
            name: YachaytechProvider.db_name,
            location:  YachaytechProvider.db_location
        })
            .then((db: SQLiteObject) =>{
                db.executeSql('CREATE TABLE IF NOT EXISTS news(rowid INTEGER PRIMARY KEY, title TEXT, date TEXT, summary TEXT, full_text TEXT, images TEXT)', {})
                    .then(() => console.log('Created News Tables'))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }

    createTableEvents(){
        this.sqlite.create({
            name: YachaytechProvider.db_name,
            location:  YachaytechProvider.db_location
        })
            .then((db: SQLiteObject) =>{
                db.executeSql('CREATE TABLE IF NOT EXISTS events(rowid INTEGER PRIMARY KEY, title TEXT, start_date TEXT, end_date TEXT, description TEXT, images TEXT, published_date TEXT)', {})
                    .then(() => console.log('Created Events Table'))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }

    createTableMultimedia(){
        this.sqlite.create({
            name: YachaytechProvider.db_name,
            location:  YachaytechProvider.db_location
        })
            .then((db: SQLiteObject) =>{
                db.executeSql('CREATE TABLE IF NOT EXISTS multimedia(rowid INTEGER PRIMARY KEY, title TEXT, published_date TEXT, caption TEXT, uri TEXT, type TEXT)', {})
                    .then(() => console.log('Created Multimedia Table'))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));

    }

    createScheduleTable(){
        this.sqlite.create({
            name: YachaytechProvider.db_name,
            location:  YachaytechProvider.db_location
        })
            .then((db: SQLiteObject) =>{
                db.executeSql('CREATE TABLE IF NOT EXISTS schedule(rowid INTEGER PRIMARY KEY, day TEXT, location TEXT, time TEXT, updated BOOLEAN NOT NULL CHECK (updated IN (0,1)))', {})
                    .then(() => console.log('Created Schedule Table'))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
    }

    createClassroomsTable(){
        this.sqlite.create({
            name: YachaytechProvider.db_name,
            location:  YachaytechProvider.db_location
        })
            .then((db: SQLiteObject) =>{
                db.executeSql('CREATE TABLE IF NOT EXISTS classrooms(rowid INTEGER PRIMARY KEY, room_name TEXT, lattitude REAL, longitude REAL, altitude REAL)', {})
                    .then(() => console.log('Created Classroom Tables'))
                    .catch(e => console.log(e));
            })
            .catch(e => console.log(e));

    }

}
