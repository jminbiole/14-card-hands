import parseJson from 'parse-json';

export default function() {
  fetch('https://card-proxy.herokuapp.com/decks/new')
    .then(parseJson)
      console.log(data);
}
