WordSwap
========

A game that allows users to input a story and words, and swaps the words.
  *Sidenote: this is my first node.js project sans tutorial. My goal was to create 
    an ad-lib game, where players could type a story and include keywords('NOUN', 
    'PROPNOUN', 'VERB', 'ADJECTIVE'). A form would be generated with the correct
    number of inputs. That form-data would then be used to swap out the keywords,
    creating a potentially silly story.

Requires:
  node.js
    express
    body-parser
    
To run: start the server using a console.
$ node 'path/to/server.js'

Then point a web browser at http://127.0.0.1:8080/start.

Difficult Parts
========
Creating the right number of forms was easy. Using bodyparser to ready a variable
amount of form-data was tricky. See the interaction between the app.post function in
server.js and the formGen function in view.js.

Plans
========
First, I need to clean up the code.
Later, I will tie into social networks.
Phrase-ify it into an addicting social game.

Fork
========
Duplicate the user functionality without any node.js dependency.
Add styling.
Create graphics.
PhoneGap.
