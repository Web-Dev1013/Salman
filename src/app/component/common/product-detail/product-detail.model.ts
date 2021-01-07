export class Motor_Product{
  cat_id: string;
  id: number;
  name: string;
  bread: string;
  price: string;
  date: string;
  year: number;
  door: string;
  km: string;
  color: string;
  location: string;
  src: string;
  constructor(cat_id: string, id: number, name: string, bread: string, price: string, date: string, year: number, door: string, km: string, color: string, location: string, src: string){
      this.cat_id = cat_id;
      this.id= id;
      this.name = name;
      this.bread = bread;
      this.price = price;
      this.date = date;
      this.year = year;
      this.door = door;
      this.km = km;
      this.color = color;
      this.location = location;
      this.src = src;
  }
}