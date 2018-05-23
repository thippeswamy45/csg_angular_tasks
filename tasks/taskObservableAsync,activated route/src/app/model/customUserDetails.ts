

export class User{
    id:number;
    name:string;
    username:string;
    email:string;
    address:Address;
    phone:any;
    company:Company;

}
export class Address{
    street:any;
    city:any;
    zipcode:any;
  

}
export class Company{
name:string;
}