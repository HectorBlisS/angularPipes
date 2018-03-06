import {Component} from '@angular/core';

@Component({
   selector: 'app-login',
   template: `
   <h1>Login works!</h1>
   <button (click)="mePucharon()" >Puchame!</button>   
   <p>{{nombre}}</p>
   <input type="text" [value]="nombre" />    
   <img width="100" [src]="image" />
   <app-signup></app-signup>

   <button (click)="restar()" >-</button>
   <input type="number" [value]="numero" />
   <button (click)="sumar()" >+</button>

   <br/>
   <br/>
    <input [type]="showPass ? 'text':'password'" />
    <input (change)="show()" type="checkbox" />  

    <form (submit)="onSubmit($event, edad.value)">
        <input #edad type="text" />
        <input type="submit" />
    </form>

    <label>
        BlisS {{banana}}:
        <input [(ngModel)]="banana" />   
    </label>
   `
})
export class LoginComponent{
    nombre: string = "Marilyn";
    image:string = "http://1.bp.blogspot.com/-X5UB5PEVNT4/VSyTJL_6fOI/AAAAAAAAKxk/ADXJUEzn18k/s1600/Rick%2BSanchez%2Bsociopata.jpg"
    //nombre = "BlisS";
    numero: number = 1;
    showPass:boolean = true;
    banana = "Bananin";

    onSubmit(event, edad){
        event.preventDefault()
        alert(edad)
    }

    show(){
        this.showPass = !this.showPass;
    }

    restar(){
        if(this.numero < 2) return;
        this.numero--;
    }
    sumar(){
        this.numero++;
    }

    mePucharon(){
        alert("Ay!");
    }

}