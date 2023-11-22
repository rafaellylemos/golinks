import { Component } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  menuVisivel = false;

  toggleMenu(): void {
    this.menuVisivel = !this.menuVisivel;
  }
}
