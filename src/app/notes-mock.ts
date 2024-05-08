import { Note } from './note';

const notes: Note[] = [];
let note = new Note('Dance', 'Hobby', 'Dance new choreography', new Date('2024-05-07'), '11:25', false);
notes.push(note);
note = new Note('Learn', 'Study', 'Evening study for exams typically involves focused review of material, aided by breaks for optimal retention.', new Date('2024-05-02'), '18:45');
notes.push(note);
note = new Note('Run', 'Sport', 'Run 20 km', new Date('2023-12-04'), '15:35', true);
notes.push(note);

export const Notes = notes;