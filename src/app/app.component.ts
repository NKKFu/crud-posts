import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemsComponent } from "./list-items/list-items.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-posts';
}
