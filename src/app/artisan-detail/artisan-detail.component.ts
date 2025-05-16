import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-artisan-detail',
  imports: [],
  templateUrl: './artisan-detail.component.html',
  styleUrl: './artisan-detail.component.css',
})
export class ArtisanDetailComponent implements OnInit {
  artisan: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const artisanId = params['id'];
      this.loadArtisan(artisanId);
    });
  }

  loadArtisan(id: string): void {
    this.dataService.getData().subscribe((data) => {
      this.artisan = data.find((artisan) => artisan.id === id);
    });
  }
}
