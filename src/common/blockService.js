import axios from 'axios';

const INFURA_URL = `https://mainnet.infura.io/v3/` + process.env.VUE_APP_INFURA_KEY

const BlockService = {
    latest() {
        let params = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "eth_blockNumber",
            "params": []
            }
        return axios.post(INFURA_URL, params);
    },
    get(id) {
        let params = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "eth_getBlockByNumber",
            "params": ['0x' + parseInt(id).toString(16), false]
          }
        return axios.post(INFURA_URL, params);
    }
};

export default BlockService;