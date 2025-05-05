import React from 'react'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

const ServiceNotAvailableErrorPage = () => {
return (
<ErrorMessage 
 eroorHeading={'This Service cannot be booked using Online Appointment'}
 message={``}
 />)

}

export default ServiceNotAvailableErrorPage