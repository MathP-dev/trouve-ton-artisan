import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searchresults',
  imports: [CommonModule, RouterModule],
  templateUrl: './searchresults.component.html',
  styleUrl: './searchresults.component.css',
})
export class SearchresultsComponent implements OnInit, OnDestroy {
  searchResults: any[] = [];
  private searchSubscription: Subscription | null = null;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchService.searchResults$.subscribe(
      (results) => {
        this.searchResults = results;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
