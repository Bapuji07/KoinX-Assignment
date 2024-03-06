import React from 'react'
import TeamCard from '../TeamCard/TeamCard'

const Overview = props => {
  return (
    <div className='container px-4 py-8 w-full lg:w-2/3 lg:left-0'>
      <div className='text-m space-x-4 lg:text-xl m-3 font-semibold lg:space-x-20'><span style={{textDecoration:'underline blue 4px'}}>Overview</span><span>Fundamentals</span><span>New Insights</span><span>sentiments</span><span>Team</span></div>
      <hr />
      <div className='bg-white rounded-md'>
        <h1 className='text-2xl font-bold p-5'>Performance</h1>
        <img src="https://www.chainalysis.com/wp-content/uploads/2024/01/chart-1-high-level-fix-800x509.png" alt="" height='90%' width='90%' />
      </div>

      <div className='bg-white rounded-md mt-5'>
        <h1 className='text-2xl font-bold p-5'>Sentiments</h1>
        <img src="https://s3.tradingview.com/news/image/newsbtc:0cd6c6524094b-490ce7cae26555ae8c122642676dc173-resized.jpeg" alt="" height='90%' width='90%' />
      </div>

      <div className='bg-white rounded-md mt-5'>
        <h1 className='text-2xl font-bold p-5'>About Bitcoin</h1>
        <p className='p-4 font-semibold text-m'>
          Bitcoin is a digital or virtual currency that uses cryptography for security and operates on a decentralized network of computers. It was invented in 2008 by an unknown person or group of people using the pseudonym Satoshi Nakamoto and was released as open-source software in 2009. Bitcoin is often referred to as a cryptocurrency because it relies on cryptographic techniques to secure transactions, control the creation of new units, and verify the transfer of assets.
        </p>
        <ul className='p-4 font-semibold text-m '>
          Key features of Bitcoin include:

          <li>Decentralization: Bitcoin operates on a decentralized network of computers called nodes. This means that no single entity, such as a government or financial institution, controls the Bitcoin network. Transactions are verified by network participants (miners) through cryptography and recorded on a public ledger called the blockchain.
          </li>
          <li>Limited Supply: Bitcoin's supply is capped at 21 million coins, making it a deflationary asset. This scarcity is programmed into the Bitcoin protocol and is designed to mimic the scarcity of precious metals like gold.
          </li>
          <li>Security: Bitcoin transactions are secured by cryptographic techniques such as public and private keys. Each user has a unique cryptographic key pair: a public key (address) for receiving funds and a private key for authorizing transactions. Transactions are recorded on the blockchain, which makes them immutable and resistant to fraud.
          </li>
          <li>Anonymity: While Bitcoin transactions are recorded on the blockchain and are publicly visible, the identities of the parties involved are pseudonymous. Users can generate multiple addresses and conduct transactions without revealing their identity.
          </li>
          <li>Volatility: Bitcoin's price is known for its volatility, with significant price fluctuations occurring over short periods. Factors influencing Bitcoin's price include market demand, investor sentiment, regulatory developments, macroeconomic trends, and technological advancements.
          </li>
          <li>Use Cases: Bitcoin can be used for various purposes, including peer-to-peer transactions, online purchases, remittances, and as a store of value. Some investors view Bitcoin as a hedge against inflation and a potential digital alternative to traditional fiat currencies.
          </li>
          <li>Bitcoin has gained significant adoption and attention since its inception, spawning a thriving ecosystem of exchanges, wallets, payment processors, and other supporting services. However, its regulatory status varies across different jurisdictions, with some countries embracing it as a legitimate form of payment and investment, while others impose restrictions or outright bans.
          </li>
        </ul>
      </div>
      <div>
        <h1 className='text-2xl font-bold p-5'>Team</h1>
        <p className='text-l font-semibold p-1' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique accusantium voluptatibus at? Ullam, quidem similique amet veniam accusamus esse pariatur quas quaerat consectetur totam alias facere adipisci facilis voluptatum excepturi voluptatem iste nemo minima vero possimus numquam, quo provident ut.</p>
        <TeamCard photo={'https://i.pinimg.com/originals/83/df/35/83df3574f6b03b8ad33a1b47a08e0c72.jpg'} name={'Tony Stark'} Designation={'CEO'} />
        <TeamCard photo={'https://i.pinimg.com/736x/11/00/4d/11004d05dd86fbe152bee0ff75eaa333.jpg'} name={'Peter Parker'} Designation={'CMO'} />
        <TeamCard photo={'https://media1.popsugar-assets.com/files/thumbor/JJ9LhNJZ_Fa_J6kecaMq0y2XIC4=/2152x3239/filters:format_auto():quality(85):extract_cover()/2015/09/25/894/n/1922398/b44858debaa9960e_GettyImages-464178416_master.jpg'} name={'Captain America'} Designation={'CTO'} />
      </div>


    </div>

  )
}

export default Overview