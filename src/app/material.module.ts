import { NgModule } from '@angular/core';

import {
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule 
} from '@angular/material';

@NgModule({
    imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule 
    ],
    exports: [
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule 
    ]
})
export class MaterialModule {}