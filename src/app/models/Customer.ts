import { Product } from "./Product";

export class Customer{

    id: number;
    name:string;
    products:Product[];

    constructor(){
        this.id=0;
        this.name="";
        this.products=[];
    }
}