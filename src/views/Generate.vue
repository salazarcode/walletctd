<template>
  <div id="genwallet" class="page has-background-dark active">
    <div class="container">
      <div class="is-size-2 has-text-light">Nueva Wallet</div>
      <router-link class="close" :to="$store.getters['app/nodeLink']"><i class="fal fa-times"></i></router-link>
      <hr />
      <div class="columns">      

        <div class="column is-6">         

          <div class="">
            <div class="block  has-text-white">
              <div class="details smaller">
                <label for="seed">Seed <a class="refreshwallet" @click.prevent="refreshWallet" href=""><i class="fal fa-sync"></i></a></label>
                <a href="#" @click="copyToClipboard(seed)" class="copy has-margin-left-10"><i class="fad fa-clone"></i></a>
                <div class="login">
                  <input class="copytext input " type="text" v-model="seed" name="seed" />
                  <span @click="clearWallet" class="tag is-small has-margin-top-10 has-margin-bottom-30 has-cursor-pointer">CLEAR</span>
                </div>
              </div>
              <div class="details smaller">
                <label for="address">Address</label>
                <a href="#" @click="copyToClipboard(address)" class="copy has-margin-left-10"><i class="fad fa-clone"></i></a>
                <input class="copytext input " type="text" v-model="address" name="address" />
              </div>
              <button style="margin-top: 30px;" class="button is-primary" @click="copyToClipboard('Seed: ' + seed + '\nPrivate Key: ' + privatekey + '\nPublic Key: ' + publickey + '\nAddress: ' + address)">Copiar al Portapapeles</button>
              <button class="button is-primary is-outlined" @click="save('Seed: ' + seed + '\nPrivate Key: ' + privatekey + '\nPublic Key: ' + publickey + '\nAddress: ' + address)">Descargar</button>
            </div>

            <div class="page" style="z-index: 9;" :class="{active: aboutphrasegen !== false}">
              <a class="close" @click="closePhrasefilegen"><i class="fal fa-times"></i></a>
              <p>Before you use this method to generate your seed you should have a firm grasp on what is happening on the backend. This generation method will shasum a file or a phrase or the combination of the two sums and use that as the seed for your account. In general human beings are incapable of creating a cryptographically secure phrases which is why BIP39 exists, at the least you should use a file + phrase to generate. While using this method have the underlying expectation that the funds using this seed have a chance to be stolen and only ever use it for small daily transactional amounts. You should also treat the file you are using for this method the same you would as a local wallet data file. When coming up with a phrase length and complexity is the key. Do not use known quotes or sayings or popular files and try to use capitalization and special characters where you will remember them.</p>
            </div>
          </div>
        </div>
        
        <div class="column is-6" style="height:500px;overflow-y:auto">     
          <div class="card box">
            <div class="card-content has-background-white has-padding-10" v-html="terminos_y_condiciones_content">

              <div class="title" v-html="terminos_y_condiciones_title">
              </div>

              <div v-html="terminos_y_condiciones_content">
              </div>

            </div>                   
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { serverMixin } from '../mixins/serverMixin.js'

export default {
  name: 'Generate',
  mixins: [ serverMixin ],
  components: {
  },
  data() {
    return {
      newrep: '',
      seed: '',
      privatekey: '',
      publickey: '',
      address: '',
      walletdata: {},
      phrase: '',
      aboutphrasegen: false,
      filebutton: 'Seed File',
      terminos_y_condiciones_title: "",
      terminos_y_condiciones_content: ""
    }
  },
  watch: {
    seed: function (newseed, oldseed) {
      if(oldseed && newseed && newseed !== oldseed && newseed.length === 64) {
        let params = {}
        params[this.$store.state.app.prefixparams] = true
        let seed = newseed
        this.$store.dispatch('app/seedData', {seed, params}).then(data => {
          this.seed = data.seed,
          this.privatekey = data.privatekey,
          this.publickey = data.publickey,
          this.address = data.address
        }) 
      }
    }
  },
  methods: {
    save (data) {
      const filename = this.abbreviateAddress(this.address, false) + '.txt'
      var blob = new Blob([data], {type: 'text/csv'});
      if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
      }
      else{
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
      }
    },
    clearWallet () {
      this.seed = ''
      this.address = ''
    },
    refreshWallet () {
      let params = {}
      params[this.$store.state.app.prefixparams] = true
      this.$store.dispatch('app/getSeed', params).then(data => {
        this.seed = data.seed,
        this.privatekey = data.privatekey,
        this.publickey = data.publickey,
        this.address = data.address
      }) 

    },
    async seedfromphrase () {
      const that = this
      const fileitem = document.getElementById('fileupload').files[0]
      if (fileitem) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(fileitem)
        reader.onload = async function(file) {
          const filebytes = file.target.result
          const shasum = await that.shasum(that.phrase,filebytes)
          that.seed = shasum
        }
      } else if (that.phrase) {
        const shasum = await that.shasum(that.phrase,null)
        that.seed = shasum
      } else {
        that.$notify({
          title: 'Error',
          text: 'You must set one or both of file or phrase to use this',
          type: 'error'
        })
      }
    },
    closePhrasefilegen () {
      this.aboutphrasegen = false
    },
    openPhrasefilegen () {
      this.aboutphrasegen = true
    },
    filebuttonchange () {
      const fileitem = document.getElementById('fileupload').files[0]
      this.filebutton = fileitem.name.substring(0, 20) + '..'
    }
  },
  computed: {
    genWalletLink () {
      if('node' in this.$route.params) {
        return this.$route.params.node
      }
      return ''
    }
  },
  async mounted () {
    let params = {}
    params[this.$store.state.app.prefixparams] = true
    this.$store.dispatch('app/getSeed', params).then(data => {
      this.seed = data.seed,
      this.privatekey = data.privatekey,
      this.publickey = data.publickey,
      this.address = data.address
    }) 
    let terminosYCondiciones = await fetch("https://cointrader.intraders.com.co/wp-json/wp/v2/pages?slug=terminos-y-condiciones-del-uso-de-la-wallet-de-cointrader/").then(x => x.json());
    this.terminos_y_condiciones_content = terminosYCondiciones[0].content.rendered;
    this.terminos_y_condiciones_title = terminosYCondiciones[0].title.rendered;
  }
}
</script>

<style lang="scss">
</style>
<style lang="scss" scoped>
.button {
  width: 100%;
  margin-bottom: 15px;
}
.canvas-bag {
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.refreshwallet {
  color: #59c7f1;
  margin-left: 15px;
}
#genwallet {
  .login {
    .max {
      height: 37px;
    }
  }
}
.details .copy has-margin-left-10 {
    right: -21px;
    top: 40px;
}
</style>
