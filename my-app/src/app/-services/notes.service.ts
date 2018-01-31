import { Injectable } from '@angular/core';
import { NOTES } from '../NOTES';

@Injectable()
export class NotesService {
    getNotes(){
        return NOTES;
    }
    addNote(data){
        NOTES.push(data);
    }
    removeNote(index){
       NOTES.splice(index, 1);
    }
    
    editNote(index, newNote){
       NOTES[index] = newNote;
    }
    changeFav(data){
        NOTES[data.index].fav = data.newFav;
    }
    countValues(data){
        NOTES[data.index].count = data.count;
        console.log(NOTES);
    }
}