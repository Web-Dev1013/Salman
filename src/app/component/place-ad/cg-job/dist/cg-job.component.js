"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CgJobComponent = void 0;
var core_1 = require("@angular/core");
var CgJobComponent = /** @class */ (function () {
    function CgJobComponent(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.job_type = "hire";
        this.jobArr = [
            { id: "accounting", name: "Accounting" },
            { id: "architecture", name: "Architecture/Eng." },
            { id: "art_design", name: "Art/Design" },
            { id: "bank_finance", name: "Bank/Finance" },
            { id: "business", name: "Business Dev" },
            { id: "construction", name: "Construction" },
            { id: "consulting", name: "Consulting" },
            { id: "education", name: "Education" },
            { id: "executive", name: "Executive" },
            { id: "hospitality", name: "Hospitality" },
            { id: "hr_recruiting", name: "HR/Recruiting" },
            { id: "IT_telecom", name: "IT/Telecom" },
            { id: "marketing_pr", name: "Marketing/PR" },
            { id: "media", name: "Media" },
            { id: "medical_health", name: "Medical/Health" },
            { id: "oil_gas", name: "Oil/Gas" },
            { id: "retail", name: "Retail" },
            { id: "sales", name: "Sales" },
            { id: "secretarial", name: "Secretarial" },
            { id: "other_job", name: "Other" }
        ];
        this.activatedRoute.params.subscribe(function (params) {
            _this.job_type = params.id;
        });
    }
    CgJobComponent.prototype.ngOnInit = function () {
    };
    CgJobComponent = __decorate([
        core_1.Component({
            selector: 'app-cg-job',
            templateUrl: './cg-job.component.html',
            styleUrls: ['./cg-job.component.css']
        })
    ], CgJobComponent);
    return CgJobComponent;
}());
exports.CgJobComponent = CgJobComponent;
