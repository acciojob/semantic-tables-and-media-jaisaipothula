describe('Example To-Do App', () => {
    beforeEach(() => {
        cy.visit(baseUrl + "/main.html");
    });

    it('should contain the heading "List of medias"', () => {
        cy.contains('List of medias').should('be.visible');
    });

    it('should have an image with correct src and alt attributes', () => {
        cy.get('ol li:first img')
            .should('have.attr', 'src', 'https://picsum.photos/id/123/200/300')
            .and('have.attr', 'alt');
    });

    it('should have a video with the correct source URL', () => {
        cy.get('ol li:nth-child(2) source')
            .should('have.attr', 'src', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
    });

    it('should have audio with the correct source URL', () => {
        cy.get('ol li:last source')
            .should('have.attr', 'src', 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg');
    });

    it('should have exactly 3 list items', () => {
        cy.get('ol li').should('have.length', 3);
    });

    it('should use correct table semantics with 3 rows of data', () => {
        cy.get('table').within(() => {
            cy.get('thead th').should('have.length', 2);
            cy.get('tbody').within(() => {
                cy.get('tr').should('have.length', 3);
                cy.get('td').should('have.length', 6);
            });
        });
    });
});
