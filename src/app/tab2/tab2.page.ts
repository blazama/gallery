import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/photo.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  public photos: Photo[] = [];

  constructor(public photoSvc: PhotoService) {
    this.photos = photoSvc.getPhotos();
   }

  public newPhoto(): void {
    this.photoSvc.addNewToGallery();
  }

}
