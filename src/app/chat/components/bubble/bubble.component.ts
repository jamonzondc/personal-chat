import { Component, Input, OnInit } from '@angular/core';
import { MessageInterface } from '../../models/message.interface';

@Component({
  selector: 'bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent implements OnInit {
  @Input() public message: MessageInterface;

  constructor() {}

  ngOnInit() {}
}
