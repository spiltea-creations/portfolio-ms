import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioListComponent } from './app/portfolio-list/portfolio-list.component';
import { SearchBarComponent } from './app/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortfolioListComponent, SearchBarComponent],
  template: `
    <h1>My Portfolio</h1>
    <app-search-bar (searchChanged)="onSearchChanged($event)"></app-search-bar>
    <app-portfolio-list [searchTerm]="searchTerm"></app-portfolio-list>
  `,
})
export class App {
  searchTerm: string = '';

  onSearchChanged(term: string) {
    this.searchTerm = term;
  }
}

bootstrapApplication(App, {
  providers: [
    provideRouter([]),
  ]
});