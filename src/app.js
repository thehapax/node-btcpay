// this is a sample app to get client, rates and create invoice
const btcpay_url = process.env.BTCPAY_URL
const merch_id = process.env.BTCPAY_MERCHANT
const store_id = process.env.STORE_ID
const btcpay_key =  process.env.BTCPAY_KEY

const btcpay = require('btcpay')
const keypair = btcpay.crypto.load_keypair(new Buffer.from(btcpay_key, 'hex'))

// Recreate client
const client = new btcpay.BTCPayClient(btcpay_url, keypair, {merchant: merch_id})

// get btc/hkd rates
const btc_rates = client.get_rates(['BTC_HKD'], store_id)
btc_rates.then(rates => console.log(rates)).catch(err => console.log(err))

// create invoice and return url
const get_invoice = client.create_invoice({price: 100, currency: 'HKD'})
get_invoice.then(invoice => console.log(invoice.url)).catch(err => console.log(err))

