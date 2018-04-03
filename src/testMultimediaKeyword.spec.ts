import {Multimedia} from './multimedia.model';

// valid keywords=['Fotos','Video','Audio']

beforeEach(function() {
    multimedia = new Multimedia();
});
describe("Tes for multimedia keyword", function() {

    it('passes if the expected keyword is an element in the array of valid keywords', function() {
        expect(multimedia.IsValidKeyword()).toBe(true);        
    });
    
    it('fails if the expected keyword in not in the array of valid keywprds', function() {
        expect(multimedia.IsValidKeyword()).toBe(false); 
    });
});
