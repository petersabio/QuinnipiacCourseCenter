import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  public toggleSettings: String = "inactive";


  openSettings() {
    if (this.toggleSettings == "inactive") {
      this.toggleSettings = "active";
    } else if (this.toggleSettings == "active") {
      this.toggleSettings = "inactive";
    }
  }
}
