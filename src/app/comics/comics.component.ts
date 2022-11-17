import { Component, Input, OnInit } from '@angular/core';
import { comicList } from './comics';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comicList: comicList[] = [
    {
      comicId: '1',
      Title: 'Secret Wars #1',
      Publisher: 'Panini',
      Group: 1,
      Category: 'Marvel',
      Serie: 'Secret Wars',
      Published: new Date(),
      Rating: 4,
      cover: '/assets/comics-test.jpg',
    },
    {
      comicId: '2',
      Title: 'Secret Wars #2',
      Publisher: 'Panini',
      Group: 1,
      Category: 'Marvel',
      Serie: 'Secret Wars',
      Published: new Date(),
      Rating: 4,
      cover:
        'https://www.mdcu-comics.fr/upload/comics/covers/fr/img_comics_9642_secret-wars-2-couv-2-2.jpg?1666727369',
    },
    {
      comicId: '3',
      Title: 'Secret Wars #3',
      Publisher: 'Panini',
      Group: 1,
      Category: 'Marvel',
      Serie: 'Secret Wars',
      Published: new Date(),
      Rating: 4,
      cover:
        'https://media.senscritique.com/media/000014277494/300/Plus_dure_sera_la_chute_Secret_Wars_tome_3.jpg',
    },
    {
      comicId: '4',
      Title: 'Secret Wars #4',
      Publisher: 'Panini',
      Group: 1,
      Category: 'Marvel',
      Serie: 'Secret Wars',
      Published: new Date(),
      Rating: 4,
      cover:
        'https://media.senscritique.com/media/000014888010/300/Le_roi_des_morts_Secret_Wars_tome_4.jpg',
    },
    {
      comicId: '5',
      Title: 'Secret Wars #5',
      Publisher: 'Panini',
      Group: 1,
      Category: 'Marvel',
      Serie: 'Secret Wars',
      Published: new Date(),
      Rating: 4,
      cover:
        'https://media.senscritique.com/media/000015358286/300/Au_dela_Secret_Wars_tome_5.jpg',
    },
    {
      comicId: '6',
      Title: 'Secret Wars Zombies #1',
      Publisher: 'Panini',
      Group: 1,
      Category: 'Marvel',
      Serie: 'Secret Wars',
      Published: new Date(),
      Rating: 4,
      cover:
        'https://media.senscritique.com/media/000013327765/300/Voyage_au_coeur_de_la_misere_Secret_Wars_Marvel_Zombies_tome.jpg',
    },
    {
      comicId: '7',
      Title: 'Secret Wars Zombies #2',
      Publisher: 'Panini',
      Group: 1,
      Category: 'Marvel',
      Serie: 'Secret Wars',
      Published: new Date(),
      Rating: 4,
      cover:
        'https://media.senscritique.com/media/000013758638/300/D_etranges_associes_Secret_Wars_Marvel_Zombies_tome_2.jpg',
    },
    {
      comicId: '8',
      Title: 'Secret Wars Zombies #3',
      Publisher: 'Panini',
      Group: 1,
      Category: 'Marvel',
      Serie: 'Secret Wars',
      Published: new Date(),
      Rating: 4,
      cover:
        'https://media.senscritique.com/media/000014276729/300/Chasseurs_Secret_Wars_Marvel_Zombies_tome_3.jpg',
    },
    {
      comicId: '9',
      Title: 'Secret Wars Zombies #4',
      Publisher: 'Panini',
      Group: 1,
      Category: 'Marvel',
      Serie: 'Secret Wars',
      Published: new Date(),
      Rating: 4,
      cover:
        'https://media.senscritique.com/media/000014887996/300/Entre_le_chagrin_et_le_neant_Secret_Wars_Marvel_Zombies_tome.jpg',
    },
    {
      comicId: '1',
      Title: 'Secret Wars Zombies #5',
      Publisher: 'Panini',
      Group: 1,
      Category: 'Marvel',
      Serie: 'Secret Wars',
      Published: new Date(),
      Rating: 4,
      cover:
        'https://media.senscritique.com/media/000015358777/300/Une_alliance_contre_nature_Secret_Wars_Marvel_Zombies_tome_5.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  displayCard() {
    let card = document.getElementById('read1');
    if (card) card.style.visibility == 'visible';
    console.log(card?.style.visibility);
  }
}
