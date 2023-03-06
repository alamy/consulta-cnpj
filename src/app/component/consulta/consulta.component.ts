import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  JsontPt = 'assets/pt.json';
  JsontEn = 'assets/en.json';
  JsontFr = 'assets/fr.json';
  result: any;
  @ViewChild("cnpj")cnpj: ElementRef | undefined;
  readonly apiURL : string;
  public empresa: any;
  public nome: any;
  public descricao: any;
  public dataAbertura: any;
  public uf: any;
  public bairro: any;
  public cep: any;
  public telefone: any;
  public dias: any;

  constructor(private http: HttpClient) {

    this.apiURL = 'https://api-publica.speedio.com.br/'
   }

  ngOnInit(): void {
    this.http.get<any>(this.JsontPt).subscribe(response => {
      this.result = response;
      console.log(this.result)
    });
  }

  Language(ling: any){
    switch (ling) {
      case "pt":
        this.http.get<any>(this.JsontPt).subscribe(response => {
          this.result = response;
          console.log(this.result)
        });
        break;
      case "en":
        this.http.get<any>(this.JsontEn).subscribe(response => {
          this.result = response;
          console.log(this.result)
        });
      break;
      case "fr":
        this.http.get<any>(this.JsontFr).subscribe(response => {
          this.result = response;
          console.log(this.result)
        });
      break;
    }

  }

  Consultar() {
    console.log('estou na function')
    this.empresa = this.cnpj?.nativeElement.value
    this.http.get<any>(`${ this.apiURL }/buscarcnpj?cnpj=${this.empresa}`)
           .subscribe((resultado) => {
            this.nome = resultado["RAZAO SOCIAL"];
            this.descricao = resultado["CNAE PRINCIPAL DESCRICAO"];
            this.dataAbertura = resultado["DATA ABERTURA"];
            this.uf = resultado.UF;
            this.bairro = resultado.BAIRRO;
            this.cep = resultado.CEP;
            this.telefone = "( " + resultado.DDD + " )" + " " +  resultado.TELEFONE;
            this.dias = resultado["DATA ABERTURA"];
          });
  }

}
