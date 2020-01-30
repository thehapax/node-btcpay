const btcpay_url = 'https://btcpay139425.lndyn.com/'
const merch_id = '5hxcRtNJgm83Kq92hjKjyXqoELyL2SpzZZf64Q1ZT5Gd'


const btcpay = require('btcpay')
const keypair = btcpay.crypto.load_keypair(new Buffer.from(process.env.BTCPAY_KEY, 'hex'))

// Recreate client
const client = new btcpay.BTCPayClient(btcpay_url, keypair, {merchant: merch_id})
