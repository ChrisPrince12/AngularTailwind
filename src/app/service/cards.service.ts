import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cardDetail: any = [
    {
    title: "List of Ammendment",
    imageUrl: "/assets/img/dec.png",
    desc: "There are 10 Ammendment"
  },
    {
      title: "List of Church Rules",
      imageUrl: "/assets/img/dec.png",
      desc: "There are 6 Church Rules"
    },
    {
      title: "List of Coding Rules",
      imageUrl: "/assets/img/dec.png",
      desc: "There are * Coding Rules"
    },
    {
      title: "List of Chatting Rules",
      imageUrl: "/assets/img/dec.png",
      desc: "There are * Chatting Rules"
    }
]

  constructor() { }
}
