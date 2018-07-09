import { Input, Output, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
    <button (click)="handleClick()">
      {{label}}
    </button>
  `,
  styles: [`
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: #bada55;
      font-size: 20px;
    }`
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private _count = 0;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this._count++;
    this.action.emit(this._count);
  }

}
