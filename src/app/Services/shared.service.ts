import { Injectable } from '@angular/core';
import { Worksource } from '../Models/worksource.model';
import { IWeek } from '../Models/iweek';


/**
 * The `SharedService` is responsible for managing shared data within the application.
 *
 *
 *
 * It provides methods to set and retrieve data related to source names, source types,
 * availability, time slots.
 *
 * This service is designed to centralize data management and communication
 * between different components.
*/

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private sourceName: string = '';
  private sourceType: string = '';
  private imgFile: any = '';

  private Availability = {
    availDay: '',
    availMonth: '',
    Res: '',
    manyper:'',
    resvCount: '',
    resvTime: '',
  }
  private Time:IWeek = {
    name : '',
    timeSlots : [
      {
        from:'',
        to:''
      }
    ]
  };

  setSourceName(newname: string): void {
    this.sourceName = newname;
  }

  setSourceType(type: string): void {
    this.sourceType = type;
  }
  setAvailability(availDay: string, availMonth: string, Res: string, availMany:string,resvCount:string,resvTime:string): void {
    this.Availability.availDay = availDay;
    this.Availability.availMonth = availMonth;
    this.Availability.Res = Res;
    this.Availability.manyper = availMany;
    this.Availability.resvCount = resvCount;
    this.Availability.resvTime = resvTime;
  }

  setTime(time: IWeek) {
    this.Time = time;
  }

  setImage(imgFile:any){
    this.imgFile = imgFile;
  }

  getImage(): any{
    return this.imgFile;
  }

  getSourceName(): string {
    return this.sourceName;
  }

  getSourceType(): string {
    return this.sourceType;
  }

  getAvailability(): any {
    return this.Availability;
  }

  getTime(): IWeek {
    return this.Time;
  }

  getResource(): Worksource{
    let newResource:Worksource = {
      srcName: this.sourceName,
      srcType: this.sourceType,
      availablity: {
        Resev: this.Availability.Res,
        day: this.Availability.availDay,
        month: this.Availability.availMonth,
        manyper: this.Availability.manyper,
        resvCount: this.Availability.resvCount,
        resvTime: this.Availability.resvTime,
      },
      workTime: {
        name: this.Time.name,
        timeSlots: this.Time.timeSlots.map((slot) => {
          return {
            from: slot.from,
            to: slot.to,
        };
      })
    }

  };
    return newResource;
}

  resetData() {
    this.sourceType = '';
    this.sourceName = '';
    this.Availability.availDay = '';
    this.Availability.availMonth = '';
    this.Availability.Res = '';
    this.Availability.manyper = '';
    this.Time;
  }
}
