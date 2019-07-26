import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestAccountAccess } from '../../core/libs/lib-metamask-helper'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import img from '../../assets/images/1_ARRTSA.jpg'
import title from '../../assets/images/projansky-title.png'
import { styles } from './styles.scss'
import whatItDoes from '../../assets/images/what-projansky-does.png'
import Typography from '@material-ui/core/Typography';

class HomeView extends Component {
  componentDidMount() {
    const { provider: { web3Provider } } = this.props
    requestAccountAccess(act => console.log(act))
  }

  render() {
    return (
      <Grid className={styles + ' container'} container spacing={8} alignItems="center">
        <Grid container direction="row"justify="center" xs={12}>
          <img alt='the artists reserved rights and transfer agreement' src={title} />
        </Grid>
        <Grid container direction="row" justify="center" xs={12}>
          <h1 style={{ fontWeight: 'bold' }}>(the smart contract)</h1>
        </Grid>
        <Grid container direction="row" justify="center" xs={12}>
          <Typography variant="h5" paragraph>
            In the early 1970s, art dealer Seth Siegelaub and lawyer Robert Projansky consulted
            over 500 artists, collectors, critics, and museum people to create{' '}
            <i>The Artist's Reserved Rights Transfer and Sale Agreement</i>
            , a contract designed "to remedy some generally acknowledged inequities in the{' '}
            art world, particularly artists' lack of control over the use of their work{' '}
            and participation in its economics after they no longer own it."
          </Typography>
          <Typography variant="h5" paragraph>
            The Agreement, rather than acting solely as an instrument that closes a deal, is an operative{' '}
            set of rights and obligations that establishes a relationship between the artist and{' '}
            the purchaser.
          </Typography>
          <Typography variant="h5" paragraph>
            These rights and obligations, from the perspective of both parties,
            are clearly defined in the introduction to the Agreement:
          </Typography>
          <Grid item xs={10}>
            <Typography paragraph variant="subtitle1">WHAT THE AGREEMENT DOES</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography paragraph variant="subtitle1">The Agreement is designed to give the artist:</Typography>
          </Grid>
          <Grid item xs={10}>
            <ul>
              <li><Typography variant="body1">
                15% of any increase in the value of each work each time it is transfered in the future.
              </Typography></li>
              <li><Typography variant="body1">
                a record of who owns the work at any given time
              </Typography></li>
              <li><Typography variant="body1">
                the right be notified when the work is to be exhibited, so the artist can advise upon or{' '}
                (see Article Seven (b)) veto the proposed exhibition of his/her work.
              </Typography></li>
              <li><Typography variant="body1">
                the right to borrow for exhibition for 2 months every five (5) years (at no cost to the owner)
              </Typography></li>
              <li><Typography variant="body1">
                the right to be consulted if repairs become necessary
              </Typography></li>
              <li><Typography variant="body1">
                half of any rental income paid to the owner for the use of the work at exhibitions, if there ever is any.
              </Typography></li>
              <li><Typography variant="body1" paragraph>
                all reproduction rights to the work.
              </Typography></li>
            </ul>
            <Typography variant="body1" paragraph>
              The economic benefits would accrue to the artist for life, plus the life of a surviving spouse (if any){' '}
              plus 21 years, so as to benefit the artist's children while they are growing up. The artist would maintain aesthetic{' '}
              control only for his/her lifetime.
            </Typography>
            <Typography variant="body1" paragraph>
              Although the contract may seem to alter the previous relationship between artist and art owner principally by{' '}
              putting new obligations on the owners, the Agreement really does some very good things for the collector.{' '}
              In return for these obligations, which are almost costless for the collector, he gets substanstail benefits;{' '}
              the Agreement is designed:
            </Typography>
            <ul>
              <li><Typography variant="body1">
                to give each owner the formalized right to recieve from the artist (or his/her agent) a certified history and <i>provenance</i> of the work.
              </Typography></li>
              <li><Typography variant="body1">
                to create and clarify a non-exploitative, one-to-one relationship between the artist and the owner.
              </Typography></li>
              <li><Typography variant="body1">
                to maintain this relationship--what lawyers call 'privity'--between the artist and each successive owner of the work
              </Typography></li>
              <li><Typography variant="body1">
                to establish recognition that the artist maintains a moral relationship to the work, even as the collector owns and controls it
              </Typography></li>
              <li><Typography variant="body1" paragraph>
                to give assurance to the owner that he is using the work in harmony with the artist's intentions.
              </Typography></li>
            </ul>
          </Grid>
          <Typography variant="h5" paragraph>
            Some of the language of the Agreement foreshadows present-day blockchain solutions
            addressing issues of artistic provenance and reproduction rights.
            For example, see:{' '}
            <a href="https://portion.io">Portion</a>,{' '}
            <a href="https://www.maecenas.co/art-market">Maecenas</a>,{' '}
            <a href="https://superrare.co">SuperRare</a>,{' '}
            <a href="https://blockchainartcollective.com">Blockchain Art Collective</a>,{' '}
            <a href="https://knownorigin.io/">KnownOrigin</a>,{' '}
            <a href="https://pixura.io/">Pixura</a>,{' '}
            <a href="https://snark.art/artworks">snark.art</a>,{' '}
            <a href="https://verisart.com/">Verisart</a>, and <a href="https://makersplace.com/">MakersPlace</a>.{' '}
          </Typography>
          <Typography variant="h5" paragraph>
            Some of these platforms include royalties to artists on secondary sales{' '}
            (see SuperRare's implementation <a href="https://etherscan.io/address/0x41a322b28d0ff354040e2cbc676f0320d8c8850d#code">here</a>),{' '}
            some work with established artists to explore blockchain as a medium, and others allow creatives to set up their own "shops".{' '}
            It's not suprising that so many people are trying to use blockchain to solve art problems:{' '}
            the self-referential, supposedly independent and immortal blockchain recalls the "chain" of art history.{' '}
            This <a href="https://arxiv.org/pdf/1906.03263.pdf">academic paper</a> reviews many of these approaches.
          </Typography>
          <Typography variant="h5" paragraph>
            The Agreement's also foreshadows many criticisms of these blockchain platforms...
          </Typography>
          <Typography variant="h5" paragraph>
            does the "good UX" of the platforms listed above obscure the interesting aspects of tokenized art?
          </Typography>
          <Typography variant="h5" paragraph>
            how does the original projansky contract compare to the projansky smart contract?
            is the smart contract easier to work with? does it do a better or worse job of meeting the Agreement's stated goal of a more equitable art world?
          </Typography>
          <Typography variant="h5" paragraph>
            did projansky + seigelaub get fees for creating the Agreement? should they have?
          </Typography>
          <p>Use the <a href="#interface">contract interface</a>.</p>
          <p>View the <a href="#interface">smart contract source</a>.</p>
          <p>View the <a href="#interface">original contract</a>.</p>
        </Grid>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    provider: state.provider
  }
}
export default connect(mapStateToProps)(HomeView)
