import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pr-input-page',
  templateUrl: './pr-input-page.component.html',
  styleUrls: ['./pr-input-page.component.css']
})
export class PrInputPageComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileChanged(event : any) {
    // console.log(event);
    
    this.selectedFile = event.target.files[0] as File
    // console.log(file);
    
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('http://localhost:3887/index/upload', formData).subscribe(
        (response) => {
          console.log('Upload successful:', response);
          // Handle success
        },
        (error) => {
          console.error('Upload failed:', error);
          // Handle error
        }
      );
    }
  }
}
