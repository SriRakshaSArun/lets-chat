import { Component } from '@angular/core';
import {ChatMessage, ChatRoom} from "../../../assets/type";
import {ChatService} from "../../service/chat.service";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {
   userName:string = "";
   room:string = "lobby";
   messageTextToSend:string = "";
   chatMessageArray:ChatMessage[] = [];

   constructor( private _chatService :ChatService) {
    this._chatService.newUserJoined()
    .subscribe((data:any)=> this.chatMessageArray.push(data));

    this._chatService.userLeftRoom()
    .subscribe((data:any)=>this.chatMessageArray.push(data));

    this._chatService.newMessageReceived()
    .subscribe((data:any)=>this.chatMessageArray.push(data));

   }

   joinRoom() {
    let chatRoom: ChatRoom;
    chatRoom= {} as ChatRoom;
    chatRoom.user =this.userName;
    chatRoom.room = this.room;
    this._chatService.joinRoom(chatRoom);
   }

   leaveRoom() {
    let chatRoom: ChatRoom = {} as ChatRoom;
    chatRoom.user =this.userName;
    chatRoom.room = this.room;
      this._chatService.leaveRoom(chatRoom);
      this.room = "";
      this.userName="";
   }
   
   sendMessage() {
    this._chatService.sendMessage({user:this.userName, room:this.room, message:this.messageTextToSend});
    this.messageTextToSend = "";
   }
}
