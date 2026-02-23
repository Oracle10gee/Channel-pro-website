import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  activeIndex = 0;
  autoSlideInterval: ReturnType<typeof setInterval> | null = null;

  testimonials = [
    {
      name: 'Adebayo O.',
      role: 'Project Manager',
      company: 'Lagos Hospitality Group',
      avatar: 'AO',
      avatarColor: '#2563EB',
      rating: 5,
      text: 'ChannelPro transformed how we manage our properties. The user-friendly platform and intuitive design made resource allocation and progress tracking effortless. Our team adopted it within days and saw immediate improvements in productivity.',
    },
    {
      name: 'Chuka N.',
      role: 'Software Developer',
      company: 'TechBridge Solutions',
      avatar: 'CN',
      avatarColor: '#7C3AED',
      rating: 5,
      text: 'The top-notch tools and incredibly responsive support team have significantly improved our operational efficiency. The integration capabilities are outstanding, and the API documentation is clear and comprehensive.',
    },
    {
      name: 'Bolaji A.',
      role: 'Small Business Owner',
      company: 'Bolaji\'s Boutique Hotel',
      avatar: 'BA',
      avatarColor: '#10B981',
      rating: 5,
      text: 'As a small business owner, I was skeptical at first, but ChannelPro\'s software streamlined all of my processes, saving me both time and money. The ROI was evident within the first month of deployment.',
    },
    {
      name: 'Nkem O.',
      role: 'HR Manager',
      company: 'Apex Hotels & Resorts',
      avatar: 'NO',
      avatarColor: '#F59E0B',
      rating: 5,
      text: 'The customization options available are impressive. We manage all employee information in one centralized location, which has dramatically reduced administrative overhead and improved our HR processes.',
    },
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  goTo(index: number): void {
    this.activeIndex = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  stars(n: number): number[] {
    return Array(n).fill(0);
  }
}
