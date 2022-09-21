import React, { useEffect } from 'react'
// import State from "./src/State.css";
const Statewisedata = () => {
    const getcoviddata = async () => {
        const res = await fetch('https://data.covid19india.org/data.json')
        const actualdata = await res.json();
        console.log(actualdata.statewise);
    }

    useEffect(() => {
        // getcoviddata();
    }, []);


    return (
        <div className=" container-fluid  m-5  ">
            <div className='main-heading'>
                <h1 className="mb-5 text-center"> <span className="font-weight-bold">INDIA </span>COVID-19 DASHBOARD</h1>
            </div>
            <div className='table-responsive'>
                <table className='table table-hover'>
                     <thead className="thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
};
export default Statewisedata;
