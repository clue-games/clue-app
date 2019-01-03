import TronWeb from 'tronweb'
import Config from '../config'

const HttpProvider = TronWeb.providers.HttpProvider
const fullNode = new HttpProvider(Config.fullNode)
const solidityNode = new HttpProvider(Config.solidityNode)
const eventServer = Config.eventServer

const tronWeb = new TronWeb(
  fullNode,
  solidityNode,
  eventServer
)

// account
export const createAccount = async () => {
  return await tronWeb.createAccount()
}

// get balance
export const getBalance = async (address) => {
  return await tronWeb.trx.getBalance(address)
}

// smart contract
export const getSmartContract = async (address) => {
  return await tronWeb.trx.getContract(address)
}

// trigger smart contract
export const triggerSmartContract = async ({ address, command, params, feeLimit, issuer, amount }) => {
  return await tronWeb.transactionBuilder.triggerSmartContract(
    address,
    command,
    feeLimit || 30000,
    amount,
    params,
    issuer
  )
}

// send transaction
export const sendTrx = async ({ to, amount, from }) => {
  return await tronWeb.transactionBuilder.sendTrx(to, amount, from)
}
