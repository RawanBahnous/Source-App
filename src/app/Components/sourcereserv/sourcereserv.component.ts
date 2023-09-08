import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { TranslationService } from 'src/app/Services/translation.service';

/**
 * The `SourcereservComponent` is responsible for capturing and handling user input related to source reservations.
 *
 * @remarks
 * This component allows users to select a month, reservation type, and constant time, and interact with translation services.
 *
 * @see {@link TranslationService}
 * @see {@link SharedService}
 */
@Component({
  selector: 'app-sourcereserv',
  templateUrl: './sourcereserv.component.html',
  styleUrls: ['./sourcereserv.component.css']
})
export class SourcereservComponent implements OnInit {

  isDropdownOpen: boolean = false;
  selectedMonth: string = "";
  availabletitle: string = "";
  availablemonth: string = "";
  Resourcetitle: string = "";
  Resourcetime: string = "";
  ResourceConstTime: string = "";
  Time: string = "";
  ResvTitle: string = "";
  ResevOne: string = "";
  ResvMulti: string = "";
  RecievedResv: string = "";
  day: any;
  availble: any;
  resvTime: string = '';
  resvCount: string = '';
  isLTR: any;

  constructor(private Tranlsation: TranslationService, private dataServ: SharedService) { }

  ngOnInit(): void {
    this.isLTR = this.Tranlsation.getCurrentDir();
    this.translateStrings([
      "availabletitle",
      "availablemonth",
      "Resourcetitle",
      "Resourcetime",
      "ResourceConstTime",
      "Time",
      "ResvTitle",
      "ResevOne",
      "ResvMulti",
      "RecievedResv"
    ]);
  }

  /**
   * Translates an array of strings using the `TranslationService` and assigns the translated values
   * to corresponding component properties.
   *
   * @param arrOfStrings - An array of translation keys to be translated and assigned.
   */
  translateStrings(arrOfStrings: string[]) {
    const translations: Record<string, string> = {};

    arrOfStrings.forEach((key: string) => {
      translations[key] = this.Tranlsation.getTranslation(key);
    });

    this.availabletitle = translations["availabletitle"];
    this.availablemonth = translations["availablemonth"];
    this.Resourcetitle = translations["Resourcetitle"];
    this.Resourcetime = translations["Resourcetime"];
    this.ResourceConstTime = translations["ResourceConstTime"];
    this.Time = translations["Time"];
    this.ResvTitle = translations["ResvTitle"];
    this.ResevOne = translations["ResevOne"];
    this.ResvMulti = translations["ResvMulti"];
    this.RecievedResv = translations["RecievedResv"];
  }

  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectMonth(month: string) {
    this.selectedMonth = month;
    this.isDropdownOpen = true;
    console.log(this.selectedMonth);
  }

  selctdConst = "";
  showConsttime = false;

  checkSelected() {
    if (this.selctdConst === "ResourceConstTime") {
      this.showConsttime = true;
    } else if (this.selctdConst === "Resourcetime") {
      this.showConsttime = false;
    } else {
      this.showConsttime = false;
    }
    console.log(this.selctdConst);
  }

  selctedResv = "";
  showReservations = false;

  checkResv() {
    if (this.selctedResv === "ResvMulti") {
      this.showReservations = true;
    } else if (this.selctedResv === "ResevOne") {
      this.showReservations = false;
    } else {
      this.showReservations = false;
    }
  }

  show: any = false;

  getData() {
    console.log(this.selectedMonth);
    console.log(this.selctdConst);
    console.log(this.day);
    console.log(this.selctedResv);
    this.availble = this.dataServ.setAvailability(this.day, this.selectedMonth, this.selctedResv, this.selctdConst, this.resvCount, this.resvTime);
    console.log(this.dataServ.getAvailability());
  }
}
