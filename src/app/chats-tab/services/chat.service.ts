import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private chatList: any[] = [
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: new Date(2022, 9, 30),
      messageToRead: 3,
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: new Date(2022, 9, 29),
      messageToRead: 3,
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: Date.now(),
      messageToRead: 3,
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: Date.now(),
      messageToRead: 3,
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: Date.now(),
      messageToRead: 3,
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: Date.now(),
      messageToRead: 3,
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: Date.now(),
      messageToRead: 3,
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: Date.now(),
      messageToRead: 3,
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: Date.now(),
      messageToRead: 3,
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: Date.now(),
      messageToRead: 3,
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: Date.now(),
      messageToRead: 3,
    },
    {
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'John Doe',
      secondLine: 'Esta es la segunda linea',
      dateTime: Date.now(),
      messageToRead: 3,
    },
  ];
  constructor() {}

  public getChatList(): any[] {
    return this.chatList;
  }
}
