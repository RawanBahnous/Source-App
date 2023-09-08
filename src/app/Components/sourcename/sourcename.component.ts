import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { TranslationService } from 'src/app/Services/translation.service';

/**
  * This code responsible for Translating any sentences in Templete.
  * - and get The Data Captured from Template
  * - Initializing some Data before using them
  * - and Upload Img
  *
  *
  *
  *
  * Services injectable used here :
  * @param Tranlsation - An instance of the TranslationService for translations
  * @param dataServ - An instance of the SharedService for shared data that gets from Template.
*/

@Component({
  selector: 'app-sourcename',
  templateUrl: './sourcename.component.html',
  styleUrls: ['./sourcename.component.css']
})
export class SourcenameComponent implements OnInit{

  sourcecardtitle:string = "";
  sourceplaceholder:string="";
  sourcevalue:string="";
  imgSrc :any | ArrayBuffer = "assets/images/person.png";
  isLTR:any;

  constructor(private Tranlsation:TranslationService,private dataServ:SharedService){}
  ngOnInit(): void {
    this.sourcecardtitle = this.Tranlsation.getTranslation("sourcecardtitle");
    this.sourceplaceholder = this.Tranlsation.getTranslation("sourceplaceholder");
    this.sourcevalue = this.Tranlsation.getTranslation("sourcevalue");
    this.isLTR =  this.Tranlsation.getCurrentDir();
    console.log("direction is in source",this.isLTR);
  }

  //get data
  srcname:string='';
  getData(){
    this.dataServ.setSourceName(this.srcname);
    this.sourcevalue = this.srcname;
    console.log(this.dataServ.getSourceName());
  }

  UploadImg(e:any){
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.imgSrc = event.target.result;
      this.dataServ.setImage(this.imgSrc);
      console.log(this.dataServ.getImage());
      }
    }
  }

}
