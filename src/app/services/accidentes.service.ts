import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface accidente{
  id: string
	lat: number;
  lng: number;
  titulo: string;
  tipo: string;
  text: string;
  img:string;
  fatalidad:string;
}

@Injectable({
  providedIn: 'root'
})
export class AccidentesService {

  constructor(private db : AngularFirestore) { }

  getAccidentes(){
    return this.db.collection('accidentes').snapshotChanges().pipe(map(accidente =>{
      return accidente.map(a =>{
        const data = a.payload.doc.data() as accidente;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
}
