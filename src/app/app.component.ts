import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div><h4>{{PageTitle}}</h4>
  <pm-product></pm-product>
  </div>`
})
export class AppComponent {
  PageTitle = 'Product-View';
  title: any;
}
