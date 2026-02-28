export enum Role {
  USER = 'user',
  MODEL = 'model'
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  isError?: boolean;
  timestamp: number;
}

export interface CodeContextState {
  filename: string;
  content: string;
  language: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
}