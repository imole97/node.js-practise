console.log('starting app.js')
//working with file system module
const fs = require('fs')
//working with installed dependency for noteapp
const yargs = require('yargs')
const argv = yargs.argv
//opening note.js in app.js
const notes = require('./note.js')


//creating a txt file, accepts path and data as params
fs.appendFileSync('greetings.txt', 'Hello World')


//work with external  note.js module
// console.log(notes.add(5,3))
// console.log(notes.sub(5,3));


// console.log('process:', process.argv);  //argv stands for argument vector
// console.log('yargs:', yargs.argv);

const title = yargs.argv.title
const body = yargs.argv.body 
const command = yargs.argv._[0]
// console.log(title,body,command)

switch (command) {
    case 'add':
        console.log( 'adding note');
        notes.addingNote(title,body)
        break
    case 'remove':
        console.log('removing note'); 
        notes.removeNote(title)
        break
    case 'read':
        console.log('reading note'); 
        notes.readNote(title)
        break
    case 'list':
        console.log('listing all notes')
        notes.getAll()
        break
    default: 
        console.log('unknown command was used!') 
        break
}

// if (command === 'add') {
//     return 'adding note'
// }