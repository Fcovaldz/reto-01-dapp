import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'primer-reto-bob-section',
    template: ` 
    <section class="px-24 py-32 bg-white bg-opacity-5">
        <p class="text-center text-3xl">Este es el Bob hero.</p>
    </section>
    `,
    standalone: true,
})
export class BobSectionComponent{}