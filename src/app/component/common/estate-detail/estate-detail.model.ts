import { ThrowStmt } from "@angular/compiler";

export class EstateData{
    ref_id: string;
    breadcrumb: any[];
    title: string;
    price: string;
    master: string;
    master_name: string;
    RERA_Num: number;
    DED_Num: number;
    bed: number;
    bath: number;
    sqft: string;
    furnished: string;
    type: string;
    listedBy: string;
    developer: string;
    postedOn: string;
    images: any[];
    amenities: any[];
    description: string;
    phoneNumber: string;
    constructor(ref_id:string, breadcrumb: any[], title: string, price: string, master: string, master_name: string, RERA_Num: number, DED_Num: number, bed: number, bath: number, sqft: string, furnished: string, type: string, listedBy: string, developer: string, postedOn:string, images:any[], amenities: any[], description: string, phoneNumber: string)
    {
        this.ref_id = ref_id;
        this.breadcrumb = breadcrumb;
        this.title = title;
        this.price = price;
        this.master = master;
        this.master_name = master_name;
        this.RERA_Num = RERA_Num;
        this.DED_Num = DED_Num;
        this.bed = bed;
        this.bath = bath;
        this.sqft = sqft;
        this.furnished = furnished;
        this.type = type;
        this.listedBy = listedBy;
        this.developer = developer;
        this.postedOn = postedOn;
        this.images = images;        
        this.amenities = amenities;
        this.description = description;
        this.phoneNumber = phoneNumber;
    }
}