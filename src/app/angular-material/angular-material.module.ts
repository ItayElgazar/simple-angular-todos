import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCheckboxModule,
        MdGridListModule, MdToolbarModule,
        MdCardModule,MdMenuModule,
        MdIconModule,MdInputModule,
        MdListModule,MdChipsModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule, MdCheckboxModule,
    MdGridListModule
  ],
  exports: [MdButtonModule, MdCheckboxModule,
            MdGridListModule, MdToolbarModule,
            MdCardModule,MdMenuModule,
            MdIconModule,MdInputModule,
            MdListModule,MdChipsModule],
  declarations: []
})
export class AngularMaterialModule { }
