import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  scrollToSolutions(): void {
    const el = document.getElementById('solutions');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToContact(): void {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  features = [
    { icon: '🏨', label: 'Property Management' },
    { icon: '📊', label: 'Smart Analytics' },
    { icon: '🔄', label: 'Channel Manager' },
    { icon: '💳', label: 'Point of Sale' },
  ];
}
