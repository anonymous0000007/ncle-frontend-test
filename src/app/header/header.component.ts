import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private _router: Router) { }

  /**
   * @public
   * @returns {void}
   * @description on logo click to navigate to root path
   */
  public navgiateToRoot(): void {
    this._router.navigate(['/']);
  }
}
