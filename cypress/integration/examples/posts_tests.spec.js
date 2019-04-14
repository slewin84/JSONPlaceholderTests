// JavaScript source code
/// <reference types="Cypress" />

it('Post a new post and test status', function () {
    //By now, user 100 should not yet actually exist
    var result = cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
        id: 1,
        title: 'Testing body content',
        body: 'Cypress is not so bad actually',
        userId: 100
     })

   result.its('status').should('equal', 201)    
})


it('Get the new post', function () {
    cy.request('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
        expect(response.body).to.have.property('body', 'Cypress is not so bad actually')
    })
})

it('Delete the post', function () {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1') 

    //Confirm we've deleted the resource:
    var result = cy.request('https://jsonplaceholder.typicode.com/posts/1');
    result.its('status').should('equa', 404);

})

