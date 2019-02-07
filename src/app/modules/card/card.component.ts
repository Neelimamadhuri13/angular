import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Track } from '../track';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  comments: string;
  @Input()
  track: Track;
  @Input()
  url: string;
  @Input()
  statusCode: number;
  @Input()
  watchListApi: boolean;
  @Output()
  addToWishList  = new EventEmitter();
  status: boolean;
  deleteFromWishlist: any;
  dialog: any;
  updateComments: any;
  constructor() { }

  ngOnInit() {
    console.log('data value in  card', this.track);
  }
  onClickMe(track: Track) {
    this.addToWishList.emit(track);
  }
  deleteTrack(track: Track) {
    console.log('track is 1234', track);
    this.deleteFromWishlist.emit(track);


  }
  addComments(actionType): void {
    console.log('in add comments');
  }
}
















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.scss']
// })
// export class CardComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
