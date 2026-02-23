import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  solutions = [
    {
      icon: 'hotel',
      tag: 'PMS',
      title: 'HotelPro',
      subtitle: 'Property Management System',
      description: 'Streamline every aspect of your hotel operations – from reservation capture and guest check-in to housekeeping and billing – all in one unified platform.',
      features: ['Reservation Management', 'Guest Check-in/Check-out', 'Room Inventory Control', 'Billing & Invoicing'],
      color: '#2563EB',
      gradient: 'linear-gradient(135deg, #2563EB, #7C3AED)'
    },
    {
      icon: 'accounting',
      tag: 'Finance',
      title: 'ChanAccount',
      subtitle: 'Smart Accounting Suite',
      description: 'Automate your financial workflows with powerful accounting tools that process data, generate reports, and give you a clear picture of your business health.',
      features: ['Automated Bookkeeping', 'Financial Reporting', 'Tax Management', 'Expense Tracking'],
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #2563EB)'
    },
    {
      icon: 'channel',
      tag: 'Distribution',
      title: 'Channel Manager',
      subtitle: 'Multi-Channel Distribution',
      description: 'Connect your property to every major online travel agency and booking platform. Sync availability and rates in real-time across all channels seamlessly.',
      features: ['OTA Integration', 'Real-time Rate Sync', 'Booking Engine', 'Yield Management'],
      color: '#7C3AED',
      gradient: 'linear-gradient(135deg, #7C3AED, #EC4899)'
    },
    {
      icon: 'review',
      tag: 'Reputation',
      title: 'Guest Review System',
      subtitle: 'Reputation Management',
      description: 'Capture, analyze, and respond to guest feedback across all platforms. Turn reviews into your competitive advantage with AI-powered sentiment analysis.',
      features: ['Feedback Collection', 'Sentiment Analysis', 'Response Management', 'Rating Benchmarking'],
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981, #06B6D4)'
    },
    {
      icon: 'pos',
      tag: 'Retail',
      title: 'Point of Sale',
      subtitle: 'Sales & Inventory',
      description: 'A complete POS solution for restaurants, bars, and retail outlets within your property. Manage sales, inventory, and staff all from one intuitive interface.',
      features: ['Sales Processing', 'Inventory Management', 'Staff Management', 'Daily Reconciliation'],
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)'
    },
    {
      icon: 'custom',
      tag: 'Custom',
      title: 'Other Services',
      subtitle: 'Bespoke Solutions',
      description: 'Every business is unique. Our team of expert developers builds custom ERP, CRM, and Business Intelligence solutions tailored precisely to your requirements.',
      features: ['Custom Development', 'System Integration', 'Business Intelligence', 'Consultancy Services'],
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6, #2563EB)'
    },
  ];
}
