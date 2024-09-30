import { Component } from '@angular/core';
import { category } from 'src/models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {
  title: string = '';
  categories: category[] = [
    {
      id: 1,
      title: 'Grand électroménager',
      image: 'assets/categorie_electromenager.jpg',
      dsecription: 'Lorem Ipsum is simply',
      available: true,
    },
    {
      id: 2,
      title: 'Petit électroménager',
      image: 'assets/categorie_petit_electromenager.jpg',
      dsecription: 'Lorem Ipsum is simply',
      available: true,
    },
    {
      id: 3,
      title: 'Produits informatiques',
      image: 'assets/categorie_petit_electromenager.jpg',
      dsecription: 'Lorem Ipsum is simply',
      available: true,
    },
    {
      id: 4,
      title: 'Smart Phones',
      image: 'assets/categorie_petit_electromenager.jpg',
      dsecription: 'Lorem Ipsum is simply',
      available: true,
    },
    {
      id: 5,
      title: 'TV, images et son',
      image: 'assets/categorie_petit_electromenager.jpg',
      dsecription: 'Lorem Ipsum is simply',
      available: true,
    },
    {
      id: 6,
      title: 'Produits voiture',
      image: 'assets/categorie_petit_electromenager.jpg',
      dsecription: 'Lorem Ipsum is simply',
      available: false,
    },
  ];
  afficherDescription(id: number) {
    //foreach
    this.categories.forEach((element) => {
      if (element.id == id) {
        alert(element.dsecription);
      }
    });
    //filter
    let category = this.categories.filter((element) => element.id == id)[0];
    alert(category.dsecription);
  }
}
