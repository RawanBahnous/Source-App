import { Component, Input, OnInit } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Worksource } from 'src/app/Models/worksource.model';
import { SharedService } from 'src/app/Services/shared.service';
import { TranslationService } from 'src/app/Services/translation.service';
import { Store, select } from '@ngrx/store';
import * as WorksourceActions from '../../Store/worksource/Actions/worksource.actions';
import * as WorksourceSelectors from '../../Store/worksource/Selectors/worksource.selectors';


/**
 * The `NavbarComponent` is responsible for managing the application's navigation bar.
 *
 * @remarks
 * This component handles theme toggling, language switching, and displays information about added resources.
 *
 * @example
 * ```html
 * <app-navbar></app-navbar>
 * ```
 *
 * @see {@link TranslationService}
 * @see {@link SharedService}
 * @see {@link Store}
 */



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  light:boolean = true;

  toggleTheme() {
    this.light = !this.light;
  }

  worksources$: Observable<Worksource[]> | undefined;
  currentLang:string = 'ar';
  changing:boolean = false;
  title:string = "";
  btnremove:string="";
  btnsave:string="";
  notactive:string="";
  active:string="";
  // @Input() callback: (() => void) | undefined;
  isDir:any;
  showdata:boolean = false;
  addedResource:any;
  canotAddError:any = false;
  timeSlots$:any;
  isRTL:any;
  addsentence:any;
  resourceData:any;
  schedulefortheDay:any;
  imgsrc:string|undefined;

  constructor(private Tranlsation:TranslationService,private dataServ:SharedService,private store:Store<Worksource>){
    this.Tranlsation.setLanguage(this.currentLang);
    this.isRTL = Tranlsation.getCurrentDir();

    console.log("direction is in source",this.isRTL);

  }

  ngOnInit(): void {
    this.translateStrings([
      "title",
      "btnremove",
      "btnsave",
      "notbtn",
      "btn",
      "resourceAdded",
      "resourceData",
      "schedulefortheDay"
    ]);
    this.store.pipe(select(WorksourceSelectors.selectAllWorksources),
    ).subscribe(
      (data)=>{
        console.log("data dispatched from store ",data);
        this.addedResource=data;
        if (this.addedResource === null) {
          console.log("there is no Data");
        }
      },
      (error)=>{
        console.log(error);
      }
    );

  // this.save;

  }

  translateStrings(arrOfStrings: string[]) {
    const translations: Record<string, string> = {};

    arrOfStrings.forEach((key: string) => {
      translations[key] = this.Tranlsation.getTranslation(key);
    });

    this.title = translations["title"];
    this.btnremove = translations["btnremove"];
    this.btnsave = translations["btnsave"];
    this.notactive = translations["notbtn"];
    this.active = translations["btn"];
    this.addsentence = translations["resourceAdded"];
    this.resourceData = translations["resourceData"];
    this.schedulefortheDay = translations["schedulefortheDay"];
  }


  changeLang() {
    this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.Tranlsation.setLanguage(this.currentLang);
    this.isRTL = this.Tranlsation.getCurrentDir();
    this.changing = !this.changing;
  }


  save() {
    let newResource = this.dataServ.getResource();
    console.log("New resource added to the system",newResource);
    console.log("day",newResource.availablity.day);
    this.store.dispatch(WorksourceActions.addWorkSource({ worksource: newResource }));
    this.showdata = true;
  }

  close(){
    this.showdata = false;
    this.canotAddError = false;
  }

}
