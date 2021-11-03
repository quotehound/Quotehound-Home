import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import NavBar from './NavBar';
import LandingPage from './LandingPage';
import InsureStatus from './components/InsureStatus';
import HomeType from './components/HomeType';
import OwnRent from './components/OwnRent';
import Rooms from './components/Rooms';
import YearBuilt from './components/YearBuilt';
import SquareFootage from './components/SquareFootage';
import Gender from './components/Gender';
import Month from './components/Month';
import Date from './components/Date';
import Year from './components/Year';
import Claims from './components/Claims';
import Address from './components/Address';
import Credit from './components/Credit';
import Name from './components/Name';
import EmailPhone from './components/EmailPhone';
import ThankYou from './components/ThankYou';
class App extends Component {

  state = {

    route: '/',
    routes: [
      '/',
      '/insurance-status',
      '/type_of_property',
      '/own-rent',
      '/rooms',
      '/year-built',
      '/square-footage',
      '/gender',
      '/month',
      '/date',
      '/year',
      '/claims',
      '/address',
      '/credit',
      '/name',
      '/email-phone',
      '/thank-you'
    ],

    postData: {
      lp_campaign_id: '5fe2370665025',
      lp_campaign_key: 'r7zWCbyvMYB4KF2wJq9t',
      lp_s3: '12',
      lp_s4: '13',
      TCPA_Consent: 'Yes',
      TCPA_Language: 'By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.',
      jornaya_lead_id: '',
      trusted_form_cert_id: '',
      first_name: '',
      last_name: '',
      phone_home: '',
      address: '',
      zip_code: '',
      email_address: '',
      dob: '',
      month: '',
      date: '',
      landing_page: 'home.quotehound.com',
      credit_score: '',
      marital_status: 'Married',
      own_or_rent: '',
      year_house_was_built: '',
      type_of_property: '',
      number_of_stories: '2',
      number_of_rooms: '',
      size_in_square_feet: '',
      entrance_url: document.referrer,
      currently_insured: '',
      current_insurance_company: 'Company Not Listed',
      any_claims_over_last_3_years: '',
      useragent: navigator.userAgent,
      lp_caller_id: '',
      fbclid: '',
      gclid: '',
      home_warranty: 'NA',
    }

  }

  changeRoute = () => {
    this.setState({
      route: '',
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path='/' exact>
              <LandingPage
                setZipCode={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      zip_code: v,
                    },
                  });

                  console.log('Zip code is: ', v)
                }}
              />
            </Route>

            <Route path="/insurance-status" exact>
              <InsureStatus
                setStatus={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      jornaya_lead_id: document.getElementById('leadid_token').value,
                      trusted_form_cert_id: document.getElementById('xxTrustedFormToken_0').value,
                      currently_insured: v,
                    },
                  });
                  console.log('Lead ID is: ', this.state.postData.jornaya_lead_id)
                  console.log('Trusted Form is: ', this.state.postData.trusted_form_cert_id)
                  console.log('Currently Insured: ', v)
                }}
              />
            </Route>

            <Route path='/type_of_property' exact>
              <HomeType
                setHomeType={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      type_of_property: v,
                    },
                  });
                  console.log('Type Of Property: ', v)
                }}
              />
            </Route>

            <Route path='/own-rent' exact>
              <OwnRent
                setOwnership={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      own_or_rent: v,
                    },
                  });
                  console.log('They ' + v + ' The Property')
                }}
              />
            </Route>

            <Route path='/rooms' exact>
              <Rooms
                setRoomTotal={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      number_of_rooms: v,
                    },
                  });
                  console.log('there are ' + v + ' rooms')
                }}

              />
            </Route>

            <Route path='/year-built' exact>
              <YearBuilt

                setYearBuilt={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      year_house_was_built: v,
                    },
                  });
                  console.log('Home was built in: ' + v)
                }}
              />
            </Route>

            <Route path='/square-footage' exact>

              <SquareFootage

                setSquareFootage={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      size_in_square_feet: v,
                    },
                  });
                  console.log('Square Footage: ' + v)
                }}

              />
            </Route>

            <Route path='/gender' exact>
              <Gender
                setGender={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      gender: v,
                    },
                  });
                  console.log('Gender: ' + v)
                }}
              />

            </Route>

            <Route path='/month' exact>
              <Month

                setMonth={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      month: v,
                    },
                  });
                  console.log('Month: ', v)
                }}

              />
            </Route>

            <Route path='/date' exact>
              <Date
                setDate={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      date: v,
                    },
                  });
                  console.log('Date: ', v)
                }}
              />

            </Route>


            <Route path='/year' exact>
              <Year
                setDOB={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      dob: v,
                    },
                  });
                  console.log('DOB: ', v)
                }}
              />

            </Route>

            <Route path='/claims' exact>
              <Claims

                setClaim={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      any_claims_over_last_3_years: v,
                    },
                  });
                  console.log('Any Claims Filed: ', v)
                }}

              />
            </Route>

            <Route path='/address' exact>
              <Address
                setAddress={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      address: v,
                    },
                  });
                  console.log('Address: ', v)
                }}
              />
            </Route>

            <Route path='/credit' exact>
              <Credit

                setCredit={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      credit_score: v,
                    },
                  });
                  console.log('Credit Score: ', v)
                }}
              />
            </Route>

            <Route path='/name' exact>

              <Name
                setFName={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      first_name: v,
                    },
                  });


                }}

                setLName={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      last_name: v,
                    },
                  });
                }}

              />
            </Route>

            <Route path='/email-phone' exact>
              <EmailPhone
  

                setEmail={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      email_address: v,
                    },
                  });
                }}

                setPhone={(v) => {
                  this.setState({
                    postData: {

                      ...this.state.postData,
                      phone_home: v,
                    },
                  });
                }}

                setURL={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      entrance_url: v,
                    }
                  })

                  console.log(this.state.postData)

                }}
                postData={this.state.postData}

                
              />
            </Route>

<Route path='/thank-you' exact>

  <ThankYou
  />
</Route>



          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;