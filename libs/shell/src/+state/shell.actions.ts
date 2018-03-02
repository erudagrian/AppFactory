import { NavigationExtras } from '@angular/router';

export enum ShellActionTypes {
  BACK_COMMAND = '[Router] Back command',
  GO_COMMAND = '[Router] Go command',
  FORWARD_COMMAND = '[Router] Forward command'
}

export interface BackCommand {
  type: ShellActionTypes.BACK_COMMAND;
}

export interface GoCommand {
  type: ShellActionTypes.GO_COMMAND;
  payload: {
    path: any[];
    query?: object;
    extras?: NavigationExtras;
  };
}

export interface ForwardCommand {
  type: ShellActionTypes.FORWARD_COMMAND;
}

export type ShellActions = BackCommand | GoCommand | ForwardCommand;
