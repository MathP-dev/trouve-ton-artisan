import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  artisans: any[] = [];
  category: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.loadArtisans();
    });
  }

  loadArtisans(): void {
    this.dataService.getData().subscribe((data) => {
      this.artisans = data.filter(
        (artisan) => artisan.category === this.category
      );
    });
  }
}
