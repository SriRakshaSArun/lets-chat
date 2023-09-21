import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component/app-component/app.component';
import { MainHeaderComponent } from './component/main-header/main-header.component';
import { LetsChatComponent } from './component/lets-chat/lets-chat.component';
import { ChatRoomComponent } from './component/chat-room/chat-room.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    LetsChatComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
