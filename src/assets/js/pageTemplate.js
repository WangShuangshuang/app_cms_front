import { FETCH_PRE } from './variable.js';

const LIST =  '/page/templates'
const DETAIL = '/page/template/:id/view'
const CREATE = '/page/template/create'
const UPDATE = '/page/template/:id/update'
const REMOVE = '/page/template/:id/remove'

export function getPageTemplateList(){
  var url = `${FETCH_PRE}${LIST}`;

  fetch(url).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

export function getPageTemplateDetail(id){
  return new Promise((resolve, reject) => {
    var url = `${FETCH_PRE}${DETAIL.replace(':id', id)}`;

    fetch(url).then(res => res.json())
    .catch(error => { reject(error)} ) 
    .then(response => { resolve(response) });
  })
}

export function createPageTemplate(payload){
  var url = `${FETCH_PRE}${CREATE}`;
  var data = payload;

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

export function updatePageTemplate(id, payload){
  return new Promise((resolve, reject) => {
    var url = `${FETCH_PRE}${UPDATE.replace(':id', id)}`;
    var data = payload;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => { reject(error) })
    .then(response => { resolve(response) });
    })
}

export function deletePageTemplate(id){
  var url = `${FETCH_PRE}${REMOVE.replace(':id', id)}`;

  fetch(url, {
    method: 'POST'
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}
