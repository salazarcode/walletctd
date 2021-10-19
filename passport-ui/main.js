/**
 * Imports
 */
import * as NanoCurrency from "@thelamer/nanocurrency"
import { toast as notify } from 'bulma-toast'


import {
    jarallax
} from 'jarallax'
const feather = require('feather-icons')
require('console-success')
import Bulma from '@vizuaalog/bulmajs'

/**
 * Wallet Functions
 */

async function getSeed (context) {
    const params = ['useNanoPrefix']
    const seed = await NanoCurrency.generateSeed();
    const wallet = seedData(context, {seed, params})
    return wallet
}

async function seedData (context, data) {
    const privatekey = NanoCurrency.deriveSecretKey(data.seed, 0);
    const publickey = NanoCurrency.derivePublicKey(privatekey);
    const address = NanoCurrency.deriveAddress(publickey,data.params);
    const payload = {
        "seed":data.seed,
        "privatekey":privatekey,
        "publickey":publickey,
        "address":address
    };
    return payload;
}

/**
 * 
 */


/**
 * Passport
 */

require('dotenv').config()

const passport = {
    secret: process.env.SECRET_KEY,
    url: process.env.DB_URL
}

/**
 * Passport Events
 */

 const onregister = new CustomEvent("onregister", { "detail": "This fires when Passport registers an user." })
 const onauth = new CustomEvent("onauth", { "detail": "This fires when Passport authenticates an user." })


/**
 * Jarallax
 */
jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
})

/**
 * Register 
 */

const addUser = async (name, email, phone, password) => {
    document.querySelector('#submit').classList.toggle('is-loading')
    const wallet = await getSeed()
    fetch(passport.url + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': passport.secret
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                password,
                seed:wallet.seed, 
                address:wallet.address, 
                privatekey:wallet.privatekey, 
                publickey:wallet.publickey, 
            }),
            cache: 'no-cache'
        })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const save = document.querySelector('#save')
            if(save)
            save.addEventListener('click', () => {
                saveWallet('Seed: ' + wallet.seed + '\nPrivate Key: ' + wallet.privatekey + '\nPublic Key: ' + wallet.publickey + '\nAddress: ' + wallet.address)
            })
            save.removeAttribute('disabled')
            console.log(save)
            setTimeout(() => {
                notify({
                    message: 'Te has registrado en Passport correctamente. 😊',
                    type: 'is-success',
                    dismissible: true,
                    pauseOnHover: true,
                })
                document.querySelector('#submit').classList.toggle('is-loading')
                document.dispatchEvent(onregister)
            }, 1000);
            window.passport = data
        })
        .catch(function (err) {
            console.error(err)
        })

}



const authUser = (email, password) => {
    document.querySelector('#auth').classList.toggle('is-loading')
    fetch(passport.url + '/users/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': passport.secret
            },
            body: JSON.stringify({
                email,
                password
            }),
            cache: 'no-cache'
        })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            if(data._id){
                setTimeout(() => {
                    notify({
                        message: 'Has iniciado sesión correctamente. 🤘',
                        type: 'is-success',
                        dismissible: true,
                        pauseOnHover: true,
                    })
                    document.querySelector('#auth').classList.toggle('is-loading')
                    document.dispatchEvent(onauth)
                }, 1000);
            }else {
                setTimeout(() => {
                    notify({
                        message: data.message,
                        type: 'is-danger',
                        dismissible: true,
                        pauseOnHover: true,
                    })
                    document.querySelector('#auth').classList.toggle('is-loading')
                }, 1000);
            }
            
            
            window.passport = data
        })
        .catch(function (err) {
            console.error(err)
        })

}

const saveWallet = (data) => {
    const filename = 'passport_wallet_autogenerated.txt'
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
}

const register = document.forms.register

if(register)
register.onsubmit = (e) => {
    e.preventDefault()
    addUser(
        register.name.value,
        register.email.value,
        register.phone.value,
        register.password.value,
    )
}

const authenticate = document.forms.authenticate

if(authenticate)
authenticate.onsubmit = (e) => {
    e.preventDefault()
    authUser(
        authenticate.email.value,
        authenticate.password.value,
    )
}

document.querySelector('.passport-trigger')?.addEventListener('click', (e) =>{
    e.preventDefault()
    document.querySelector('.passport-container').classList.toggle('is-hidden')
})

/**
 * Welcomming the advanced user.
 */
feather.replace()
console.success('Bienvenido a Intraders Passport. Autentícate con seguridad.🤘🤘')