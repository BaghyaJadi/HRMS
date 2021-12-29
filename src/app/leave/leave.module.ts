import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { LeaveComponent } from "./leave.component";
import { LeaveService } from "./leave.service";

const routes: Route[] = [
    {
        path: '',
        component: LeaveComponent
    },
    {
        path: 'leave',
        component: LeaveComponent
    }
]
@NgModule({
    declarations: [LeaveComponent],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [LeaveService],
    bootstrap: []
})
export class LeaveModule {

}