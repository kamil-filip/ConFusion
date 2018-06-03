import { Component } from '@angular/core';


//decorator
@Component({
  selector: 'app-root', // if I want to have part of the screen controlled by controller
  templateUrl: './app.component.html', //specify tmeplate file for each component
  styleUrls: ['./app.component.scss'] //assigned styles
})
export class AppComponent {
  title = 'app works!';
}
