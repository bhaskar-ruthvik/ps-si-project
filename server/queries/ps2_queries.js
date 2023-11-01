import {db} from '../firebase/firebase.js'
import { collection, getDocs, query, where, doc , getDoc} from '@firebase/firestore';

async function getStudentsByPS2Company(name){
  
}


async function getPS2CompanyByID(id){
    //get companies 
    const docRef = doc(db, "PS2", id);
    const docSnap = await getDoc(docRef);
    return {id, ...docSnap.data()};

  }
   
  async function getPS2CompanyByName(name){
    //get companies 
    const companiesCol = collection(db, 'PS2');
    const q= query(companiesCol,where('Name','==',name))
    const companiesSnapshot = await getDocs(q);
    const company = companiesSnapshot.docs.map(doc => doc.data());
    return company;
  }//get companies 
  

async function getPS2Companies() {
    const companiesCol = collection(db, 'PS2');
    const companiesSnapshot = await getDocs(companiesCol);
    const companiesList = companiesSnapshot.docs.map(doc => {return {id:doc.id,...doc.data()}});

    return companiesList;
  }

export {getStudentsByPS2Company,getPS2CompanyByName,getPS2Companies, getPS2CompanyByID}