import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  pillars = [
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Custom ERP & CRM',
      desc: 'Tailored enterprise solutions built to match your exact workflow and operational needs.'
    },
    {
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      title: 'Cloud-Based Platform',
      desc: 'Secure, scalable cloud infrastructure with real-time access from anywhere in the world.'
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Business Intelligence',
      desc: 'Transform raw data into actionable insights with comprehensive reporting and analytics.'
    },
    {
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
      title: '24/7 Certified Support',
      desc: 'Round-the-clock assistance from our team of certified consultants to keep your business running.'
    },
  ];
}
