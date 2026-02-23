import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  };

  submitted = false;
  submitting = false;

  services = [
    'HotelPro (PMS)',
    'ChanAccount',
    'Channel Manager',
    'Guest Review System',
    'Point of Sale',
    'Custom Solution',
    'General Inquiry'
  ];

  onSubmit(): void {
    this.submitting = true;
    // Simulate form submission
    setTimeout(() => {
      this.submitting = false;
      this.submitted = true;
      this.formData = { name: '', email: '', company: '', service: '', message: '' };
    }, 1500);
  }

  resetForm(): void {
    this.submitted = false;
  }
}
