import { Component, OnInit } from '@angular/core';
import { ITime } from 'src/app/Models/itime';
import { IWeek } from 'src/app/Models/iweek';
import { SharedService } from 'src/app/Services/shared.service';
import { TranslationService } from 'src/app/Services/translation.service';
import { WeekWorkService } from 'src/app/Services/weekwork.service';
// import { WeekWorkService } from 'src/app/Services/week-work.service';

/**
 * The `WorktimeComponent` is responsible for managing and displaying worktime settings.
 *
 * @remarks
 * This component provides users with the ability to configure their work hours for each day of the week.
 *
 * @example
 * ```
 * <app-worktime></app-worktime>
 * ```
 *
 * @see {@link TranslationService}
 * @see {@link SharedService}
 * @see {@link WeekWorkService}
 */
@Component({
  selector: 'app-worktime',
  templateUrl: './worktime.component.html',
  styleUrls: ['./worktime.component.css']
})
export class WorktimeComponent implements OnInit {

  // Translation strings
  worktimetitle: string = "";
  worktimeDesc: string = "";
  advSetting: string = "";
  TraditionalSetting: string = "";
  startTime: string = "";
  endTime: string = "";
  chooseTime: string = "";
  am: string = "";
  hours: string = "";
  Minutes: string = "";
  currentTime: string = "";
  saveTime: string = "";

  isLTR: any;
  Days: { [key: string]: any[] } = {};

  constructor(private Tranlsation: TranslationService,
    private Work:WeekWorkService,
    private dataServ: SharedService
  ) { }

  ngOnInit(): void {
    // Translate UI strings
    this.translateStrings([
      "worktimetitle",
      "worktimeDesc",
      "advSetting",
      "TraditionalSetting",
      "startTime",
      "endTime",
      "chooseTime",
      "am",
      "hours",
      "Minutes",
      "currentTime",
      "saveTime"
    ]);

    // Fetch direction setting
    this.isLTR = this.Tranlsation.getCurrentDir();
  }

  weekdays: IWeek[] = this.Work.getAllWeek();
  Time: ITime[] = this.Work.getAllTime();

  showTimeSlots: boolean[] = new Array(this.weekdays.length).fill(false);

  toggleTimeSlots(index: number) {
    this.showTimeSlots[index] = !this.showTimeSlots[index];
  }

  showTime: boolean = true;
  openTimes(d: any) {
    this.showTime = false;
  }

  closeTimes() {
    this.showTime = true;
  }

  showCalender: boolean[] = new Array(this.weekdays.length).fill(false);

  addCalender(index: number) {
    this.showCalender[index] = true;
  }

  delCalender(index: number) {
    this.showCalender[index] = false;
  }

  checkHaveTimeSlots(index: number) {
    const day = this.weekdays.find(d => d.timeSlots);
    console.log(day);
    console.log(day?.timeSlots.length);
  }

  getData(index: number) {
    const day = this.weekdays[index];
    console.log("day and time slots", { name: day.name, timeSlots: day.timeSlots });
    this.dataServ.setTime(day);
  }

  /**
   * Translate an array of strings and assign the translations to corresponding properties.
   * @param arrOfStrings - Array of translation keys to be translated.
   */
  translateStrings(arrOfStrings: string[]) {
    const translations: Record<string, string> = {};

    arrOfStrings.forEach((key: string) => {
      translations[key] = this.Tranlsation.getTranslation(key);
    });

    this.worktimetitle = translations["worktimetitle"];
    this.worktimeDesc = translations["worktimeDesc"];
    this.advSetting = translations["advSetting"];
    this.TraditionalSetting = translations["TraditionalSetting"];
    this.startTime = translations["startTime"];
    this.endTime = translations["endTime"];
    this.chooseTime = translations["chooseTime"];
    this.am = translations["am"];
    this.hours = translations["hours"];
    this.Minutes = translations["Minutes"];
    this.currentTime = translations["currentTime"];
    this.saveTime = translations["saveTime"];
  }
}
