import {Multimedia} from './multimedia.pages';
import {MultimediaPage} from './multimedia';
// valid keywords=['Fotos','Video','Audio']


describe("Tes for multimedia keyword", ()=>{

    it('passes if the expected keyword is an element in the array of valid keywords', ()=>{
        let multimedia = new Multimedia([],[],[]);
        expect(multimedia.IsValidKeyword()).toBe(true);        
    });
    
    it('fails if the expected keyword in not in the array of valid keywprds', ()=>{
        let multimedia = new Multimedia([],[],[]);
        expect(multimedia.IsValidKeyword()).toBe(false); 
    });
});
