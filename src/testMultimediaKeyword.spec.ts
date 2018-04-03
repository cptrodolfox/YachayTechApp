describe('Tes for multimedia keyword', function() {
    it('passes if the expected keyword is an element in the array of valid keywords', function() {
    	var keyword= 'Fotos';
        expect(['Fotos','Video','Audio']).toContain(keyword);        
    });
    
    it('fails if the expected keyword in not in the array of valid keywprds', function() {
        var keyword='Musica'
        expect(['Fotos','Video','Audio']).not.toContain(keyword);

    });
});

