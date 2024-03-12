export interface User {
    id: number;
    name: {
      first_name: string,
      middle_name:string,
      last_name:string,
    },
    email:string,
    phone_number:number,
    gender:string
  }