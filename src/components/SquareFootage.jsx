import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Logo from '../Assets/cme.png'
import './forms.css';
import Footer from './Footer'

class SquareFootage extends Component {


    size = (values) => {

        values.preventDefault();

        let x = values.currentTarget.dataset.value;

        this.props.setSquareFootage(x);

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);
        const zip = urlParams.get('zip_code');
        const status = urlParams.get('currently_insured');
        const type = urlParams.get('type_of_property') ;
        const ownership = urlParams.get('own_or_rent')
        const num = urlParams.get('number_of_rooms');
        const built = urlParams.get('year_house_was_built');




        this.props.history.push('/gender' + '?zip_code=' + zip + '&currently_insured=' + status + '&type_of_property=' + type + '&own_or_rent=' + ownership + '&number_of_rooms=' + num + '&year_house_was_built=' + built + '&size_in_square_feet=' + x);
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
                                        37%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                <div style={{ width: "37%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                            </div>
                        </div>


                        <div className="test">
                            <div className="mt-6">

                                <div>
                                    <div className="relative flex justify-center text-sm leading-5 con">
                                        <span className="px-2 text-black-500 text-3xl bold header">
                                            What Is The Sqaure Footage?
                                        </span>
                                    </div>
                                </div>
                                <form onSubmit={this.size} >
                                    <div className="mt-6">
                                        <div className="w-full flex text-sm leading-5">

                                            <div className="text-sm leading-5 buttonBlockRow">

                                    

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="500" onClick={this.size}>500 Or Less</button>

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="1000" onClick={this.size}>501-1,000</button>

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="1500" onClick={this.size}>1,001-1,500</button>

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="2000" onClick={this.size}>1,501-2,000</button>

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="2500" onClick={this.size}>2,001-2,500</button>

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="3000" onClick={this.size}>2,501-3,000</button>

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="3500" onClick={this.size}>3,001-3,500</button>

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="4000" onClick={this.size}>3,501-4,000</button>

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="4500" onClick={this.size}>4,001-4,500</button>

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="5000" onClick={this.size}>4,501-5,000</button>

                                            <button className="monthButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="5001" onClick={this.size}>5,001+</button>


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

export default withRouter(SquareFootage);