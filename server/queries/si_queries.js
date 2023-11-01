import {db} from '../firebase/firebase.js'
import { collection, getDocs, query, where, doc , getDoc} from '@firebase/firestore';

async function getStudentsBySICompany(name){
  
}


async function getSICompanyByID(id){
    //get companies 
    const docRef = doc(db, "SI", id);
    const docSnap = await getDoc(docRef);
    return {id, ...docSnap.data()};

  }
   
  async function getSICompanyByName(name){
    //get companies 
    const companiesCol = collection(db, 'SI');
    const q= query(companiesCol,where('Name','==',name))
    const companiesSnapshot = await getDocs(q);
    const company = companiesSnapshot.docs.map(doc => doc.data());
    return company;
  }//get companies 
  

async function getSICompanies() {
    const companiesCol = collection(db, 'SI');
    const companiesSnapshot = await getDocs(companiesCol);
    const companiesList = companiesSnapshot.docs.map(doc => {return {id:doc.id,...doc.data()}});

    return companiesList;
  }

export {getStudentsBySICompany,getSICompanyByName,getSICompanies, getSICompanyByID}