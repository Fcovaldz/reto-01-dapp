import { Component } from "@angular/core";
import { FeaturesSectionComponent } from "./features-section.component";
import { BobSectionComponent } from "./bob-section.component";


@Component({
    selector: 'primer-reto-home',
    template: ` 
    <primer-reto-bob-section></primer-reto-bob-section>
    <primer-reto-features-section></primer-reto-features-section> `,
    standalone: true,
    imports: [
    BobSectionComponent, 
    FeaturesSectionComponent
]
})
export class HomeComponent {}