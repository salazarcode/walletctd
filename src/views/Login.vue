<template>
<div>
      <div class="hero is-fullheight is-dark">
        <div class="is-overlay waves">
        </div>
        <div class="is-overlay intraders-badge">
            <svg id="Componente_7_3" data-name="Componente 7 – 3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="86" height="320" viewBox="0 0 86 320">
                    <defs>
                      <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 424 80">
                        <image width="424" height="80" xlink:href="@/assets/img/Logo-Intradrer-white.png"/>
                      </pattern>
                    </defs>
                    <g id="Grupo_2" data-name="Grupo 2" transform="translate(988 -126) rotate(90)">
                      <g id="Rectángulo_7" data-name="Rectángulo 7" transform="translate(126 902)" fill="#000f1a" stroke="#fff" stroke-width="1">
                        <rect width="320" height="86" stroke="none"/>
                        <rect x="0.5" y="0.5" width="319" height="85" fill="none"/>
                      </g>
                      <g id="Grupo_1" data-name="Grupo 1" transform="translate(572 1917.148) rotate(180)">
                        <text id="Powered_by_the_" data-name="Powered by the
                  " transform="translate(140 994.148)" fill="#fff" font-size="11" font-family="Montserrat-Light, Montserrat" font-weight="300" letter-spacing="0.2em"><tspan x="0" y="0">Powered by the</tspan><tspan x="0" y="14"></tspan></text>
                        <text id="ecosystem_" data-name="ecosystem
                  " transform="translate(356 994.148)" fill="#fff" font-size="11" font-family="Montserrat-Light, Montserrat" font-weight="300" letter-spacing="0.2em"><tspan x="0" y="0">ecosystem</tspan><tspan x="0" y="14"></tspan></text>
                        <rect id="Logo-Intradrer-white" width="78" height="15" transform="translate(266 982.148)" fill="url(#pattern)"/>
                      </g>
                    </g>
                  </svg>
        </div>
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <div class="navbar-item">
                            <img style="max-height: 50px" src="@/assets/img/logo-primario (2).png" alt="Logo">
                        </div>
                        <span class="navbar-burger" data-target="navbarMenuHeroA">
                            <span></span>
                        <span></span>
                        <span></span>
                        </span>
                    </div>
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <span class="is-size-7 has-text-primary"> ES / EN / POR</span>
                        </div>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                          <router-link class="genwallet" :to="'/generate'">
                            <div class="button is-primary is-uppercase is-small has-text-weight-bold">
                                Inicia ahora
                            </div>
                          </router-link>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-7 is-hidden-touch">
                        <div class="title is-1 is-uppercase">
                            <span class="has-text-primary has-text-weight-light">
                                Dinero
                            </span>
                            <br>
                            <span class="has-text-primary">
                                Eficiente
                            </span>
                            <br>
                            <span class="has-text-weight-light">
                                Economía
                            </span>
                            <br> Moderna
                        </div>
                    </div>
                    <div class="column is-5">
                        <div class="card box">
                            <div class="card-content has-text-dark">
                                <div class="title is-5 is-uppercase has-text-dark">
                                    Accede a tu monedero.
                                </div>
                                <div class="tabs is-small">
                                    <ul>
                                        <li @click="setSeed" class="df" :class="{ 'is-active': seedtab === true}" for="seed"><a>SEED</a></li>
                                        <li @click="setPrivate" class="df" :class="{ 'is-active': seedtab !== true}" for="key"><a>Clave Privada</a></li>
                                    </ul>
                                </div>
                                <form>
                                    <fieldset class="field">
                                        <div class="control">
                                            <input v-model="seed" v-if="seedtab" :type="logintype" placeholder="Seed" id="key" name="key" class="input is-primary">
                                            <input v-model="key" v-if="!seedtab" :type="logintype" placeholder="Private key" id="key" name="key" class="input is-primary">
                                        </div>
                                    </fieldset>
                                    <div class="buttons">
                                        <button @click="openWallet" class="button is-primary has-text-weight-bold">Abrir Monedero</button>
                                        <scan-qr @scanned="scanDone"></scan-qr>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-footer">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <li class="is-active">
                            <a class="has-background-primary is-borderless">Realmente Privado</a>
                        </li>
                        <li class="is-active">
                            <a class="has-background-white has-text-primary is-borderless">Realmente Gratuito</a>
                        </li>
                        <li class="is-active">
                            <a class="has-background-primary is-borderless">Realmente Eco-Amigable</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import { serverMixin } from '../mixins/serverMixin.js'
import * as webglpow from '../mixins/webgl-pow.js'
import * as NanoCurrency from '@thelamer/nanocurrency'
import Worker from 'worker-loader!./../mixins/pow.js'
import ScanQr from '../components/ScanQr.vue'


