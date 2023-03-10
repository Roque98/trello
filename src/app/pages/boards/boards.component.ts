import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBox, faWaveSquare, faClock, faChevronUp, faChevronDown, faHeart, faBorderAll, faUsers, faCog } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faCog = faCog;

  items = [
    {
      label: 'My Boards',
      items: [
        {
          label: 'My Boards',
        },
        {
          label: 'Starred Boards',
        },
      ],
    },
    {
      label: 'My Boards 2',
      items: [
        {
          label: 'My Boards 2.1',
        },
        {
          label: 'Starred Boards 2.2',
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
