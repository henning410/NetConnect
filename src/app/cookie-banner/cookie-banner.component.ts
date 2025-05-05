import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  imports: [NgIf],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.css'
})
export class CookieBannerComponent {
  showBanner = false;

  ngOnInit(): void {
    const consent = localStorage.getItem('cookieConsent');
    this.showBanner = consent !== 'true';
  }

  acceptCookies(): void {
    localStorage.setItem('cookieConsent', 'true');
    this.showBanner = false;
  }
}
