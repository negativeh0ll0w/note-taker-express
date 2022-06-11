const fs = require('fs');
const { createNewNote, deleteNoteData } = require('../lib/notes');
const { notes } = require('../db/db.json');
jest.mock('fs');

test('create new note object', () => {
    const newNote = createNewNote(
        { title: 'Test Title', text: 'test note text'},
        notes
        );

    expect(newNote.title).toBe('Test Title');
    expect(newNote.text).toBe('test note text');
});

test('delete a note object', () => {
    const noteArr = [
        {
            title: 'Test 1',
            text: 'test 1 text',
            id: '1'
        },
        {
            title: 'test 2',
            text: 'test 2 text',
            id: '2'
        },
    ];
    const updatedNoteArr = deleteNoteData(1, noteArr);

    expect(updatedNoteArr.length).toEqual(1)
})