import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkSelected = 'recipe';

  onNavigate(linkSelected: string) {
    this.linkSelected = linkSelected;
  }
}
