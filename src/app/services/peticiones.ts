import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class peticiones {
    private readonly URLAPI: string = 'http://localhost/Api-prueba/index.php';
    http = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private _http: HttpClient) { }
    getConsultaMetodo(metodo: string): Observable<any> {
        return this._http.get(this.URLAPI + metodo);
    }

    getConsultaUnParametro(valor: string, metodo: string): Observable<any> {
        return this._http.get(this.URLAPI + metodo + "/" + valor);
    }
}