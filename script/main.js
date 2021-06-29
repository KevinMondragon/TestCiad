/*  let form = document.querySelector('#form');
 let button= document.querySelector("button"); 
 form.addEventListener('submit', agregar); */

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCpPqzx7NKuINX2vJrY9z78pw6js7JKx3A",
    authDomain: "test-ciad.firebaseapp.com",
    databaseURL: "https://test-ciad-default-rtdb.firebaseio.com",
    projectId: "test-ciad",
    storageBucket: "test-ciad.appspot.com",
    messagingSenderId: "1063472381787",
    appId: "1:1063472381787:web:a9e4a5fb88d7bbe5cbe47e",
    measurementId: "G-K0WBJY8WJT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const nombre = document.getElementById('nombre');
const acronym = document.getElementById('acronym');
const city = document.getElementById('city');
const https = document.getElementById('https');
/* const country = document.getElementById('country'); */

const select = document.getElementById('country');
const selectedOperation = select.options[select.selectedIndex].value;

const selectInstitutions = document.getElementById('types');
const selectedOperationInstitutionsTypes= select.options[select.selectedIndex].value;

const selectTypes = document.getElementById('institution');
const selectedOperationInstitutions= select.options[select.selectedIndex].value;

const database = firebase.database();

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/New Institution').set({
        nombre: nombre.value,
        acronym: acronym.value,
        city: city.value,
        website: https.value,
        country: select.value,
        Institutions: selectInstitutions.value,
        types_Institutions: selectTypes.value

    });
});


/* prueba en consola funcionando */
/* function agregar(e){
  e.preventDefault();

  //Get dates forms
  let formData = new FormData(form);

  let acronym=formData.get('acronym');
  let name=formData.get('name');
  let city=formData.get('city');
  let website=formData.get('website');

  /* print in console */
/*    console.log(acronym, name, city, website + '  Verifique sus datos'); */


/*  function OpenPageTable(e){
    e.
 } */