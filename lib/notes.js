const path = require('path');
const fs = require('fs');

function createNewNote(body, noteArr) {
    const note = body;
    noteArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArr }, null, 2)
    );

    return note;
};

function deleteNoteData(id, noteArr) {
    const noteIndex = noteArr.findIndex(object => {
        return object.id === id;
    });
    
    let newArr = noteArr

    let delNote = newArr.splice(noteIndex, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: newArr }, null, 2)
    );

    return newArr;
};

module.exports = { createNewNote, deleteNoteData };