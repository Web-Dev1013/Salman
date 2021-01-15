"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewProjectDetailComponent = void 0;
var core_1 = require("@angular/core");
var new_project_detail_model_1 = require("./new-project-detail.model");
var NewProjectDetailComponent = /** @class */ (function () {
    function NewProjectDetailComponent() {
        this.ProjectName = "New Projects";
        this.NewProjectDetail = new new_project_detail_model_1.NewProjectDetailModel(["Sharjah", "Al Khan", "Shoumous Properties", "Sharjah Garden City"], "2,800,000", "659", "../../../../assets/Image/propertyforrent/promoted-detail/rsz_1asdasdasdasdasd.png", "Sharjah Garden City", "Shoumous Properties", "Client Service Department", "+971 48 7589 87", "", "../../../../assets/Image/newproject/new-project-detail/djFiSFV4ZXVnZzNFMGFEYkhTNE5XcnVjeTBIaUVQVkViUHN3TFNOdGxyYWVRMnUzRTBRRjJiN3JrZHVXZmdIM0FnNTdWL3kyM0E0VnNnT2dlOFlLbXR3VHM0RmQxb0tWOWFUSFFJQVFmb2c9.jpg", 0, "Q4 2021", "20 March", "5+", "4250", [
            "../../../../assets/Image/newproject/new-project-detail/b1lQdUxKVlhRckJtNVNaV3puZTQwWHFDYUs1NzlhVUZUam85NEdjd2tERUFteFloZVJDaVVGNzBpa0JLWFJCRVdiMnkwQStwbGVWek0vNW5JM1RBV1lUTTVtNWRDZjBUcEJHL2NZQUorWmc9.jpg",
            "../../../../assets/Image/newproject/new-project-detail/bWtEK2hHTGhydUV1NHZvOEt1Qm94QXIwclpMc2pwTVBUYmsrYkUvbTRnUGVZR0FDTm5sNXFrU0ZpZnRXcVBrSUF0emQ0TGdPUWtXVlVEcWxRWGkzNHF3Zy9XL3puVElJMVdHT3dWUTlqZzQ9.jpg",
            "../../../../assets/Image/newproject/new-project-detail/eGhSaFU0UkJEMFB4WFJhY0VJL3hmelpuelBWcW5qaVdVRlFRa1FrNWIwZ1ViZnVUTVJhVXpQTEovNzlZVFBJMjZxZVZuV2dDNFRYZStyVHB4YzIxb1BJT2FtOXdsNXdNajd0MmU3c2MvSHc9.jpg",
            "../../../../assets/Image/newproject/new-project-detail/T2dxaVlmNW5Kb3FITVVKUUhtdVRCTDc0d3BOb01sV3ZMbFFCSktUNTNsYkZmMVNXWDFWRHhsejdwNlVMK2lFRU14ajNkbm5GUFJXaTlCWnQvcHVzRE1oRnUxWkVCK3l6cDJ2VXI5KzN1RzBYQjZrMCtkZ0xnN2hDcFdkTzh.jpg"
        ]);
        this.NewProjectArr = [
            { id: 1, name: "Dubai Projects(252)" },
            { id: 2, name: "Sharjah Projects(24)" },
            { id: 3, name: "Abu Dhabi Projects(11)" },
            { id: 4, name: "Fujalrah Projects(2)" },
            { id: 5, name: "Al Ain Projects(1)" },
            { id: 6, name: "Ras Al Khaimah Projects(1)" },
            { id: 7, name: "Ajman Projects(1)" }
        ];
    }
    NewProjectDetailComponent.prototype.ngOnInit = function () {
    };
    NewProjectDetailComponent.prototype.select = function (event, Projects) {
        console.log(Projects.name);
        this.ProjectName = Projects.name;
    };
    NewProjectDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-new-project-detail',
            templateUrl: './new-project-detail.component.html',
            styleUrls: ['./new-project-detail.component.css']
        })
    ], NewProjectDetailComponent);
    return NewProjectDetailComponent;
}());
exports.NewProjectDetailComponent = NewProjectDetailComponent;
