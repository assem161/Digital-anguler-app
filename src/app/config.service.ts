import { Injectable } from '@angular/core';

const confgirationssss = {
  frontcontent : {
    title : 'DIGITAL DESIGN',
    describtion : 'WE ARE GIVE ANTHOR MEANING OF DESIGN'
  },
  worksImages : {
  works :  [
      "assets/images/black.jpg",
      "assets/images/NINJA.jpg",
      "assets/images/posterstory.jpg",
      "assets/images/postervelife.jpg",
      "assets/images/Posterbd.jpg",
      "assets/images/poster12.jpg",
      "assets/images/Posterds.jpg",
      "assets/images/posterdsa.jpg",
      "assets/images/s1.jpg",
      "assets/images/space.jpg",
      "assets/images/the lastfight.jpg",
      "assets/images/THE saver.jpg",
    ]
  },
  aboutContent : {
    title : 'about us',
    describtion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  },
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getfrontContent(){
    return confgirationssss;
  }

  getWorks(){
    return confgirationssss;
  }
  getAboutContent(){
    return confgirationssss;
  }

}
