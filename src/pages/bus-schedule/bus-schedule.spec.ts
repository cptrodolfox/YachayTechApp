import { Entry, Day, Schedule } from "./bus-schedule";
/**
   Test for Schedule Entry
 */

describe("Test for Schedule Entry", ()=>{
    let entry1 = new Entry(Day.Mon, "Ibarra", "14:00");
    describe("Test for getDayEn()", ()=>{
        it("should return \"Monday\"", ()=>{
            expect(entry1.getDayEn()).toEqual("Monday");
        });

    });
});

/**
   Test for Schedule
*/

describe("Test for a whole Schedule", ()=>{
    let entry1 = new Entry(Day.Mon, "Ibarra", "14:00");
    let entry2 = new Entry(Day.Tues, "Ibarra", "14:05");
    let entry3 = new Entry(Day.Wed, "Ibarra", "14:10");
    let entry4 = new Entry(Day.Thur, "Ibarra", "14:15");
    let entry5 = new Entry(Day.Fri, "Ibarra", "14:20");
    let entry6 = new Entry(Day.Sat, "Ibarra", "14:25");

    describe("Test for the constructor of Schedule", ()=>{
        let schedule = new Schedule([entry1, entry2, entry3, entry4, entry5, entry6]);
        it("should return []", ()=>{
            expect(schedule.sunday).toEqual([]);
        });
    });
});
