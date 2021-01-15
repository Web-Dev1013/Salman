export class NewProjectModel{
    id: number;
    src: string;
    title: string;
    city: string;
    price: string;
    SqFt: string;
    bedrooms: number;
    constructor(id: number, src: string, title: string, city: string, price: string, SqFt: string, bedrooms: number){
        this.id = id;
        this.src = src;
        this.title = title;
        this.city = city;
        this.price = price;
        this.SqFt = SqFt;
        this.bedrooms = bedrooms;
    }
}
