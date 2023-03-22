import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color : 'primary' | 'secondary' | 'success' | 'gray-light' | 'sky' = 'gray-light';

  constructor() { }

  ngOnInit(): void {
  }

  get colors() {
    return {
      'bg-success-700': this.color === 'success',
      'hover: bg-success-800': this.color === 'success',
      'focus: ring-success-300': this.color === 'success',
      'bg-primary-700': this.color === 'primary',
      'hover: bg-primary-800': this.color === 'primary',
      'focus: ring-primary-300': this.color === 'primary',
      'bg-secondary-700': this.color === 'secondary',
      'hover: bg-secondary-800': this.color === 'secondary',
      'focus: ring-secondary-300': this.color === 'secondary',
      'bg-sky-700': this.color === 'sky',
      'hover: bg-sky-800': this.color === 'sky',
      'focus: ring-sky-300': this.color === 'sky',
      'bg-gray-200': this.color === 'gray-light',
      'hover: bg-gray-300': this.color === 'gray-light',
      'focus: ring-gray-300': this.color === 'gray-light',
    };
  }
}
