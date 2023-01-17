import React from 'react'
import  Accordion  from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const Visits = ({visits,loading,onClick}) => {
  return (
    <div>
     <div className='patientVisits'>
        <h5>Visits:</h5>
        <Accordion>
  {visits.map(item => (
    <><AccordionSummary>
      <Typography>{item.uuid}</Typography>
    </AccordionSummary>
    {/* <AccordionDetails>
        <Typography>{item.encounterDatetime}</Typography>
      </AccordionDetails> */}
      </>
  ))}
</Accordion>
          {/* {visits.map(vt=>(
            <>
            <span>
              Location: <>{vt.location.display}</>
            </span><br></br>
            <span>
              DateTime: <>{vt. encounterDatetime}</>
            </span><br></br>
            </>
          ))} */}
        </div> 

    </div>
  )
}

export default Visits