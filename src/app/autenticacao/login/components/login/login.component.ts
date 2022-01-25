import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Login } from '../../models';

@Component({
    selector: 'app-login-pf',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        //private router: Router
    ) {}

    ngOnInit() {
        this.gerarForm();
    }

    gerarForm() {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            senha: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    logar() {
        if (this.form.valid){
            this.snackBar.open("Dados inválidos", "Erro", { duration: 3000 });
            return;
        }
        const login: Login = this.form.value;
        alert(JSON.stringify(login));
    }

}
