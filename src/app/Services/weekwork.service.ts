import { Injectable } from '@angular/core';
import { ITime } from '../Models/itime';
import { IWeek } from '../Models/iweek';


/**
 * The `WeekWorkService` provides pre defined data for weekdays and time slots.
 * have two methods to retrieve all data, Those Data used in Worktime Component.
 *
 *
 *
 *
 * @see {@link IWeek}
 * @see {@link ITime}
 */



@Injectable({
  providedIn: 'root'
})
export class WeekWorkService {
  private weekdays:IWeek[] = [
    {
      name: 'Saturday',
      timeSlots: []
    },
    {
    name: 'Sunday',
    timeSlots: [
      { from: '5 PM', to: '6 PM' },
    ]
    },
    {
      name: 'Monday',
      timeSlots: [
        { from: '9 AM', to: '10 AM' },
        { from: '2 PM', to: '3 PM' },
        { from: '5 PM', to: '6 PM' },
      ],
    },
    {
      name: 'Tuesday',
      timeSlots: [
      { from: '9 AM', to: '10 AM' }
    ]
    },
    {
      name: 'Wednesday',
      timeSlots: [
      { from: '9 AM', to: '10 AM' },
      { from: '2 PM', to: '3 PM' },
      { from: '5 PM', to: '6 PM' },
    ]
    },
    {
      name: 'Thursday',
    timeSlots: [
      { from: '2 PM', to: '3 PM' },
    ] },
    { name: 'Friday', timeSlots: [] },
  ];

  private Time: ITime[]= [
    { hours: 1, minutes: 30 },
    { hours: 2, minutes: 45 },
    { hours: 3, minutes: 55 },
  ];
  constructor() { }

  getAllWeek(){
    return this.weekdays;
  }

  getAllTime(){
    return this.Time;
  }
}
