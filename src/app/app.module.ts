import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

// import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
  import { Injector } from '@angular/core';
@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [ButtonComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('custom-button', customButton);
  }

  ngDoBootstrap() { }
}
