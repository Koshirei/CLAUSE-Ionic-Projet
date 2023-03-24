import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';
import { Filesystem } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  public photos: picture[] = [];
  constructor() { }

  ngOnInit() {
  }

  async addPhoto(){
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality:100
    })

    this.photos.unshift({
      filepath: ' ',
      webViewPath: capture.webPath!
    })

    console.log(this.photos)
  }

  takePhoto(){
    this.addPhoto();
  }
}

interface picture {
  filepath: string,
  webViewPath: string;
};