export class NewProjectDetailModel {
    breadcrumb: any[];
    price: string;
    pricePersqft: string;
    master: string;
    location: string;
    property: string;
    type: string;
    phoneNum: string;
    master_name: string;
    villa_url: string;
    floor: number;
    key: string;
    updated_date: string;
    bedrooms: string;
    sqft: string;
    images: any[];
    constructor(breadcrumb:any[], price: string, pricePersqft: string, master: string, location: string, property: string, type: string, phoneNum: string, master_name: string, villa_url: string, floor: number, key: string, updated_date: string, bedrooms: string, sqft: string, images:any[])
    {
        this.breadcrumb = breadcrumb;
        this.price = price;
        this.pricePersqft = pricePersqft;
        this.master = master;
        this.location = location;
        this.property = property;
        this.type = type;
        this.phoneNum = phoneNum;
        this.master_name = master_name;
        this.villa_url = villa_url;
        this.floor = floor;
        this.key = key;
        this.updated_date = updated_date;
        this.bedrooms = bedrooms;
        this.sqft = sqft;
        this.images = images;
    }
}