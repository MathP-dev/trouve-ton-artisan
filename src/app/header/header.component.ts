import { SearchService } from './../search.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isMenuHidden = true;

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  artisans: any[] = [];
  searchTerm: string = '';

  constructor(private dataService: DataService, private searchService: SearchService, private Router: Router) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.artisans = data;
    });
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value.toLowerCase();

    if (this.searchTerm.trim() === '') {
      this.searchService.updateSearchResults([]);
      this.Router.navigate(['/']);
    } else {
      const filteredArtisans = this.artisans.filter(artisan =>
        artisan.name.toLowerCase().includes(this.searchTerm) ||
        artisan.specialty.toLowerCase().includes(this.searchTerm) ||
        artisan.location.toLowerCase().includes(this.searchTerm)
      );
      this.searchService.updateSearchResults(filteredArtisans);
      this.Router.navigate(['/search']);
    }
  }
}
