<template>
  <div style="top: 0;" id="blockdetails" class="page active">
    <div id="inputs">
      <div class="labeltabs">
        <label @click="setNormal" class="df" :class="{ active: showadvanced !== true}">
          Enter Node Address
        </label>
      </div>
      <input v-if="showadvanced === false" v-model="node" type="text" id="node" name="node">
      <button v-if="showadvanced === false" @click="openNode" class="openwallet btn" type="button">Go To Node</button>
    </div>
  </div>
</template>

<script>
import { serverMixin } from '../mixins/serverMixin.js'

export default {
  name: 'Node',
  components: {
  },
  data() {
    return {
      node: 'andresalteclado.com',
      address: '',
      auth: '',
      nodetype: 'nano',
      showadvanced: false
    }
  },
  mixins: [ serverMixin ],
  methods: {
    openNode () {
      window.open(window.location.href.replace('/#/node','') + '/#/' + this.node, '_blank')
    },
    openAdvanced () {
      if (this.address) {
        let urlreg = new RegExp('^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*')
        if (urlreg.test(this.address)){
          let url = new URL(this.address)
          this.$store.state.app.settings.changeaddress = false
          this.$store.state.app.settings.checkbackends = false
          this.$store.state.app.settings.followlinks = false
          let node = {}
          node['headers'] = {'Content-Type': 'application/json'}
          node['address'] = url.hostname
          node['protocol'] = url.protocol.replace(':','')
          node['path'] = url.pathname
          if (url.port) {
            node['port'] = url.port
          } else if (url.protocol == 'http:') {
            node['port'] = 80
          } else if (url.protocol == 'https:') {
            node['port'] = 443
          }
          if (this.auth) {
            node['auth'] = this.auth
          }
          if (this.nodetype == 'banano') {
            node['banano'] = true
            this.$store.state.app.prefixparams = 'useBananoPrefix'
          }
          this.$store.state.app.settings.node = [node]
          this.$router.push({name:'Home'})
        } else {
          this.$notify({
            title: 'Error',
            text: 'URL Malformed',
            type: 'error'
          })
        }
      } else {
        this.$notify({
          title: 'Error',
          text: 'Please fill out all required values',
          type: 'error'
        })
      }
    },
    openLocalhost () {
      window.open(window.location.href.replace('/#/node','') + '/#/127.0.0.1', '_blank')
    },
    setAdvanced () {
      this.showadvanced = true
    },
    setNormal () {
      this.showadvanced = false
    },
    openPreset (preset) {
      window.open(window.location.href.replace('/#/node','') + '/#/' + preset, '_blank')
    }
  }
}
</script>

<style lang="scss">
.presets button{
  padding: 10px !important;
  font-size: 12px !important;
  margin-right: 4px !important;
  margin-left: 4px !important;
  margin-bottom: 8px !important;
}
.yellow {
  color: #FFFF00 !important;
  border-color: #FFFF00 !important;
}
</style>
