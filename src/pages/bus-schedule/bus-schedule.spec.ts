import { Entry, Day } from "./bus-schedule";
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
