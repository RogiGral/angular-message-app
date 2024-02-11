import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CardComponent } from 'src/app/shared/component/card/card.component';
import { SidebarComponent } from 'src/app/shared/layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-compose',
  standalone: true,
  imports: [CardComponent,SidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './compose.component.html',
  styleUrl: './compose.component.scss'
})
export class ComposeComponent {

}
