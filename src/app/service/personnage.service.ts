import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnage } from 'src/app/models/personnage.model';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  private dbPath = '/personnages';

  persoRefs: AngularFirestoreCollection<Personnage>

  constructor(
    private db: AngularFirestore
  ) {
    this.persoRefs = db.collection(this.dbPath)
   }

  //CRUD create
  addPersonnage(personnage: Personnage){
    return new Observable(obs =>{
      this.persoRefs.add({...personnage}).then(()=>{
        obs.next();
      })
    })
  }

  getAllPersonnages() : any {
    return this.persoRefs.snapshotChanges().pipe(
      map((changes:any)=>{
        return changes.map((doc:any)=>{
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    )

  }
  getOnePersonnageById(id:string):any{
    return new Observable(obs =>{
      this.persoRefs.doc(id).get().subscribe(res=>{
        obs.next({id: res.id, ...res.data()});
      })
    })
  }
  
  deletePersonnageById(id:string){
    this.persoRefs.doc(id).delete();
  }

  updatePersonnage(personnage:any){
    return new Observable(obs => {
      this.persoRefs.doc(personnage.id).update(personnage);
      obs.next();
    })
  }
}
