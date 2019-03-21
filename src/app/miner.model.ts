export interface Miners{
    username:string,
    unconfirmed_reward:number,
    rating:string,
    nmc_send_threshold:number,
    unconfirmed_nmc_reward:number,
    estimated_reward:number,
    hashrate:number,
    confirmed_nmc_reward:number,
    send_threshold:number,
    confirmed_reward:number,
workers:[],
wallet:string
}