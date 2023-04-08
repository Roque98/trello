import { Component, OnInit } from '@angular/core';
import { DataSourceUser } from './data-source';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit {

  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];
  user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(
    private userService: UsersService,
    private authService: AuthService
  ) {
    
  }
  ngOnInit(): void {
    this.userService.getUser().subscribe((users) => {
      this.dataSource.init(users);
    });

    this.user$ = this.authService.user$;
  }
}
