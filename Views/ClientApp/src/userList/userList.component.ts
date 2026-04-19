import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { User } from '../models/user.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user-list',
    templateUrl: './userList.component.html',
    styleUrls: ['./userList.component.css'],
    imports: [CommonModule, FormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent{
    @Input() users: User[] = [];

    constructor( private chn : ChangeDetectorRef) {}
    
    renderUsers(){
        this.chn.detectChanges();
    }
}