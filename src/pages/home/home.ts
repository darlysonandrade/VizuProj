import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhesPage} from '../detalhes/detalhes';
import { Detalhes2Page} from '../detalhes2/detalhes2';

import swal from 'sweetalert';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  lista = [{id:1, titulo:"Modelos Feminino Loiros", descricao:"Cortes Feminino",  valor:34.99, maisfem:"Detalhes 1", valor_text:"34,99", imagem: "https://i.ytimg.com/vi/ZaRpUSwvmGM/maxresdefault.jpg"}];
  lista1 = [{id:2, titulo:"Modelos Desgracê", descricao:"Cortes Masculinos", valor:20.00, maismasc:"Detalhes 2", valor_text:"30,00", imagem: "https://highstreethospitality.com/wp-content/uploads/2018/05/corte-masculino.jpg"}];

  constructor(public navCtrl: NavController) {

  }



 abreMais(item1){

  this.navCtrl.push(DetalhesPage, {dados:item1});
 }




 abreMais1(item1){


  this.navCtrl.push(Detalhes2Page, {dados:item1});

 }



openTodoAlert(){


  swal("Agora foi", "Voce clicou aqui", "warning");

}

}
