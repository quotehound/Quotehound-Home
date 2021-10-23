import React, { Component } from 'react'
import { withRouter } from 'react-router';
import Logo from '../Assets/cme.png'
import './forms.css';
import Footer from './Footer';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';




class YearBuilt extends Component {

    constructor(props) {
    super(props);

    this.state = {year_house_was_built: ''};

    this.nextStep = this.nextStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }


  nextStep  = (values) =>  { 

    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);
    const zip = urlParams.get('zip_code');
        const status = urlParams.get('currently_insured');
        const type = urlParams.get('type_of_property') ;
        const ownership = urlParams.get('own_or_rent')
        const num = urlParams.get('number_of_rooms');

        
    let year = document.getElementById('year').value;

    if(year.length < 4){
        toast.error("😬 Please enter a valid Year!");   
        values.preventDefault();

    }
    else{

      values.preventDefault();
      toast.dismiss();
      console.log("success: ", year);

      this.props.setYearBuilt(year)

        this.props.history.push('/square-footage' + '?zip_code=' + zip + '&currently_insured=' + status + '&type_of_property=' + type + '&own_or_rent=' + ownership + '&number_of_rooms=' + num + '&year_house_was_built=' + year)
    }
      
  }


    render() {

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);
        const type = urlParams.get('type_of_property') ;

        return (
            <div>
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
                                        62%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                <div style={{ width: "62%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                            </div>
                        </div>


                        <div className="test">
                        <ToastContainer
                        
                             position="top-center"
          autoClose={5000}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={'colored'}
                         />
                            <div className="mt-6">

                                <div>
                                    <div className="relative flex justify-center text-sm leading-5 con">
                                        <span className="px-2 text-black-500 text-3xl bold header">
                                            What Year Was Your {type} Built?
                                        </span>
                                        
                                    </div>
                                    <p className="px-2 pt-2 text-gray-500 text-sm">Guesses Are Okay!</p> 
                                </div>
                                <form onSubmit={this.nextStep} >
                                    <div className="mt-6">
                                        <div className="w-full flex text-sm leading-5">

                                            <div className="text-sm leading-5 buttonBlockRow">

                                              <input className="appearance-none w-1/2 p-3text-lg font-semibold leading-none bg-white rounded zipInput " type="text" name="year" placeholder="####" pattern="\d*" id="year" maxLength={4}/>

                                              
                                             </div>
                                        </div>
                                        <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 nextButton" type="submit">Next</button>

                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>




                </div>


            </div>

                <Footer />
            </div>
        )
    }
}


export default withRouter(YearBuilt)