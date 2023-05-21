import { Component } from '@angular/core';
import { CommonsLibrariesService } from '@commons-libraries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public commonsLibrariesService: CommonsLibrariesService) {

  }
}
