export class NewProjectDeveloperModel{
    breadcrumb: any[];
    city: string;
    master_url: string;
    founded_year: number;
    built_num: number;
    master_name: string;
    master_description: string;
    developers:any[];
    constructor(breadcrumb:any[], city: string, master_url: string, founded_year: number, built_num: number, master_name: string, master_description: string, developers:any[]){
        this.breadcrumb = breadcrumb;
        this.city = city;
        this.master_url = master_url;
        this.founded_year = founded_year;
        this.built_num = built_num;
        this.master_name = master_name;
        this.master_description = master_description;
        this.developers = developers;
    }
}