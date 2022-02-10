
console.log('starting note.js');

const fs = require('fs')

//function for fetching note
const fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.txt'))
    } catch (err) {
        return []
    }
}

//function for adding note to a file
const addingNote = (title,body) => {
    const notes = fetchNotes()
    
    const note = {
        title: title,
        body: body
    }

    const doubleTitle = notes.filter(note => note.title.toLowerCase() === title.toLowerCase())
    
    if (doubleTitle.length === 0 && note.body ) {
        notes.push(note)
        fs.writeFileSync('notes.txt', JSON.stringify(notes))
        logNote(note)
    } else if(!note.body) {
        console.log('STOP: Body needed');
    }else{
        console.log('Title already exist')
    }
}

//function for removing note
const removeNote = (title) => {
    const notes = fetchNotes()

    const filteredNotes = notes.filter(note => note.title !== title)

    fs.writeFileSync('notes.txt', JSON.stringify(filteredNotes))

}

//function for reading note
const readNote = (title) => {
    const notes = fetchNotes()

    const filteredNotes = notes.filter(note => note.title === title)

    logNote(filteredNotes[0])
}
//function to get all notes
const getAll = () => {
    const notes = fetchNotes()
    notes.map(note => logNote(note))
    
}

//function for logging notes
const logNote = (note) => {
    console.log('-----------------------')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}


module.exports = {
    addingNote,
    removeNote,
    readNote,
    getAll
}

// const add = (x,y) =>{
//     return x + y
// }

// const sub = (x,y) => {
//     return x - y
// }


// module.exports.add = function add (x,y) {
//     return x + y
// }

// module.exports = {
//     add,
//     sub
// }