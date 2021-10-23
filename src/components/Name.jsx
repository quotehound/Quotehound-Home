import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


import './forms.css';
import Footer from './Footer'

class Name extends Component {


    constructor(props) {
        super(props);

        // this.state = {first_name: ''};
        // this.state = {last_name: ''};


        this.nextStep = this.nextStep.bind(this);
    }



    nextStep = (values) => {  

        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;


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
   const score = urlParams.get('credit_score')



        console.log('first name is: ' + firstName + ' last name is: ' + lastName);

        this.props.history.push('/email-phone' + '?zip_code=' + zip + '&currently_insured=' + status + '&type_of_property=' + type + '&own_or_rent=' + ownership + '&number_of_rooms=' + num + '&year_house_was_built=' + built + '&size_in_square_feet=' + size + '&gender=' + gender + '&month=' + month + '&date=' + date + '&year=' + year + '&any_claims_over_last_3_years=' + claims + '&address=' + address +  '&credit_score=' + score + '&first_name=' + firstName + '&last_name=' + lastName ); 


    }

    postFName = (values) => {

        let firstName = document.getElementById('firstName').value;


        this.props.setFName(firstName)

       this.unhide()


    }

    postLName = (values) => {

        let lastName = document.getElementById('lastName').value;


        this.props.setLName(lastName)

        this.unhide()

    }

    unhide(){

        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;


       if(firstName.length == 0 || lastName.length == 0){
           document.getElementById('next').hidden = true;
       }
       else{
           toast.dismiss()
           document.getElementById('next').hidden = false;

       }

    }


    render() {

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
                                            87%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                    <div style={{ width: "87%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

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
                                                What Is Your Full Name?
                                            </span>
                                        </div>
                                    </div>
                                    <form onSubmit={this.nextStep} >
                                        <div className="mt-6">
                                            <div className="w-full flex text-sm leading-5">

                                                <div className="text-sm leading-5 buttonBlockRow">

                                                    <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0" >
                                                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">

                                                            <input className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded " type="text" name="firstName" placeholder="First Name" id="firstName"  onChange={this.postFName}/>
                                                        </div>


                                                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0" >

                                                            <input className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded " type="text" name="lastName" placeholder="Last Name" id="lastName" onChange={this.postLName} />
                                                        </div>
                                                    </div>





                                                </div>
                                            </div>
                                            <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 nextButton" id="next" type="submit" onClick={this.nextStep} hidden={true} >Next</button>

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

export default withRouter(Name)