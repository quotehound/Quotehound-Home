import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

  
import { withRouter } from 'react-router';

import Logo from '../Assets/cme.png'

import './forms.css';
import Footer from './Footer'


class Credit extends Component {


  onFinish = (values) => {

    values.preventDefault();
    
    let c = values.currentTarget.dataset.value;

    this.props.setCredit(c);

    //get URL params

   const urlSearch = window.location.search;

   const urlParams = new URLSearchParams(urlSearch);
   const zip = urlParams.get('zip_code');
   const status = urlParams.get('currently_insured');
   const type = urlParams.get('type_of_property') ;
   const ownership = urlParams.get('own_or_rent')
   const num = urlParams.get('number_of_rooms');
   const built = urlParams.get('year_house_was_built');
   const size = urlParams.get('size_in_square_feet');
   const gender = urlParams.get('gender');
   const month = urlParams.get('month');
   const date = urlParams.get('date');
   const year = urlParams.get('year');
   const claims = urlParams.get('any_claims_over_last_3_years');
   const address = urlParams.get('address');


    this.props.history.push('/name' + '?zip_code=' + zip + '&currently_insured=' + status + '&type_of_property=' + type + '&own_or_rent=' + ownership + '&number_of_rooms=' + num + '&year_house_was_built=' + built + '&size_in_square_feet=' + size + '&gender=' + gender + '&month=' + month + '&date=' + date + '&year=' + year + '&any_claims_over_last_3_years=' + claims + '&address=' + address +  '&credit_score=' + c)
  }


  render() {
    return (

      <div className="back bg-white"> 
       <div className="bg-blue-500 headerText justify-center align-middle text-center">
                    <h2>Get Your Free Home Insurance Quote</h2>
                </div>
      <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
      <div className="px-4 py-8 sm:px-10">


          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  25%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

              <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

            </div>
          </div>


        <div className="test"> 
          <div className="mt-6">
        

            <div> 
            <div className="relative flex justify-center text-sm leading-5 con">
              <span className="px-2 text-black-500 text-3xl bold header">
                What Is Your Credit Score?
              </span>
            </div>
          </div>
          <form onSubmit={this.onFinish} >
          <div className="mt-6">
            <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">

              <div className="text-sm leading-5 buttonBlock">
                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Average" onClick={this.onFinish}>Average <br/>(580-679)</button>


                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Excellent" onClick={this.onFinish}>Excellent <br/> (720+)</button>

                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Good" onClick={(values) => this.onFinish(values)}>Good <br/>  (680-719)</button>

                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Poor" onClick={(values) => this.onFinish(values)}>
                    Poor  <br/> (580 or Less) </button>
                
              </div>
            </div>
          </div>

          </form>

          </div>

          </div>
        </div>

       


      </div>
     <Footer />

      </div>
       

    )
  }
}

export default withRouter(Credit)