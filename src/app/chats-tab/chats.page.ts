import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss'],
})
export class ChatsPage implements OnInit {
  chatList: any = [];

  enabledEdit: boolean = false;

  constructor(
    private navController: NavController,
    private chatService: ChatService
  ) {}

  public ngOnInit(): void {
    this.chatList = this.chatService.getChatList();
  }

  public goToChat(): void {
    this.navController.navigateForward(['chat']);
  }
}
