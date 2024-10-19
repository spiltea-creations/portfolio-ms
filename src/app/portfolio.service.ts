import { Injectable } from '@angular/core';

export interface PortfolioItem {
  id: number;
  name: string;
  type: string;
  medium: string;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioItems: PortfolioItem[] = [
    { id: 1, name: 'Sunset Landscape', type: 'Painting', medium: 'Oil on Canvas', description: 'A vibrant sunset scene', imageUrl: 'https://picsum.photos/id/10/300/200' },
    { id: 2, name: 'Abstract Sculpture', type: 'Sculpture', medium: 'Bronze', description: 'Modern abstract form', imageUrl: 'https://picsum.photos/id/20/300/200' },
    { id: 3, name: 'Portrait Study', type: 'Drawing', medium: 'Charcoal', description: 'Detailed portrait study', imageUrl: 'https://picsum.photos/id/30/300/200' },
    { id: 4, name: 'Digital Illustration', type: 'Digital Art', medium: 'Digital', description: 'Colorful digital artwork', imageUrl: 'https://picsum.photos/id/40/300/200' },
    { id: 5, name: 'Nature Photography', type: 'Photography', medium: 'Digital Photo', description: 'Stunning nature scene', imageUrl: 'https://picsum.photos/id/50/300/200' },
  ];

  getPortfolioItems(): PortfolioItem[] {
    return this.portfolioItems;
  }

  searchPortfolioItems(term: string): PortfolioItem[] {
    term = term.toLowerCase();
    return this.portfolioItems.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.type.toLowerCase().includes(term) ||
      item.medium.toLowerCase().includes(term)
    );
  }

  getItemById(id: number): PortfolioItem | undefined {
    return this.portfolioItems.find(item => item.id === id);
  }
}