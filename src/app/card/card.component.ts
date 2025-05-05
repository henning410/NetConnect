import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() description = '';

  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
