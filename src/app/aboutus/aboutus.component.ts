import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent{
  public resolved: boolean = false;
  deskripsi: any = 'Loading..';
  constructor(private spinner: NgxSpinnerService) {
    window.scrollTo(0, 0);
    this.spinner.show();
    var count = 0;
    var a = setInterval(() => {
      count++;
      this.spinner.hide();
      this.resolved = true;
      if(count = 1){
        clearInterval(a);
      }
    },100);
  }
  name: any;
  email: any;
  pesan: any;
  sukses: any;
  load: any;
  public  sendEmail(e: Event) {
    this.load = null;
    this.name = null;
    this.pesan = null;
    this.email = null;
    this.sukses = 'Your Message In Progress';
    e.preventDefault();
    emailjs.sendForm('service_f8er4jj', 'template_le007ag', e.target as HTMLFormElement, 'Pz1kVyNAMBldwqz7E')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.load = null;
        this.name = null;
        this.pesan = null;
        this.email = null;
        this.sukses = 'Your Message Has Been Sent';
      }, (error) => {
        console.log(error.text);
      });
  }

}
