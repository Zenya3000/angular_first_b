import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NOTES } from './NOTES';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteComponent } from './note/note.component';
import { StarComponent } from './star/star.component';
import { TestComponent } from './test/test.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { ModalComponent } from './modal/modal.component';






@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AddNoteComponent,
    NoteComponent,
    StarComponent,
    TestComponent,
    PostsComponent,
    UsersComponent,
    UserComponent,
    ModalComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "",
        component: NotesComponent
      },
      {
        path: "posts",
        component: PostsComponent
      },
      {
        path: "users",
        component: UsersComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
