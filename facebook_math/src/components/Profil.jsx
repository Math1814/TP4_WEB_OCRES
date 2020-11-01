import React from "react";
import Bouton from './Bouton';



class Profil extends React.Component  {
    constructor(props){
        super(props);
        this.state = {couleur : this.props.user.couleur};
        this.state = {jaime : this.props.user.jaime};
        this.changerdeStyle=this.changerdeStyle.bind(this);
        this.compteur=this.compteur.bind(this);
    }
    compteur () {
        this.props.user.jaime = this.props.user.jaime+1;
        this.setState({jaime : this.props.user.jaime});
    }
    changerdeStyle () {
    var randomColor = require('randomcolor');
    this.props.user.couleur=randomColor();
    this.setState({couleur : this.props.user.couleur});
}
render(){
    return(
    <div class="container">
    <div class="container" style={{height : "100%", marginTop: "5%", width :"100%", backgroundColor :  this.props.user.couleur}}>
                <div class="row" style = {{marginTop : "2%"}}>
                    
                        <div class="col-sm-4"><Bouton name="Jeanne" id="0" /></div>
                        <div class="col-sm-4"><Bouton name="Martine" id="1" /></div>
                        <div class="col-sm-4"><Bouton name="Claude" id="2" /></div>
                    
                </div>
                <div class="row" style = {{marginTop : "5%"}}>
                    <div class="col-sm-4" style = {{margin : "auto"}}>
                        <p>Prenom : {this.props.user.prenom}</p>
                    </div>
                    <div class="col-sm-4" style = {{margin : "auto"}}>
                        <p>Nom : {this.props.user.nom}</p>
                    </div>
                    <div class="col-sm-4">
                    <p>Date de Naissance : {this.props.user.date_naiss}</p>
                    </div>
                </div>
                
                <div class="row" style = {{marginTop : "1%"}}>
                    <div class="col-sm-6">
                    <p>Dernier Post {this.props.user.last_post}</p>
                    </div>
                </div>
                <div class="row" style = {{marginTop : "1%"}}>
                    <div class="col-sm-6">
                    <p>Nombre de Like! : {this.props.user.jaime}</p>
                    </div>
                </div>

                <div class="row" style = {{marginTop : "2%"}}>
                    <div class="col-sm-10">
                    <p></p>
                    </div>
                    <div class="col-sm-4">
                        <a><input type="button" value="Style!" onClick={this.changerdeStyle}></input></a>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-10">
                    </div>
                    <div class="col-sm-4" style = {{marginBottom : "1%"}}>
                        <div >
                            <a><input type="button" value="Like!" onClick={this.compteur}></input></a>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
            
        );

    }
}
    

export default Profil;