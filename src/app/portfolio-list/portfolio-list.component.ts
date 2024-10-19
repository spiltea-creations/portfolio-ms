import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, PortfolioItem } from '../portfolio.service';
import { EnlargedViewComponent } from '../enlarged-view/enlarged-view.component';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [CommonModule, EnlargedViewComponent],
  template: `
    <div class="portfolio-list">
      <div *ngFor="let item of filteredItems" class="portfolio-item">
        <img [src]="item.imageUrl" [alt]="item.name" (click)="openEnlargedView(item)">
        <h2>{{ item.name }}</h2>
        <p>Type: {{ item.type }}</p>
        <p>Medium: {{ item.medium }}</p>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <app-enlarged-view *ngIf="selectedItem" [item]="selectedItem" (close)="closeEnlargedView()"></app-enlarged-view>
  `,
  styles: [`
    .portfolio-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    .portfolio-item {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 5px;
    }
    img {
      width: 100%;
      height: auto;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    img:hover {
      transform: scale(1.05);
    }
  `]
})
export class PortfolioListComponent implements OnChanges {
  @Input() searchTerm: string = '';
  filteredItems: PortfolioItem[] = [];
  selectedItem: PortfolioItem | null = null;

  constructor(private portfolioService: PortfolioService) {
    this.filteredItems = this.portfolioService.getPortfolioItems();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchTerm']) {
      this.filteredItems = this.portfolioService.searchPortfolioItems(this.searchTerm);
    }
  }

  openEnlargedView(item: PortfolioItem) {
    this.selectedItem = item;
  }

  closeEnlargedView() {
    this.selectedItem = null;
  }
}