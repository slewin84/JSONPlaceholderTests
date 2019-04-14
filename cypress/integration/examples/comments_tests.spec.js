// JavaScript source code
/// <reference types="Cypress" />

it('Post a new comment and test status', function () {

    //By now, user 100 actually should not yet exist
    var result = cy.request('POST', 'https://jsonplaceholder.typicode.com/comments/', {
        postId: 2,
        Id: 100,
        name: 'Your Friendly Mongo Injection Test',
        email: 'lewin.stephan@gmail.com',
        body: '//DoNotActuallyDropAnything--db.collection.deleteOne(id:1)',
     })

   result.its('status').should('equal', 201)    
})

it('Get the new comment body', function () {
    cy.request('https://jsonplaceholder.typicode.com/comments/2').then((response) => {
        expect(response.body).to.have.property('body', '//DoNotActuallyDropAnything--db.collection.deleteOne(id: 1)')
    })
})

it('Delete the comment', function () {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/comments/2') 

    //Confirm we've deleted the resource:
    var result = cy.request('https://jsonplaceholder.typicode.com/comments/2');
    result.its('status').should('equa', 404);
})

