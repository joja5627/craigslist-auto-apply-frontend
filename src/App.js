import React, { useContext, Component, useState, useEffect } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import { ProgressBarContainer } from './containers/ProgressBarContainer';
import { ListingsContainer } from './containers/ListingsContainer';
import { WebSocketControllerContainer } from './containers/WebSocketControllerContainer';

const App = () => {
  return (
    <div className="App">
      <ProgressBarContainer />
      <Grid>
        <Grid.Row>
          <Grid.Column width={5} className={'mt-10'}>
          <h2 className="ui header fontWeight10">Craigslist Web Scraper</h2>
            <WebSocketControllerContainer />
          </Grid.Column>
          <Grid.Column width={11}>
            <ListingsContainer className={'m10'} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default App;

// connected: false,
// responses: [],
// eventTarget: null,
// webSocket: null,
// linkViewLimit: 300,
// linkCount: 0,
// emailAll: false,
// selectedListing: null,
// sendEmailStatus: null,
// emailResponses: [],
// sendingEmail: false,
// emailQueue: new Queue(),
// clListingScrapePercentage: 0


//   const onClickRemove = clickedListing => {
//     let { listings } = this.state;
//     _.remove(listings, function(listing) {
//       return listing.id === clickedListing.id;
//     });
//     this.setState({ listings: listings });
//   };
//   const onClickRemoveEmailResponse = emailResponse => {
//     let { responses } = this.state;
//     _.remove(responses, function(response) {
//       return emailResponse.id === response.id;
//     });
//     this.setState({ emailResponses: responses });
//   };
//   const addEmailQueue = clickedListing => {
//     let { emailQueue } = this.state;
//     emailQueue.push(clickedListing);
//     this.setState({
//       emailQueue: emailQueue
//     });
//     this.onClickRemove(clickedListing);
//   };
{/* <Grid.Column width={6}>
                {this.state.emailResponses.length > 0 && (
                  <HttpResponseList
                    onClickRemove={listing =>
                      this.onClickRemoveEmailResponse(listing)
                    }
                    responses={this.state.emailResponses}
                  />
                )}
              </Grid.Column> */}