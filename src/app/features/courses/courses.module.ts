import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import {SharedModule} from '../../shared/shared.module';
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseCardComponent} from "./course-card/course-card.component";

@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent,
    CourseCardComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
