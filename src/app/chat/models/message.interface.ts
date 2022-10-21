export enum MESSAGE_STATUS {
  SEND = 0,
  RECEIVED = 1,
  WACHED = 2,
}
export interface MessageInterface {
  id?: string;
  text: string;
  time: string;
  status: MESSAGE_STATUS;
  isMessageSent: boolean;
}
