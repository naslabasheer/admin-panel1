import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = false;
  constructor() { }
  isDarkTheme(): boolean {
    return this.isDarkMode;
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    // You can also save the theme preference to local storage for persistence.
    // localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
}
