<template>
  <div>
      <div class="preloader">        
        <Lottie :options="lottieOptions" :height="600" :width="800" v-on:complete="animacionCompletada" />
      </div>
      <div class="hero is-fullheight is-dark">
          <div class="is-overlay waves">
          </div>
          <div class="is-overlay intraders-badge">
              <svg id="Componente_7_3" data-name="Componente 7 – 3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="86" height="320" viewBox="0 0 86 320">
                  <defs>
                      <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 424 80">
                          <image width="424" height="80" xlink:href="@/assets/img/Logo-Intradrer-white.png" />
                      </pattern>
                  </defs>
                  <g id="Grupo_2" data-name="Grupo 2" transform="translate(988 -126) rotate(90)">
                      <g id="Rectángulo_7" data-name="Rectángulo 7" transform="translate(126 902)" fill="#000f1a"
                          stroke="#fff" stroke-width="1">
                          <rect width="320" height="86" stroke="none" />
                          <rect x="0.5" y="0.5" width="319" height="85" fill="none" />
                      </g>
                      <g id="Grupo_1" data-name="Grupo 1" transform="translate(572 1917.148) rotate(180)">
                          <text id="Powered_by_the_" data-name="Powered by the
                    " transform="translate(140 994.148)" fill="#fff" font-size="11"
                              font-family="Montserrat-Light, Montserrat" font-weight="300" letter-spacing="0.2em">
                              <tspan x="0" y="0">Powered by the</tspan>
                              <tspan x="0" y="14"></tspan>
                          </text>
                          <text id="ecosystem_" data-name="ecosystem
                    " transform="translate(356 994.148)" fill="#fff" font-size="11"
                              font-family="Montserrat-Light, Montserrat" font-weight="300" letter-spacing="0.2em">
                              <tspan x="0" y="0">ecosystem</tspan>
                              <tspan x="0" y="14"></tspan>
                          </text>
                          <rect id="Logo-Intradrer-white" width="78" height="15" transform="translate(266 982.148)"
                              fill="url(#pattern)" />
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
                              <div class="button is-primary is-outlined is-uppercase is-small has-text-weight-bold"  @click="logout">
                                  Salir
                              </div>
                          </div>
                      </div>
                  </div>
              </nav>
          </div>
          <div class="hero-body">
              <div class="container">
                  <div class="columns">
                      <div class="column is-6">
                          <div class="title is-6 is-uppercase has-text-weight-light">Monedero</div>
                          <div class="columns is-multiline">
                              <div class="column is-12">
                                  <div class="card box has-background-primary">
                                      <div class="title is-1">
                                          <span class="has-text-weight-light">CTD</span> {{ balance }}
                                      </div>
                                      <div class="tags has-addons">
                                          <span class="tag">Dirección</span>
                                          <span class="tag is-dark">{{ address }}</span>
                                      </div>
                                      <div class="buttons">
                                          <div class="button is-dark is-outlined is-small">Anexa tu número de teléfono
                                          </div>
                                          <div class="button is-white is-outlined is-small">Copiar Dirección</div>
                                      </div>

                                  </div>
                              </div>
                              <div class="column is-6">
                                  <div class="card box has-background-white has-cursor-pointer" @click="receive = true">
                                      <div class="icon has-text-primary"><i data-feather="download-cloud"></i></div>
                                      <div class="title is-4 has-text-primary">
                                          Recibir ANDRES
                                          <span class="has-text-weight-light">Fondos</span>
                                      </div>
                                  </div>
                              </div>
                              <div class="column is-6">
                                  <div class="card box has-background-dark has-cursor-pointer" @click="send = true">
                                      <div class="icon has-text-primary"><i data-feather="upload-cloud"></i></div>
                                      <div class="title is-4">
                                          Enviar <br />
                                          <span class="has-text-weight-light">Fondos</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="column is-5 is-offset-1">
                          <div class="title is-6 has-text-weight-light is-uppercase">Historial</div>
                          <transaction
                            v-for="(transaction, index) in history"
                            :key="index"
                            :index="index"
                            :transaction="transaction"
                            v-on:blockdetails="blockdetails = $event"
                            :type="transaction.type"
                          ></transaction>                       

                      </div>
                  </div>
              </div>
          </div>



          <div id="send" class="page" :class="{active: send !== false}">
            <a class="close" v-if="closebutton === true" @click="send = false"><i class="fal fa-times"></i></a>
            <send :open="send" @close="send = false"></send>
          </div>

          <div id="receive" class="page" :class="{active: receive !== false}">
            <a class="close" v-if="closebutton === true" @click="receive = false"><i class="fal fa-times"></i></a>
            <receive
              :address="address"
            ></receive>
          </div>


      </div>
  </div>
  <!-- <div class="wallet">
    <div type="hidden" id="workstorage"></div>
      <div id="wallet" class="page" :class="{active: open === true}">
        <div id="powstatus">
            <div class="status busy" :class="{active: ready === false}">Calculating Work <i class="fas fa-spinner fa-spin"></i></div>
            <div class="status ready" :class="{active: ready === true}">Ready <i class="fas fa-check"></i></div>
        </div>

        <div class="inner">
          <div class="block">
            <div class="headingtitle top">
              <span id="closewallet" class="" @click="logout"><i class="fal fa-sign-out fa-flip-horizontal"></i></span>
              <span>Wallet</span>
              <span class="refresh rotate" @click="refresh" :class="{ down: isActive }"><i class="fal fa-sync"></i></span>
              <div class="lastrefresh">Last Refresh: {{ lastrefresh.toLocaleTimeString() }}</div>
            </div>

            <simplebar class="block pending">
              <div id="output">
                <div class="balance">
                  <div @click="copyToClipboard(address)" :class="{ active: balanceextra }" class="raw">{{ address }}</div>
                  <div class="value" v-html="abbreviateNumber(balance)"></div>
                  <div class="raw" :class="{ active: balanceextra }">{{ balance }}</div>
                  <a class="balanceextra" href="" @click.prevent="balanceextra = !balanceextra"><i data-fa-transform="grow-20" class="fal fa-ellipsis-h"></i></a>
                </div>
              </div>

              <div class="headingtitle showmobile">History</div>

              <transaction
                v-for="(transaction, index) in pending"
                :key="index"
                :index="index"
                :transaction="transaction"
                v-on:blockdetails="blockdetails = $event"
                type="pending"
                @receive="refreshDetails"
              ></transaction>
            </simplebar>
          </div>

          <simplebar class="block history">
            <div class="headingtitle hidemobile">History</div>

            <transaction
              v-for="(transaction, index) in history"
              :key="index"
              :index="index"
              :transaction="transaction"
              v-on:blockdetails="blockdetails = $event"
              :type="transaction.type"
            ></transaction>
          </simplebar>
        </div>

        <div id="walletmenu" class="menu">
          <div class="bg"></div>

          <div class="content">
            <div class="tab" data-tab="#receive" @click="receive = true">
              <span class="menuicon"><i data-fa-transform="grow-8" class="fal fa-wallet"></i></span>
              <span>Receive</span>
            </div>

            <div class="tab" data-tab="#send" @click="send = true">
              <span class="menuicon"><i data-fa-transform="grow-8" class="fal fa-coins"></i></span>
              <span>Send</span>
            </div>

            <div class="tab" data-tab="#settings" @click="settings = true">
              <span class="menuicon"><i data-fa-transform="grow-8" class="fal fa-cog"></i></span>
              <span>Settings</span>
            </div>
          </div>
        </div>
      </div>
      <div id="send" class="page" :class="{active: send !== false}">
        <a class="close" v-if="closebutton === true" @click="send = false"><i class="fal fa-times"></i></a>
        <send :open="send" @close="send = false"></send>
      </div>
      <div id="settings" class="page" :class="{active: settings !== false}">
        <a class="close" v-if="closebutton === true" @click="settings = false"><i class="fal fa-times"></i></a>
        <settings
          :open="settings"
          :representative="representative"
          @change="repChange"
        ></settings>
      </div>
      <div id="receive" class="page" :class="{active: receive !== false}">
        <a class="close" v-if="closebutton === true" @click="receive = false"><i class="fal fa-times"></i></a>
        <receive
          :address="address"
        ></receive>
      </div>
      <div id="blockdetails" class="page" :class="{active: blockdetails !== null}">
        <a class="close" v-if="closebutton === true" @click="blockdetails = null"><i class="fal fa-times"></i></a>
        <block-state :details="blockdetails"></block-state>
      </div>
      <div class="page" style="z-index: 9;" :class="{active: aboutphrase !== false}">
        <a class="close" @click="closePhrasefile"><i class="fal fa-times"></i></a>
        <p>Before you use this method to login to your wallet you should have a firm grasp on what is happening on the backend. This login method will shasum a file or a phrase or the combination of the two sums and use that as the seed for your account. In general human beings are incapable of creating a cryptographically secure phrases which is why BIP39 exists, at the least you should use a file + phrase to login using this method. Please also generate a paper wallet from Generate Wallet or write down your seed somewhere. While using this method have the underlying expectation that the funds using this seed have a chance to be stolen and only ever use it for small daily transactional amounts.</p>
      </div>

  </div> -->
