# NFT marketplace application with Tezos

I created this project in the context of my training on Tezos by following step by step this tutorial: https://learn.figment.io/tutorials/create-an-nft-marketplace-on-tezos#front-end

## Smart contracts

We have two smart contracts, one implementing the tokens, and one managing the market operations. 
They are implemented with SmartPy and can be consulted [here](https://smartpy.io/ide?code=eJzVV1Fv2zYQfg@Q_8BqwCKighw7i7MF8LC2qPeSBOkarA9FITAyZcuWRI2kkjjD_vuOpCiJsuIYQ18mJJatOx7vvrvvdEzzknGJRE64LLeICCTK46Pjo_m7CZrB9zBlYap1IhHztJRRwlkeVTzzvZWUpbgcjerFoDpa0IeRpHmZEUnFCIyE5dbDyuDxUZwRIdAd29DCVxL4x5fHRwiuEiRGqVW8JnxDJViKqQ9@fGCF5CSWdsmCJiiK0iKVUeQLmiUBksp0gHIqyYJIEiCyyNPCLlCX0gvVGr99pi69EuI1FlyZNQfixrKrobcBsb73ZPVKCOA@XUY5KX25odsZ_L67IRJ8fiBZRfXvP2jM@MJfsWxBuX7ybrHgVAgIpJIrxo2dztOcVYXs2FLeR@mifRKzLKOxJPeZ2eI9YxnGwUDwsAzMn_ZEWH2olKj7b2CBQhK2UcnSQrZpgKhlnYKScJILB_IyfKA8Tba@b4ShcRv9ik4xbvViE11cp7mXoA4@few1GA5cPQ0XpeHYXxDbhGvxNSRP3T9LnhbLQPv0fgt1jnugBajnvKo6ZSasK9QVdzAFDDyFpodDVoJjguXU75l3oAWsCpFQvgsX34OWgVq5FZE9mIHa@OVa6UUFD18C7290coIu69oIGz798xpsZZhXkj77pzuiuINJj93aI_XxddfBbyZw3ieag4RDNkEL0AlaQJwa7lJuFw2HfXe8onjI1QbRt4C2pZpiVUImUZNewy54BB@q_6qdo3Z762CXeBqnHqlUyV6lwnyp@aTtue1GPhlC9VV3G05_YY9OOMzIllXS9z3Q9QKk7kYFfnjGnof1VYfXYcPsxMZ_socPXRbA90z5_LXNsgnPgmYC6@vUcbVJjWYOvDP7BX_D8Be4pRnjVztkXQmHNEkVg602nbxKppkICyIj8Mns2iv0uiabKq_XY4x@RAfqojfQ_A_S7xS1clDX9UH7GFa96dAK40FGHLAvmpNM0MMXG6p3KW1Tpq4f1CNo6YjTR8IXwsmLkh0YnK4LUWapShWIRJvLAP1yEaDxqfPK6_m_Q3jnnbHTpjrdqecPbFSPXHuLsirBPo301HJAZTb76bps3DMz1lAq7FhkjO4G3b0OZRBMUAVZ0hx0ojpb39H1Otu2x1uknZ6PX3L_@Eg5D4siGAmkX5BcFap3wwo0r4plqgpXD79qHlYhaTV82YIiYloQnjJTp0oc2Ud@02MsqlaDxLFyy_e0wKvDgYl8M6RUCcrHVolmbNCSUpp4zY6mrOw7BBY4I7wSJOnSL1gRJTbOui8E7mjcItqZqZsOZ59FLDHHi7RM1OniU_7l5_Xt9eJ9Pn8Qnz@yqy@3tyvCnm@m698_zZ@eNo_V9ZX8c_7Xx@10fu9ZgjVgvp31IrBxWY1wNfY9c9q4VaeNLob1AQT87B5HXHthl5LfN5bABW4gtI6TLeXdyPQ8uXdlaCb43vtQjX@n9dVPWUniTRPVPUm2nKb3j9n5arVeciLPs4s4X2cP07J8XK7yabreLsvnyRPjEz5NiziJn4rsYntGR9ZsuBasUJNAyCvVjQxb6yMVgkOSnjl12381wcBiadoavOfBG8b9brAWzIGd_tcw_Ufnz6d7XB9Pzn6anO1uqAzjgWL7YNr0a_XWzEONO52Dxbi_mepTnRG8Gb5qzzHu1_0L2w2@PHYBaeyrtGoK2kOTS8bBHPwLndFXlA--).

## Web Client
The web client is based on ReactJS library, and use Taquito as wallet library. It exposes a simple interface to:
- Mint a token
- Buy a token (the creator of a token cannot buy it).
- List the market tokens

## Run the application
### Tezos wallet configuration
The smart contracts are deployed on Hangzhou network, so the web interface must use the accounts of thie network. You will need to have a wallet installed in the browser. For my tests I'm using [Temple](https://templewallet.com/) wallet.

### Dev mode
To run the web app in dev mode:
```bash
npm i
npm start
```