const hardwareConcurrency = window.navigator.hardwareConcurrency || 2
const workerCount = Math.max(hardwareConcurrency - 1, 1)
let workerList = []

function initialState (){
  return {
    seed: null,
    seedindex: null,
    key: null,
    open: false,
    details: {},
    error: null,
    balance: 0,
    receive: false,
    genwallet: false,
    send: false,
    settings: false,
    representative: '',
    blockdetails: null,
    address: null,
    logintype: 'password',
    walletdata: null,
    isActive: false,
    balanceextra: false,
    terminate: false,
    showadvanced: false,
    seedtab: true,
    pendingpoll: null,
    lastrefresh: new Date(),
    closebutton: true,
    nfcsup: false,
    derivephrase: '',
    aboutphrase: false,
    workthresholdgl: '0xFFFFFFF8',
    workthreshold: 'fffffff800000000',
    filebutton: 'File'
  }
}

export default {
  name: 'Login',  
  components: {
    ScanQr
  },
  mixins: [ serverMixin ],
  data() {
    return initialState();
  },
  watch: {
    open: function (newopen) {
      if(newopen === true && this.key !== null || this.seed !== null) {
        console.log('open')
        this.refreshDetails(true)
      }
    },
    pow: async function (newpow, oldpow) {
      if(this.open === true && newpow !== oldpow && newpow === null) {
        console.log('pow change')
        this.refreshDetails()
      }
    },
    receive: function (state) {
      if (state === true && this.$route.name !== 'POS') {
        const that = this
        let currentpending
        let newpending
        let currentkeys
        let newkeys
        this.pendingpoll = setInterval(async function(){ 
          currentpending = that.pending
          await that.$store.dispatch('app/pending', that.address)
          that.lastrefresh = new Date()
          that.$nextTick(function () {
            newpending = that.pending
            if (JSON.stringify(currentpending) !== JSON.stringify(newpending)) {
              currentkeys = Object.keys(currentpending)
              newkeys = Object.keys(newpending)
              for (const key of newkeys) {
                if(currentkeys.indexOf(key) === -1) {
                  that.$notify({
                    title: 'Funds delivered: ' + NanoCurrency.convert(newpending[key].amount,this.rawconv),
                    text: 'Sent from '+ that.abbreviateAddress(newpending[key].source, false),
                    type: 'success'
                  })
                }
              }
            }
          })
        }, 10000)
      } else {
        clearInterval(this.pendingpoll)
      }
    }
  },
  mounted () {
    if (this.$route.name == 'POS') {
     this.address = this.$store.state.node.address;
     this.receive = true
     this.closebutton = false
    }
    if ("NDEFReader" in window) {
      this.nfcsup = true
    }
  },
  computed: {
    genWalletLink () {
      if('node' in this.$route.params) {
        return this.$route.params.node
      }
      return ''
    },
    loginicon () {
      return (this.logintype === 'password') ? 'fa-eye' : 'fa-eye-slash'
    },
    pow () {
      return this.$store.state.app.pow
    },
    ready () {
      return this.$store.state.app.ready
    },
    history () {
      return this.$store.state.app.history
    },
    pending () {
      return this.$store.state.app.pending
    },
    privatekey () {
      return this.$store.state.app.privatekey
    },
    prefixparams () {
      return this.$store.state.app.prefixparams
    }
  },
  methods: {
    setSeed () {
      this.seedtab = true
    },
    setPrivate () {
      this.seedtab = false
      this.showadvanced = false
    },
    repChange () {
      this.refreshDetails()
      this.settings = false
    },
    scanDone: function (data) {
      if (data.startsWith('nanokey:')){
        this.seedtab = false
        this.showadvanced = false
        this.key = data.replace('nanokey:','').substr(0, 64)
        this.error = null
      } else if (data.startsWith('nanoseed:')) {
        const seed = data.replace('nanoseed:','').substr(0, 64)
        this.seed = seed
        this.error = null
      } else {
        this.error = 'QR code data does not conform to specification'
        this.seed = data
      }
    },

    /* pasteKey () {
      this.key = this.pasteFromClipboard()
    }, */
    logout () {
      Object.assign(this.$data, initialState());
      this.$store.dispatch('app/resetState')
      for (let workerIndex in workerList) {
        console.log('Terminate: ' + workerIndex)
        workerList[workerIndex].terminate();
      }
    },
    refresh () {
      this.isActive = !this.isActive
      this.refreshDetails()
    },
    async refreshDetails (open = false) {
      let current = null
      if('frontier' in this.details) {
        current = this.details.frontier
      }
      try {
        await this.getDetails(this.privatekey)
        this.lastrefresh = new Date()
        if(current !== this.details.frontier || open === true) {
          this.genWork(this.privatekey, this.details)
        }
        this.$store.dispatch('app/history', this.address)
        this.$store.dispatch('app/pending', this.address)
        if (this.details.balance) {
          this.balance = NanoCurrency.convert(this.details.balance, this.rawconv);
          this.$store.commit('app/balance', this.balance)
        } else {
          this.balance = 0;
        }
        this.representative = this.details.representative;
      } catch(e) {
        this.error = 'Could not connect to RPC 1'
        this.open = false
      }
    },
    async genWork (key, details){
      this.$store.commit('app/pow', null)
      this.$store.commit('app/ready', false)
      if (this.prefixparams == 'useBananoPrefix') {
        this.workthresholdgl = '0xFFFFFFE0'
        this.workthreshold = 'fffffe0000000000'
      }

      let hash
      if ('frontier' in details){
        console.log('Frontier in details');
        hash = details.frontier
      } else {
        console.log('Frontier NOT in details');
        hash = NanoCurrency.derivePublicKey(key)
      }
      
      const gl = document.createElement('canvas').getContext('webgl2');
      if (gl) {
        console.log('Calculating pow for ' + hash + ' using WebGL this may take some time');
        webglpow.calculate(hash, this.workthresholdgl, 2048, 256, (work) => {
            this.$store.commit('app/pow', work)
            this.$store.commit('app/ready', true)
        })
      } else {
        if (window.Worker) {
          console.log('Calculating pow for ' + hash + ' this may take some time');
          const work = () => new Promise(resolve => {
            workerList = []
            for (let i = 0; i < workerCount; i++) {
              const worker = new Worker()
              worker.postMessage({
                blockHash: hash,
                workerIndex: i,
                workerCount: workerCount,
                workThreshold: this.workthreshold
              });
              worker.onmessage = (work) => {
                console.log('Work: ' + work.data);
              
                this.$store.commit('app/pow', work.data)
                this.$store.commit('app/ready', true)
                for (let workerIndex in workerList) {
                  console.log('Terminate: ' + workerIndex)
                  workerList[workerIndex].terminate();
                }
                resolve();
              };
              workerList.push(worker);
            }
  
          });
          await work();
        }
        else{
          console.log('Calculating pow for ' + hash + ' (no worker) this may take some time');
          var work = await NanoCurrency.computeWork(hash,{ workThreshold: this.workthreshold });
          this.$store.commit('app/pow', work)
          this.$store.commit('app/ready', true)

        }
      }

    },

    togglevisibility () {
      console.log(this.logintype)
      this.logintype = (this.logintype === 'password') ? 'text' : 'password'
    },
    getAddress (key) {
      const publickey = NanoCurrency.derivePublicKey(key)
      let params = {}
      params[this.prefixparams] = true
      return NanoCurrency.deriveAddress(publickey,params)
    },
    async getDetails (key) {
      this.address = this.getAddress(key)
      this.details = await this.$store.dispatch('app/getDetails', this.address)
    },
    async openWallet () {
      this.error = null
      if(this.key) {
        try {
          const checkKey = NanoCurrency.checkKey(this.key)
          if(checkKey === false) {
            this.error = 'Invalid key'
          } else {
            this.$store.commit('app/privatekey', this.key)
            this.$router.push("Home");
          }

        } catch(e) {
          this.error = e
        }

      } else if (this.seed) {
        try {
          const checkSeed = NanoCurrency.checkSeed(this.seed)
          if(checkSeed === false) {
            this.error = 'Invalid Seed'
          } else {
            if (this.seedindex == null) {
              this.seedindex = 0
            } else {
              this.seedindex = parseInt(this.seedindex)
            }
            this.key = NanoCurrency.deriveSecretKey(this.seed, this.seedindex)
            this.$store.commit('app/privatekey', this.key)
            this.$router.push("Home");
          }

        } catch(e) {
          this.error = e
        }

      }

    },
    async derivefromphrase () {
      const that = this
      const fileitem = document.getElementById('deriveupload').files[0]
      if (fileitem) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(fileitem)
        reader.onload = async function(file) {
          const filebytes = file.target.result
          const shasum = await that.shasum(that.derivephrase,filebytes)
          that.seed = shasum
        }
      } else if (that.derivephrase) {
        const shasum = await that.shasum(that.derivephrase,null)
        that.seed = shasum
      } else {
        that.$notify({
          title: 'Error',
          text: 'You must set one or both of file or phrase to use this',
          type: 'error'
        })
      }
    },

    closePhrasefile () {
      this.aboutphrase = false
    },

    openPhrasefile () {
      this.aboutphrase = true
    },

    filebuttonchange () {
      const fileitem = document.getElementById('deriveupload').files[0]
      this.filebutton = fileitem.name.substring(0, 10) + '..'
    }

  }
}
</script>

