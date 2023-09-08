export class Worksource {
  srcName:string;
  srcType:string;
  availablity:{
    Resev:string;
    day: string;
    month: string;
    manyper?: string,
    resvCount?: string,
    resvTime?: string,
  };
  workTime?:{
    name:string,
    timeSlots:{
      from:string,
      to:string
    }[]
  };
  constructor() {
    this.srcName = '';
    this.srcType = '';
    this.availablity = {
      Resev:'',
      day: '',
      month: '',
      manyper: '',
    };
    this.workTime = {
      name:'',
      timeSlots:[{
        from:'',
        to:''
      }]
    };
  }
}
