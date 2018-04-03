export class Event{

    constructor(
     public ID: number,
     public title: string,
     public date: string,
     public hour: number,
    ){}
  
    getFullInfo(): string{
     return `${this.title} ${this.date} ${this.hour}`; 
    }
  
    getEventID( ID: number ): number{
     
     return this.ID;
      
    }
  }