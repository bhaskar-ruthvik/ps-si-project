import {db} from '../firebase/firebase.js'
import { collection, getDocs, query, where, doc , getDoc} from '@firebase/firestore';

async function getStudentsByPS1Company(name){
  
}


async function getPS1CompanyByID(id){
    //get companies 
    const docRef = doc(db, "PS1", id);
    const docSnap = await getDoc(docRef);
    return {id, ...docSnap.data()};

  }
   
  async function getPS1CompanyByName(name){
    //get companies 
    const companiesCol = collection(db, 'PS1');
    const q= query(companiesCol,where('Name','==',name))
    const companiesSnapshot = await getDocs(q);
    const company = companiesSnapshot.docs.map(doc => doc.data());
    return company;
  }//get companies 
  

async function getPS1Companies() {
    const companiesCol = collection(db, 'PS1');
    const companiesSnapshot = await getDocs(companiesCol);
    const companiesList = companiesSnapshot.docs.map(doc => {return {id:doc.id,...doc.data()}});

    return companiesList;
  }

export {getStudentsByPS1Company,getPS1CompanyByName,getPS1Companies, getPS1CompanyByID}