</template>

<script>
// @ is an alias to /src
import Transaction from '@/components/Transaction.vue'
import Send from '@/views/Send.vue'
import Receive from '@/views/Receive.vue'
// import Settings from '@/views/Settings.vue'
// import BlockState from '@/components/BlockState.vue'
// import simplebar from 'simplebar-vue';
import { serverMixin } from '../mixins/serverMixin.js'
import * as webglpow from '../mixins/webgl-pow.js'
import * as NanoCurrency from '@thelamer/nanocurrency'
import Worker from 'worker-loader!./../mixins/pow.js'
import 'simplebar/dist/simplebar.min.css';

const feather = require('feather-icons')
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '@/assets/data.json';
const hardwareConcurrency = window.navigator.hardwareConcurrency || 2
const workerCount = Math.max(hardwareConcurrency - 1, 1)
let workerList = []

function initialState (){
  return {
    seed: null,
    seedindex: null,
    key: null,
    open: true,
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
    filebutton: 'File',
    lottieOptions: {
        animationData: animationData.default,
    }
  }
}

export default {
  name: 'Home',
  components: {
    Lottie,
    Transaction,
    Send,
    Receive,
    // Settings,
    // BlockState,
    // simplebar
  
  },
  mixins: [ serverMixin ],
  data() {
    return initialState();
  },
  watch: {
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
  async mounted () {
    if (this.$route.name == 'POS') {
     this.address = this.$store.state.node.address;
     this.receive = true
     this.closebutton = false
    }
    if ("NDEFReader" in window) {
      this.nfcsup = true
    }
    await this.refreshDetails(true);
    console.log(this.address);
    if(this.$store.state.app.privatekey === undefined || this.address === null) {
      this.$router.push('/')
    }
    feather.replace();
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
      this.$router.push("/");
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
    },
    animacionCompletada(){
      console.log("Animación completada");
      const preloaderContainer = document.querySelector('.preloader');
      preloaderContainer.classList.add('hide')
      setTimeout(() => {
          preloaderContainer.classList.add('is-hidden')
      }, 800);
    }
  }
}
</script>

