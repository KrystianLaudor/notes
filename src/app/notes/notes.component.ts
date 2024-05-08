import { Component, OnInit } from '@angular/core';
import { Notes } from '../notes-mock';
import { Note } from '../note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [Notes, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {

  noteList = Notes;
  headers: string[] = [];
  selectedNote: Note | null = null;
 
  constructor() {
    this.noteList.forEach(element => {
      const keys = Object.keys(element);
      keys.forEach(key => {
        if (key !== 'isSelected') {
          if (!this.headers.includes(key)) {
            this.headers.push(key);
          }
        }
      })
    })
  }

  ngOnInit(): void {
  }

  toggleSelection(note: Note) {
    if (this.selectedNote === note) {
      note.isSelected = !note.isSelected;
    } else {
      if (this.selectedNote) {
        this.selectedNote.isSelected = false;
      }
      note.isSelected = true;
      this.selectedNote = note;
    }
  }
}
