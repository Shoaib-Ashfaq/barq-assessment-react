import React from 'react'
import { sampleOrders } from './data'

const CompanyDashboard = (props) => {
    const { companyId } = props
    console.log(companyId);
    const logoPath = `./logos/${companyId}.png`;

  return (
    <div>
        {
            sampleOrders[companyId] && <img className='logo' src={logoPath} alt={`${companyId} logo`} />
        }

        {
            sampleOrders[companyId] ?
            sampleOrders[companyId].map((data) => (
               <div className='status' key={data.orderId}>
                    <div>{data.orderId}</div>
                    <div>{data.customerName}</div>
                    <div>{data.amount}</div>
                    <div>{data.status}</div>
               </div>
            )): <>No data to display</>
        }

    </div>
  )
}

export default CompanyDashboard
