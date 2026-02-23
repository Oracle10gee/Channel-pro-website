import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent implements AfterViewInit {
  stats = [
    { value: 500, suffix: '+', label: 'Support Tickets Resolved', icon: '🎯', description: 'Issues resolved by our support team' },
    { value: 98, suffix: '%', label: 'Client Satisfaction Rate', icon: '⭐', description: 'Average rating from our clients' },
    { value: 2, suffix: 'M+', label: 'Revenue Saved', icon: '💰', description: 'Money saved by our clients annually' },
    { value: 15, suffix: '+', label: 'Industry Awards', icon: '🏆', description: 'Recognition for excellence in software' },
  ];

  displayValues: number[] = [];
  animated = false;

  constructor(private el: ElementRef) {
    this.displayValues = this.stats.map(() => 0);
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animated) {
            this.animated = true;
            this.animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(this.el.nativeElement);
  }

  animateCounters(): void {
    this.stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), stat.value);
        this.displayValues[index] = current;
        if (step >= steps) {
          clearInterval(timer);
          this.displayValues[index] = stat.value;
        }
      }, duration / steps);
    });
  }
}
