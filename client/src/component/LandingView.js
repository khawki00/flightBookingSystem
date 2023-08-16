import React from "react";
import { FormControl, FormControlLabel, Paper, Radio, RadioGroup, Stack } from "@mui/material";

export default function LandingView(props) {
  return (
    <div>
      <Stack direction="column" justifyContent="center">
      <Paper elevation={6}>
        <div className='inner-search-form'>
   
        <FormControl>
           
           <RadioGroup
             aria-labelledby="demo-radio-buttons-group-label"
             defaultValue="oneWay"
             name="radio-buttons-group"
           >
             <FormControlLabel
               value="oneWay"
               control={<Radio />}
               label="One Way"
             />
             <FormControlLabel value="roundTrip" control={<Radio />} label="Round Trip" />
            
           </RadioGroup>
         </FormControl>
     
        
        </div>
        </Paper>
        <div>Recommendations</div>
      </Stack>
    </div>
  );
}
