import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { MESSAGE_STATUS, MessageInterface } from './models/message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, AfterViewChecked {
  messageList: MessageInterface[] = [
    {
      text: 'Hi, how are you doing? Why do not call me? L crazy for you.',
      status: MESSAGE_STATUS.SEND,
      time: '2:34',
      isMessageSent: true,
    },
    {
      text: 'Hi, how are you doing? Why do not call me? L crazy for you.',
      status: MESSAGE_STATUS.RECEIVED,
      time: '2:34',
      isMessageSent: true,
    },
    {
      text: 'Hi, how are you doing? Why do not call me? L crazy for you.',
      status: MESSAGE_STATUS.WACHED,
      time: '2:34',
      isMessageSent: true,
    },
    {
      text: 'Hi, how are you doing? Why do not call me? L crazy for you.',
      status: MESSAGE_STATUS.WACHED,
      time: '2:34',
      isMessageSent: false,
    },
  ];

  formGroup: FormGroup = this.fb.group({
    message: new FormControl({ value: '', disabled: false }, [
      Validators.required,
    ]),
  });
  @ViewChild(IonContent) content: IonContent;

  constructor(private fb: FormBuilder) {}
  public ngAfterViewChecked(): void {
    this.content.scrollToBottom();
  }

  public ngOnInit(): void {}

  public async sendMessage(): Promise<void> {
    if (this.formGroup.get('message').value) {
      const messageToSend: MessageInterface = {
        isMessageSent: true,
        status: MESSAGE_STATUS.SEND,
        text: this.formGroup.get('message').value,
        time: new Date().toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      };
      this.messageList.push(messageToSend);
      this.formGroup.get('message').setValue('');
    }
  }
}
