import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Security',
        icon: 'fas fa-shield-alt',
        expanded: true,
        items: [
          { label: 'Users', icon: 'fas fa-user', routerLink: ['/admin/users'] },
          { label: 'Roles', icon: 'fas fa-users', routerLink: ['/admin/roles']  }
        ]
      },
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     { label: 'Delete', icon: 'pi pi-fw pi-trash' },
      //     { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
      //   ]
      // },
      // {
      //   label: 'Help',
      //   icon: 'pi pi-fw pi-question',
      //   items: [
      //     {
      //       label: 'Contents',
      //       icon: 'pi pi-pi pi-bars'
      //     },
      //     {
      //       label: 'Search',
      //       icon: 'pi pi-pi pi-search',
      //       items: [
      //         {
      //           label: 'Text',
      //           items: [
      //             {
      //               label: 'Workspace'
      //             }
      //           ]
      //         },
      //         {
      //           label: 'User',
      //           icon: 'pi pi-fw pi-file',
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   label: 'Actions',
      //   icon: 'pi pi-fw pi-cog',
      //   items: [
      //     {
      //       label: 'Edit',
      //       icon: 'pi pi-fw pi-pencil',
      //       items: [
      //         { label: 'Save', icon: 'pi pi-fw pi-save' },
      //         { label: 'Update', icon: 'pi pi-fw pi-save' },
      //       ]
      //     },
      //     {
      //       label: 'Other',
      //       icon: 'pi pi-fw pi-tags',
      //       items: [
      //         { label: 'Delete', icon: 'pi pi-fw pi-minus' }
      //       ]
      //     }
      //   ]
      // }
    ];
  }

}
