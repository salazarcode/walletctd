<template>
    <div id="app">
        <router-view />
        <notifications position="top center" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
            // HelloWorld
        },
        data() {
            return {
                key: null
            }
        },
        watch: {
            $route() {
                //this.$store.dispatch('app/node')
            }
        },
        created() {    
        }   
    }
</script>


<style lang="scss">
    // Fonts
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap');

    // Body
    $body-bg1: #4d5879;
    $body-bg2: #26314e;

    // Typography
    $font-family-sans-serif: "Nunito",
    sans-serif;
    $font-size-base: 16px;
    $line-height-base: 1.6;

    // Colors
    $active: #0075c2;
    $text: #a7b0ca;
    $lighter-text: #959da0;

    //$highlight: #2cc2ca;
    $highlight: #59c7f1;
    $highlightsemi: #59c7f1bb;
    $highlight2: #af73d2;
    $highlight3: #e2ac39;

    html,
    body {
        min-height: 100vh;
        height: 100%;
        margin: 0;
    }

    pre {
        overflow-x: auto;
        font-size: 12px;
    }

    * {
        box-sizing: border-box;
    }

    a.close {
        z-index: 9999;
        position: relative;
    }

    .rotate {
        svg {
            transition: all 2s linear;
        }

        &.down {
            svg {
                transform: rotate(360deg);
            }
        }
    }

    .vue-notification-group {
        padding-top: 50px;
    }

    .df {
        display: flex;
    }

    .error {
        background: #ca4b4b;
        margin: 0 0 30px;
        padding: 10px;
        text-align: center;
        color: white;
        font-weight: 200;
    }

    canvas {
        display: inline-block !important;
        max-width: 100%;
        height: auto !important;
    }

    #powstatus {
        width: 100%;
        position: relative;
        height: 32px;
        overflow: hidden;
        position: absolute;
        z-index: 5;

        .status {
            padding: 5px;
            position: absolute;
            transition: 0.7s all;
            text-align: center;
            left: 0;
            right: 0;
            height: 32px;
            text-shadow: 0 0 6px #00000045;

            svg {
                filter: drop-shadow(0 0 6px #00000045);
            }

            &.busy {
                background: #363e58;
                top: -32px;

                &.active {
                    top: 0;
                }
            }

            &.ready {
                background: $highlight;
                color: white;
                top: 32px;

                &.active {
                    top: 0;
                }
            }
        }
    }

    .showmobile {
        display: block !important;

        @media all and (min-width: 1040px) {
            display: none !important;
        }
    }

    .hidemobile {
        display: none !important;

        @media all and (min-width: 1040px) {
            display: block !important;
        }
    }

    #app {
        .page {
            width: 100vw;
            height: 100%;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
            background-color:gray;
            position: absolute;
            top: 32px;
            left: 100vw;

            &.active {
                left: 0;
                z-index: 2;
            }

            .inner {
                overflow-y: auto;
                padding-bottom: 65px;
                position: relative;
                width: calc(100% + 60px);
                padding: 30px;
                padding-top: 48px;
                margin: -30px;

                @media all and (min-width: 1040px) {
                    display: flex;
                    justify-content: center;
                    overflow-y: visible;

                    &.settings {
                        .block {
                            max-width: 500px;
                        }
                    }

                    .block {
                        flex: 1;
                        padding: 10px 30px;

                        .details {
                            margin-bottom: 15px;

                            input {
                                margin-bottom: 22px;
                            }
                        }

                        &.history {
                            height: calc(100vh - 75px);
                            padding-bottom: 75px;
                            overflow: auto;
                        }

                        &.pending {
                            height: calc(100vh - 120px);
                            padding-bottom: 75px;
                            overflow: auto;
                        }

                        canvas {
                            // max-width: 300px;
                        }
                    }
                }
            }
        }

        .block {
            width: 100%;
            max-width: 600px;
        }

        #login {
            justify-content: space-between;
            top: 0;
        }

        #send,
        #receive,
        #settings {
            z-index: 2;
        }

        #receive {
            justify-content: flex-start;

            .qrcode {
                text-align: center;

                img {
                    display: inline-block !important;
                    max-width: 100%;
                    height: auto;
                }
            }

            .block {
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
            }

            .btn {
                margin-top: 15px;
                width: 100%;
            }

            .address {
                font-size: 18px;
                margin: 0 30px 30px;
                font-weight: bold;
                line-height: 1.8;
            }

            .amount {
                position: absolute;
                top: 0;
                right: -30px;
                left: -30px;
                padding: 58px 20px 20px;
                background: linear-gradient(to bottom, rgb(58, 67, 91) 0%, rgb(22, 26, 36) 100%);
                z-index: 3;

                input {
                    border: none;
                    background: transparent;
                    font-size: 40px;
                    text-align: right;
                    margin-bottom: 0;

                    &:focus {
                        outline: none;
                    }
                }
            }

            .keypad {
                display: flex;
                flex-direction: column;
                width: calc(100% + 60px);
                margin: 156px -30px 0;
                border: 1px solid #00000026;

                .row {
                    display: flex;
                    width: 100%;
                }

                button {
                    flex: 0 0 33.333%;
                    display: flex;
                    height: 65px;
                    justify-content: center;
                    align-items: center;
                    background: transparent;
                    border: 1px solid #00000026;
                    color: $text;
                    font-size: 30px;
                }
            }

            .receive-amount {
                background: #000;
                padding: 5px 10px;
                border-radius: 10px;
                margin-top: 15px;
            }

            .receive {
                .page {
                    justify-content: flex-start;
                    max-width: 500px;

                    @media all and (min-width: 1040px) {}
                }
            }
        }

        #scan,
        #blockdetails {
            z-index: 3;
        }

        #scan {
            top: 0;
        }

        #settingsdetails {
            width: 100%;
        }

        #genwallet {
            top: 0;
        }

        .genwallet {
            color: $text;
            font-size: 14px;
            font-weight: 400;
        }

        #wallet {
            z-index: 1;
            .menu {
                .tab {
                    cursor: pointer;
                }
                .content {
                    position: relative;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;

                    a {
                        color: white;
                        text-decoration: none;
                    }
                }
            }
        }

        .scan-qr-code {
            .page {
                position: fixed;
            }
        }

        .scan-nfc-code {
            .page {
                position: fixed;
            }
        }
    }


   
</style>