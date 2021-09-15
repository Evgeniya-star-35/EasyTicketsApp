// import countries from '../country.json';
import { refs } from './refs';
import selectMenu from '../templates/selectMenu.hbs';
import axios from 'axios';

const API_KEY = 'jV9uz55seY7b9FTi8qfGgp0zGLZ7GPsL';
const baseURL = 'https://app.ticketmaster.com/discovery-feed/v2/events?';

async function fetchCountries(name) {
  const promiseCoutries = await fetch(`${baseURL}&size=40&apikey=${API_KEY}`);
  const countryData = promiseCoutries.json();
  return countryData;

}

refs.buttonSearchCountry.addEventListener('click',onCountryBtnClick);

async function onCountryBtnClick(e){
  e.preventDefault();
  try{
    const countryFetch = await fetchCountries(country)
    .then(elems => onCountryCreate(elems.countries))

  }
  catch(err){
  console.log(err);
}
}

function onCountryCreate(obj){
    const optionEl= Object.keys(obj);
    //  const listCodes = optionEl.reduce((acc,el)=> acc + `<option value='${el}'>${el}</option>`,'');
    //  console.log(listCodes);
    //  return listCodes;
    
    const arrCode = optionEl.map((el)=>{
    const itemCountries = document.createElement('option');
    itemCountries.setAttribute('value', `${el}`);
    itemCountries.append(el);
   console.log(itemCountries);
   return itemCountries;
   refs.datalist.append(...arrCode) ;
    });
}
// refs.datalist.insertAdjacentHTML('beforeend',onCountryCreate) ;
// console.log(refs.datalist.insertAdjacentHTML('beforeend',onCountryCreate));
 
  // console.log(listCountry)
  


  // const listCountry = optionEl.map((el)=>{
  //   const itemCountries = document.createElement('option');
  //   itemCountries.setAttribute('value',${el})
  //   // itemCountries.append(el)//поставити назву країн
  // console.log(itemCountries)
  //  return itemCountries;
 
  // })