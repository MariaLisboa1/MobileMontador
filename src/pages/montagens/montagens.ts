import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the MontagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-montagens',
  templateUrl: 'montagens.html',
  providers: [
    MoovieProvider
  ]
})


export class MontagensPage {
  public user: string = "05"
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _movieProvider: MoovieProvider,
    
  ) {
  }
  // this.roundService.getRounds(codEquipe).subscribe(result => {
  //   this.ronda = result.json()['data'];
  ionViewDidLoad() {
    this._movieProvider.getLatesMovies(this.user).subscribe(
      result=>{
        this.user = result.json()['data']
        console.log('data')
        // const response = (data as any)
        // const objeto_retorno = JSON.parse(response._body);
        // console.log(objeto_retorno);
      },error=>{        
        console.log('this.user')
        console.log(error);
        
      }
    )
  }

}
