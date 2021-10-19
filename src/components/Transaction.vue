<template>
<div class="notification is-dark" style="overflow-x:scroll">
  <div class="columns level">
      <div class="column is-1" :value="hash" @click="$emit('blockdetails', hash)">
          <div v-if="type === 'send'" class="icon has-text-link">
            <div v-html="iconSvg('minus-square')"></div> 
          </div>

          <div v-else-if="type === 'pending'" class ="icon has-text-link">
            <div v-html="iconSvg('alert-triangle')"></div> 
          </div>
          
          <div v-else class="icon has-text-link">
            <div v-html="iconSvg('plus-square')"></div> 
          </div>
      </div>

      <div class="column is-3">
        <div :title="rawValue" class="value" v-html="formattedValue"><i class="fal fa-coin"></i>
        </div>

        <div v-if="type !== 'pending'" class="type">{{ transactionStatus(transaction.type) }}</div>

        <div v-if="type === 'pending'" class="type">
          <button v-if="privatekey !== null" @click="receive" class="pocket">Click to Receive</button>
          <div v-else class="">Delivered</div>
        </div>
      </div>
      
      <div class="column" style="overflow-x:scroll !important">
        <p class="is-6">            
          <span v-if="type !== 'pending'">{{ abbreviateAddress(transaction.account) + ' ' + formattedDate }}</span>
          <span v-if="type === 'pending'">{{ abbreviateAddress(transaction.source) }}</span>
        </p>
      </div>
  </div>
</div>
</template>

<script>
import * as NanoCurrency from '@thelamer/nanocurrency'
import { serverMixin } from '../mixins/serverMixin.js'
import BigNumber from 'bignumber.js'
import feather from 'feather-icons'

export default {
  name: 'Transaction',
  props: {
    transaction: Object,
    type: String,
    index: [Number, String],
  },
  mixins: [ serverMixin ],
  computed: {
    rawValue () {
      return NanoCurrency.convert(this.transaction.amount,this.rawconv)
    },
    formattedValue () {
      return (this.transaction.type === 'send' ? '-' : '+' ) + this.abbreviateNumber(NanoCurrency.convert(this.transaction.amount,this.rawconv), 5)
    },
    formattedDate () {
      let date = new Date(this.transaction.local_timestamp * 1000); 
      return date.getDate() + ' ' + date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear()
    },
    pow () {
      return this.$store.state.app.pow
    },
    ready () {
      return this.$store.state.app.ready
    },
    privatekey () {
      return this.$store.state.app.privatekey
    },
    hash () {
      if (this.type === 'pending') {
        return this.index
      }
      return this.transaction.hash
    },
    prefixparams () {
      return this.$store.state.app.prefixparams
    }

  },
  methods: {    
    
    formatMoney(amount){
      const options = { style: 'currency', currency: 'USD' };
      const formatter = new Intl.NumberFormat('en-US', options);
      return formatter.format(amount);
    },
    iconSvg: function (icon) {
      return feather.icons[icon].toSvg();
    },
    async receive () {
      if(this.pow === null) {
        this.$notify({
          title: 'Calculo de PoW incompleto',
          text: 'Por favor espere que el cálculo termine',
          type: 'error'
        })
      }

      const publickey = NanoCurrency.derivePublicKey(this.privatekey)
      let params = {}
      params[this.prefixparams] = true
      const address = NanoCurrency.deriveAddress(publickey,params)
      let infodetails = {}
      infodetails['action'] = 'account_info'
      infodetails['representative'] = 'true'
      infodetails['account'] = address
      const info = await this.$store.dispatch('app/rpCall', infodetails)

      let startingbalance = '0'
      let blocktype = 'open'
      // let frontier = publickey; // Value is never used
      let previous = '0000000000000000000000000000000000000000000000000000000000000000'
      let rep = address

      if ('balance' in info){
        startingbalance = info.balance;
        blocktype = 'receive';
        // frontier = info.frontier; // Value is never used
        previous = info.frontier;
        rep = info.representative;
      }

      var balance = new BigNumber(startingbalance).plus(new BigNumber(this.transaction.amount)).toFixed();
      var block = NanoCurrency.createBlock(this.privatekey, {
        work: this.pow,
        previous: previous,
        representative: rep,
        balance: balance,
        link: this.index
      },params);
      var receive = {};
      receive['action'] = 'process';
      //receive['json_block'] = 'true';
      receive['subtype'] = blocktype;
      receive['block'] = JSON.stringify(block.block);
      await this.$store.dispatch('app/rpCall', receive)
      this.$emit('receive', true)
      //this.$store.commit('app/pow', null)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
