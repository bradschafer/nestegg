import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  form = {
    schema: {
        type: 'object',
        properties: {
            email: {
                title: 'Email',
                type: 'string',
                minLength: 4
            }
        },
        required: [ 'email' ]
    },
    options: {
        htmlStyle: 'btn-danger'
    },
    form: [
        'email',
        {
            type: 'actions',
            items: [
                { type: 'submit', htmlClass: 'btn-block btn-round', color: 'primary', title: 'Register' },
            ]
        }
    ],
};

  constructor() { }

  ngOnInit() {
  }

  OnSubmitFn(event) {
     debugger;
  }

}
