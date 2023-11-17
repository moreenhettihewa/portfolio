import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  LINKEDIN_URL = 'https://www.linkedin.com/in/moreenhettihewa/';
  GITHUB_URL = 'https://github.com/moreenhettihewa';

  constructor(private _formBuilder: FormBuilder) {}

  openLinkedIn(): void {
    window.open(this.LINKEDIN_URL);
  }

  openGitHub(): void {
    window.open(this.GITHUB_URL);
  }
}
