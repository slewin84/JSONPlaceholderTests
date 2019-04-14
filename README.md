# JSONPlaceholderTests
Example of using the Cypress automation framework and runner to execute API tests

## Installation and running
As this is a one-time upload I've not included a git ignore file, so the solution as provided should 
contain everything needed apart from a local installation of Cypress and NodeJS. 

In other circumstances (such as an ongoing project with multiple contributors) a gitginore would be included excluding all packages.

From the command line, these tests can be run while in the directory they have been downloaded by using the following commands:
npm run cy:run -- --record --spec "posts_tests.spec.js"
npm run cy:run -- --record --spec "users_tests.spec.js"
npm run cy:run -- --record --spec "comments_tests.spec.js"

The scope of these tests has been three of the primary functions provided by the API rather than the entire API - posts, comments and users. 

## Bugs observed 
Deleting a post, comment OR user returns a 200, however the resource remains in existence if queried again (if it existed prior to the delete request).

A user with the ID 100 is successfully created, however when queried this user appears not to have been successfully added as a resource. 
The new user appears in neither the full list of users or on the endpoint for an individual user resource with an ID of 100. 

It was possible to make post requests and add comments which included user IDs which did not exist (such as running the above scripts in the order post -> comment -> user 
with the same user ID, the user being created at the end). This is not a http or RESTful flaw, but should break integrity constraints. 

## Design choice
As the developer was investigating the Cypress framework at the time of undertaking the test, it seemed like a good 'first try' at a new technology. 

With Cypress there was no need to deserialise the JSON involved in these request transactions, also the code is extremely readable. 


