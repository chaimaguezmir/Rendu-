import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  titre: string = 'hello';
  person = { id: 1, name: 'test', age: 20 };

  quantity = 8;
  image = '/assets/test.jpg';
  height = 200;
  width = 200;
  Color = 'blue';
  acheter() {
    this.quantity--;
  }
  onInputChange(event: Event) {
    const el = event.target as HTMLInputElement;
    this.Color = el.value;
  }
}
