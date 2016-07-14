import parseJson from 'parse-json';

export default function getOptionsData(data) {
  return fetch('https://card-proxy.herokuapp.com/decks/new')
    .then(parseJson)
}
