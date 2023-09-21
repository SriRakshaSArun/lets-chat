import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  private socket =  io('http://localhost:3000');

  joinRoom(data:any){
    this.socket.emit('joinRoom',data);
  }

  sendMessage(data:any){
    this.socket.emit('message',data);
  }

  leaveRoom(data:any){
    this.socket.emit('leave',data);
}

  newUserJoined(){
      let observable = new Observable<{user:String, message:String}>(observer=>{
          this.socket.on('newUserJoined', (data:any)=>{
              observer.next(data);
          });
          return () => {this.socket.disconnect();}
      });
      return observable;
  }

  userLeftRoom(){
      let observable = new Observable<{user:String, message:String}>(observer=>{
          this.socket.on('leaveRoom', (data:any)=>{
              observer.next(data);
          });
          return () => {this.socket.disconnect();}
      });
      return observable;
  }

  newMessageReceived(){
      let observable = new Observable<{user:String, message:String}>(observer=>{
          this.socket.on('newMessage', (data:any)=>{
              observer.next(data);
          });
          return () => {this.socket.disconnect();}
      });
      return observable;
  }
}
