import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';
import { Photo } from '../models/photo.interface';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photos: Photo[] = [];

  constructor() {}
  

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath
    });

  }

  public getPhotos(): Photo[] {
    return this.photos;
  }

  private async savePicture(cameraPhoto: CameraPhoto) { }


}
