import { Specialite } from "./specialite";
import { Student } from "./students";

export class Contrat {   
 idContrat : number;
 dateDebutContrat:Date;
 dateFinContrat: Date;
 specialite : String[];
 archive :boolean = false;
 montantContrat:number;
 Student :Student;
public Contrat (){
    this.specialite;
}
}