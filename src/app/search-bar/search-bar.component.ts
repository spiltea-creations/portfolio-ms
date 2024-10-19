import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="search-bar">
      <input
        type="text"
        [(ngModel)]="searchTerm"
        (ngModelChange)="onSearchChange()"
        placeholder="Search by type, name, or medium"
      >
    </div>
  `,
  styles: [`
    .search-bar {
      margin-bottom: 20px;
    }
    input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  `]
})
export class SearchBarComponent {
  @Output() searchChanged = new EventEmitter<string>();
  searchTerm: string = '';

  onSearchChange() {
    this.searchChanged.emit(this.searchTerm);
  }
}