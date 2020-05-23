
import Worker from 'worker-loader!./pow.js'
import * as NanoCurrency from 'nanocurrency'

const worker = new Worker()

export const serverMixin = {
  data() {
    return {
      rawconv: {from:'raw',to:'Nano'},
      nanoconv: {from:'Nano',to:'raw'}
    }
  },

  computed: {
    protocol() {
      return window.location.protocol
    },
    port() {
      if (this.protocol == 'https:'){
          return '7077'
      }
      return '7076'
    },
    rpcurl() {
      return this.protocol + '//' + this.$route.params.node + ':' + this.port
    }
  },
  mounted() {
    // Set up a worker
    worker.onmessage = ({ data }) => {
      console.log('Finished calculating')
      this.pow = data
      this.ready = true
    };

  },

  methods: {
    async getSeed() {
      const seed = await NanoCurrency.generateSeed();
      const privatekey = NanoCurrency.deriveSecretKey(seed, 0);
      const publickey = NanoCurrency.derivePublicKey(privatekey);
      const address = NanoCurrency.deriveAddress(publickey,{useNanoPrefix:true});
      const payload = {
        "privatekey":privatekey,
        "publickey":publickey,
        "address":address
      };
      return payload;
    },
    
    async rpCall (body) {
      var Init = { method:'POST',body: JSON.stringify(body)}
      var res = await fetch(this.rpcurl,Init)
      var data = await res.json()
      console.log(data)
      return data
    },
    genWork (hash){
      console.log('gen work ' + hash)
      worker.postMessage(hash);
    },

    async getHistory (address) {
      const history = {
        action: 'account_history',
        account: address
      }
      console.log('history')

      const details = await this.rpCall(history);
      if (Array.isArray(details.history) && details.history.length){
        console.log(details)
        this.history = details.history
      }
    },

    async getPending (address) {
      const pending = {
        action: 'pending',
        source: 'true',
        sorting: 'true',
        address: address
      }

      const details = await this.rpCall(pending);
      console.log('pending1')
      console.log(details)

      if (typeof details.blocks === 'object'){
        console.log('pending2')
        this.pending = details.history
      }
    
    },
   
    abbreviateNumber (number, precision = 2) {
      const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
      let tier = Math.log10(number) / 3 | 0;
      if(tier == 0) return Number.parseFloat(number).toFixed(precision);
      let suffix = SI_SYMBOL[tier];
      let scale = Math.pow(10, tier * 3);
      let scaled = number / scale;
      return scaled.toFixed(precision) + '<span class="suffix">' + suffix + '</span>';
    },
    
    copyToClipboard(text) {

      let input = document.createElement('textarea');
      input.innerHTML = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      alert('Copied to clipboard')

    },
    
    abbreviateAddress (address) {
      return address.substring(0, 11) + '...' + address.slice(address.length - 6)
    },

    highlightAddress (address) {
      if (address !== null && address !== undefined) {
        const end = address.length - 6;
        return '<span class="highlight">' + address.substring(0, 11) + '</span>' + address.substring(11, end) + '<span class="highlight">' + address.slice(address.length - 6) + '</span>'
      }
      return null
    },
    
    transactionStatus (value) {
      if (value === 'send') return 'Sent'
      if (value === 'receive') return 'Received'
    }
    
  }
}