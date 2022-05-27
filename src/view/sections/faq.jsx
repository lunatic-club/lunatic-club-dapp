import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import {Grid} from '@mui/material'
import FaqBox from '../components/faqBox'

const styles = makeStyles(theme => ({
  root: {
    height: '100%',
    textAlign: 'center',
    fontSize: '2rem',
    padding: '0 5% 5% 5%'
  },
  answer: {
    fontSize: '1.2rem',
    textAlign: 'justify'
  },
  link: {
    textDecoration: 'inherit',
    textTransform: 'inherit',
    color: '#1976d2'
  }
}))

const Faq = props => {
  const classes = styles()

  return (
    <div className={classes.root}>
      <h2>FAQ</h2>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <FaqBox title='How do I mint?'>
            <p className={classes.answer}>
              Minting a LUNAtic NFT couldn't be simpler. The process has two steps.
            </p>
            <p className={classes.answer}>
              1. Transfer the amount of Terra LUNA you choose to the treasury account. This will take place on the Terra Luna blockchain.
              <br/> 
              2. Click mint and mint a new NFT on the Ethereum blockchain.
            </p>
            <p className={classes.answer}>
              Note! In order to send Terra LUNA via this dApp, you would need to install Terra Station and Metamask into your browser.
            </p>
            <p className={classes.answer}>
              You can view the video with the instructions <a className={classes.link} target='_blank' href='https://youtu.be/UrXB8vZC_0s'>here</a>
            </p>
          </FaqBox>
        </Grid>
        <Grid item md={6}>
          <FaqBox title='What is a secret message?'>
            <p className={classes.answer}>
              This is an innovative idea which allows you to attach a secret message with the LUNAtic NFT. This message will be stored
              in an obfuscated form and will be reflected on the image of the NFT (Take a look at that smile). The message will be part of
              on chain metadata and will be stored on-chain forever.
              Our advise is to enter a message that will commemorate your Terra LUNA coins.
              One can use a tool that will be released soon to temporarily reveal the message to other users.
            </p>
            <p className={classes.answer}>
              P.S. Did you notice that the LUNAtic NFT on the top of the page gas got one such secret message? Do you think you can guess it :) 
            </p>
            <p className={classes.answer}>Stay tuned for more information ;)</p>
          </FaqBox>
        </Grid>
        <Grid item md={6}>
          <FaqBox title='What if I have already transferred LUNA?'>
          <p className={classes.answer}>
            If you know that you have already transferred Terra LUNA to the treasury account (terra1jwlukrqygpdx507ug528wes79axgxsqdaedaaw) then you 
            can click on the "Have you already completed this step before?" link in the mint section. This will let enter a transaction hash of the transfer.
            You can search for your transaction on the explorer https://finder.terra.money/.
          </p>
          <p className={classes.answer}>
            Don't worry if you haven't completed the two step process in one go. You can always restart it following the aforementioned approach.
          </p>
          <p className={classes.answer}>
            Note! Cheating is not possible; so no need to use transactions hashes that has not been completed by an account managed by the Terra Station wallet.
            Similarly, transfers to an account apart from the treasury (terra1jwlukrqygpdx507ug528wes79axgxsqdaedaaw) are not valid.
          </p>
          </FaqBox>
        </Grid>
        <Grid item md={6}>
          <FaqBox title='What Metadata is stored?'>
            <p className={classes.answer}>
              The LUNAtic Club NFTs, unlike other collections, stores the metadata and image fully on-chain. The metadata includes
              unique values for each user. This applies to the NFT image as well. Although it is a fully on-chain image, the image is
              different for mint. This is in line with the concept of Terra LUNA reincarnation.
            </p>
            <ul>
              <li className={classes.answer}>Revival Date: Date when the old Terra LUNA was reincarnated into the new LUNAtic Club NFT</li>
              <li className={classes.answer}>Terra LUNA Spirit: The spirit of the Terra LUNA coins. It is the transaction hash on the Terra LUNA blockchain that includes the reincarnated LUNA coins.</li>
              <li className={classes.answer}>Remembrance: The secret message that you choose when minted the NFT. This is stored in an obfuscated form. You can use a tool to reveal the secret message.</li>
              <li className={classes.answer}>Strength of Spirit: The amount of Terra LUNA that have been reincarnated.</li>
              <li className={classes.answer}>Parent: This is you and rightfully so; You are the reason Terra LUNA gets reincarnated into a LUNAtic NFT.</li>
            </ul>
          </FaqBox>
        </Grid>
        <Grid item md={6}>
          <FaqBox title='Why do I have to send LUNA?'>
          <p className={classes.answer}>
            This is to protect against replay attacks. If this step was skipped then Do Kwon would be able to mint infinite amount of LUNAtic NFTs. 
          </p>
          <p className={classes.answer}>
            You can view the video with the instructions <a className={classes.link} target='_blank' href='https://youtu.be/05R__9_8cD8'>here</a>
          </p>
          </FaqBox>
        </Grid>
        <Grid item md={6}>
          <FaqBox title='Do you support LUNA 2.0'>
            <p className={classes.answer}>
              At the moment we support only LUNA Classic (the original). However, we are future proof and the NFT Smart Contract will eventually support LUNA 2.0.
              The version is part of the on-chain metadata. You see what we did there ;)
            </p>
          </FaqBox>
        </Grid>
      </Grid>
    </div>
  )
}

export default React.memo(Faq)
