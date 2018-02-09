import axios from 'axios';

const GET_CRYPTOS = 'GET_CRYPTOS';

let cryptoData = [];

const getCryptos = cryptos => {
  const action = { type: GET_CRYPTOS, cryptos };
  return action;
}

export const getCryptosThunk = () => dispatch => {
  axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=15')
    .then(currency => dispatch(getCryptos(currency)))
}

export default (state = cryptoData, action) => {
  switch (action.type) {
    case GET_CRYPTOS:
      return action.cryptos.data

    default:
      return state;
  }
}