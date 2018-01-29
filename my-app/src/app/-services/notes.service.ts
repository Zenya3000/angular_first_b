import { Injectable } from '@angular/core';
import { NOTES } from '../NOTES';


@Injectable()

export class NotesService {
    getNotes(){
        return NOTES;
    }
    addNote(newNote){
        NOTES.push(newNote);
    }
    
    removeNote(index){
        NOTES.splice(index, 1);
    }
    
    editNote(index, newNote){
        NOTES[index] = newNote;
    }
}