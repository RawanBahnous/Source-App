import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { TranslationService } from 'src/app/Services/translation.service';


/**
 * The `SourcetypeComponent` is responsible for capturing and handling user input related to source types.
 *
 *
 *
 * This component allows users to select a source type
 *
 *
 * @see {@link TranslationService}
 * @see {@link SharedService}
 */


@Component({
  selector: 'app-sourcetype',
  templateUrl: './sourcetype.component.html',
  styleUrls: ['./sourcetype.component.css']
})
export class SourcetypeComponent implements OnInit{

  srctype:string='';
  sourcetypetitle:string = "";
  sourcetypeone:string="";
  sourcetypetwo:string="";
  isLTR:any;

  constructor(private Tranlsation:TranslationService,private dataServ:SharedService){}

  ngOnInit(): void {
    this.sourcetypetitle = this.Tranlsation.getTranslation("sourcetypetitle");
    this.sourcetypeone = this.Tranlsation.getTranslation("sourcetypeone");
    this.sourcetypetwo = this.Tranlsation.getTranslation("sourcetypetwo");
    this.isLTR =  this.Tranlsation.getCurrentDir();
  }


  getData(){
    this.dataServ.setSourceType(this.srctype);
    console.log(this.srctype);
  }
}
