import {db} from '../firebase/firebase.js'
import { collection, getDocs, query, where, doc , getDoc} from '@firebase/firestore';

async function getStudentsByCompany(name){
  
}


async function getCompanyByID(type,id){
    //get companies 
    const docRef = doc(db, type, id);
    const docSnap = await getDoc(docRef);
    return {id, ...docSnap.data()};

  }
   
  async function getCompanyByName(type,name){
    //get companies 
    const companiesCol = collection(db, type);
    const q= query(companiesCol,where('Name','==',name))
    const companiesSnapshot = await getDocs(q);
    const company = companiesSnapshot.docs.map(doc => {return {id:doc.id, ...doc.data()};});
    return company;
  }//get companies 
  

async function getCompanies(type) {
    const companiesCol = collection(db, type);
    const companiesSnapshot = await getDocs(companiesCol);
    const companiesList = companiesSnapshot.docs.map(doc => {return {id:doc.id,...doc.data()}});

    return companiesList;
  }

export {getStudentsByCompany,getCompanyByName,getCompanies, getCompanyByID}