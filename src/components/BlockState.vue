<template>
  <div class="container" v-if="blockstate !== null" >
    <div class="columns">
      <div class="column is-12">       
        <div class="block">
          <div class="title has-text-dark">Hash <span class="subtype value" @click="copyToClipboard(hash)"><i class="fad fa-clone"></i></span></div>
          <div class="label">{{ hash }}</div>
        </div> 
        <div class="block">
          <div class="title has-text-dark">Envía</div>
          <div class="account">{{ blockstate.contents.account }}</div>
        </div>
        <div class="block">
          <div class="title has-text-dark">Recibe</div>
          <div><span class="rec_raw">{{ blockstate.contents.link_as_account }}</span></div>
        </div>
        <div class="block">
          <div class="title has-text-dark">Monto <span class="amount value"></span></div>
          <div class="raw"><span class="amount_raw">CTD {{ naturalAmount(blockstate.amount) }}</span> raw</div>
        </div>
        <div class="block">
          <div class="title has-text-dark">Fecha <span class="value"></span></div>
          <div class="raw">{{ formattedDate }}</div>
        </div>    
      </div>
  

    
    </div>

  </div>       

</template>

<script>
import * as NanoCurrency from '@thelamer/nanocurrency'
import { serverMixin } from '../mixins/serverMixin.js'
//import simplebar from 'simplebar-vue'
//import 'simplebar/dist/simplebar.min.css'

export default {
  name: 'BlockState',
  components: {
    //simplebar
  },
  props: {
    details: {
      default: null,
      type: String
    },
    static: {
      default: false,
      type: Boolean
    }
  },
  mixins: [ serverMixin ],
  data() {
    return {
      hash: null,
      blockstate: null,
      net: null,
      metadatahex: '',
      metadatautf8: '',
      metadataipfs: '',
      addmetadata: false,
      metaform: false,
      metaformmax: 32,
      metadata: '',
      addmeta: false,
      showspinner: false
    }
  },
  mounted() {
    if(this.static) {
      this.getDetails(this.$route.params.hash)
    }
  },
  'globals':{
    'BigInt':true
  },
  watch: {
    async details (newvalue) {
      if(newvalue !== null) {
        this.getDetails(newvalue)
      } else {
        this.blockstate = null
      }
    }
  },
  methods: {
    naturalAmount: function(amount){
       return BigInt(amount) / 1000000000000000000000000000000n;
    },
    async getDetails(hash) {
      var blockinfo = {
        action: 'block_info',
        json_block: 'true',
        hash: hash
      }
      this.hash = hash
      this.blockstate = await this.$store.dispatch('app/rpCall', blockinfo);
      this.metadatahex = ''
      this.metadatautf8 = ''
      this.metadataipfs = ''
      this.metaform = false
      this.metadata = ''
      this.showspinner = false
      const response = await fetch('https://www.nanometadata.com/' + this.hash)
      if (response.ok) {
        this.addmeta = false
        const payload = await response.text()
        const hexmetadata = payload.substring(192)
        const ipfsres = await fetch('https://www.nanometadata.com/ipfs/' + this.hash)
        if (ipfsres.ok) {
          this.metadataipfs = 'https://cloudflare-ipfs.com/ipfs/' + hexmetadata
        } else {
          this.metadatahex = 'HEX: ' + hexmetadata
          this.metadatautf8 = 'UTF8: ' + new Buffer(hexmetadata, 'hex').toString('utf8')
        }
      } else {
        if (this.$route.name !== 'Block') {
          this.addmeta = true
        }
        this.metadatahex = 'None Found'
      }
    },
    formattedValue (raw) {
      return this.abbreviateNumber(NanoCurrency.convert(raw,this.rawconv), 5)
    },
    showmetaform () {
      this.metaform = !this.metaform
      return true
    },
    async setmeta () {
      if (this.metadata) {
        if (this.$store.state.app.node.address.split('.').slice(-2)[0] == 'linuxserver') {
          this.net = 'lsio'
        } else if (this.$store.state.app.prefixparams == 'useBananoPrefix') {
          this.net = 'banano'
        } else {
          this.net = 'live'
        }
        this.metaform = false
        this.showspinner = true
        const hex = Buffer(this.metadata).toString('hex')
        const { response, apires } = await this.setmetadata(hex,this.hash,this.$store.state.app.privatekey,this.net)
        if (response.ok) {
          this.$notify({
            title: 'Transaction signed',
            text: 'Transaction has been signed at nanometadata.com',
            type: 'success'
          })
          this.getDetails(this.hash)
        } else {
          this.$notify({
            title: 'Cannot sign transaction',
            text: apires,
            type: 'error'
          })
        }
      } else {
        this.$notify({
          title: 'Metadata Not Set',
          text: 'Please set some metadata',
          type: 'error'
        })
      }
    },
    metalink () {
      window.open('https://www.nanometadata.com/' + this.hash)
    }
  },
  computed: {

    formattedDate () {
      let date = new Date(this.blockstate.local_timestamp * 1000); 
      return date.getDate() + ' ' + date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear() + ' - ' + date.toLocaleTimeString()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app .page {
}
a {
  text-decoration: none;
  color:#a7b0ca; 
}
</style>
