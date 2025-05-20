import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { EmailjsService } from './../emailjs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artisan-detail',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.css'],
})
export class ArtisanDetailComponent implements OnInit {
  artisan: any;
  contactForm: FormGroup;

  @ViewChild('contactFormRef') contactFormRef!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private EmailjsService: EmailjsService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

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

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      this.EmailjsService.sendEmail(templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email envoyé avec succès!');
          this.contactForm.reset();
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Échec de l\'envoi de l\'email.');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
