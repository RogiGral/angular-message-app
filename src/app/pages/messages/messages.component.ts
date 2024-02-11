import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CardComponent } from 'src/app/shared/component/card/card.component';
import { MessageItemComponent } from 'src/app/shared/component/message-item/message-item.component';
import { SidebarComponent } from 'src/app/shared/layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CardComponent,SidebarComponent,MessageItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

}
