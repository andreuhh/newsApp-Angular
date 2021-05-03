import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService, Command } from '../notifications.service';


@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  messages: Observable<Command[]>;

  constructor(
    private notificationService: NotificationsService
  ) {
    this.messages = this.notificationService.messagesOutput;
  }

  ngOnInit(): void { }

  clearMessage(id: number) {
    this.notificationService.clearMessage(id)
  }

}
