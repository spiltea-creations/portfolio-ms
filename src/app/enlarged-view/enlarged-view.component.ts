import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItem } from '../portfolio.service';

@Component({
  selector: 'app-enlarged-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="enlarged-view-overlay" (click)="onClose()">
      <div class="enlarged-view-content" (click)="$event.stopPropagation()">
        <img [src]="item.imageUrl" [alt]="item.name">
        <h2>{{ item.name }}</h2>
        <p>Type: {{ item.type }}</p>
        <p>Medium: {{ item.medium }}</p>
        <p>{{ item.description }}</p>
        <button (click)="onClose()">Close</button>
      </div>
    </div>
  `,
  styles: [`
    .enlarged-view-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .enlarged-view-content {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      max-width: 80%;
      max-height: 80%;
      overflow-y: auto;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    button {
      margin-top: 10px;
      padding: 5px 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
  `]
})
export class EnlargedViewComponent {
  @Input() item!: PortfolioItem;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}