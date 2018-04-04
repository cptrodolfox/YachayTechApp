import { Event } from './event.pages';

describe("Test for Event", ()=>{

  describe("Test for event.getFullInfo", ()=>{

   it("should return an string with title + date + hour", ()=>{
     let event = new Event(1234, "Conferencia PhD. Lorena Guachi", "01/05/2018", 14);
     
     expect(event.getFullInfo()).toEqual("Conferencia PhD. Lorena Guachi 01/05/2018 14");
   });
  });

  describe("Test for person.getEventID", ()=>{

   it("should return the number of event ", ()=>{
     let event = new Event(1234, "Conferencia PhD. Lorena Guachi", "01/05/2018", 14);
     
     expect(event.getEventID(1234)).toEqual(1234);
   });
 });
});
