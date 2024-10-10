import React, { useState, useEffect } from 'react'; // Add this line
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/system';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
  }));

export default function SummaryInfo(){
    const [personalInfo, setPersonalInfo] = useState({});
    const [educationalBackground, setEducationalBackground] = useState({});
    const [skillsAndTraining, setSkillsAndTraining] = useState({});


    useEffect(() => {
        const storedPersonalInfo = localStorage.getItem('personalData');
        const storedEducationalBackground = localStorage.getItem('educData');
        const storedSkillsAndTraining = localStorage.getItem('skillData');

        if (storedPersonalInfo) {
            setPersonalInfo(JSON.parse(storedPersonalInfo));
        }
        if (storedEducationalBackground) {
            setEducationalBackground(JSON.parse(storedEducationalBackground));
        }
        if (storedSkillsAndTraining) {
            setSkillsAndTraining(JSON.parse(storedSkillsAndTraining));
        }
        console.log(storedPersonalInfo)
    }, []);

    let v = useNavigate();
    return (<>
        <div style={{color:'white'}}>
            <h5>I am Using light Mode</h5>
        </div>
        <div style={{color:'black'}}>
        <Grid container spacing={3} sx={{textAlign:'left'}}>
            <FormGrid size={{ xs: 12, md: 12 }}><h2>Personal Information</h2></FormGrid>
            {/* Details of Personal Information Here.. */
               <div >
                <h6>Full Name: {personalInfo.firstname} {personalInfo.lastname}</h6>
                <h6>Gender : {personalInfo.gender}</h6>
                <h6>Birthday : {personalInfo.birthday}</h6>
                <h6>Address : {personalInfo.address1}</h6>
                <h6>City : {personalInfo.city}</h6>
                <h6>Province : {personalInfo.province}</h6>
                <h6>Zip : {personalInfo.zip}</h6>
                <h6>Country : {personalInfo.country}</h6>
               </div>
            }
            <FormGrid size={{ xs: 12, md: 12 }}><h2>Educational Background</h2></FormGrid>
            {/* Details of Educational Background Here */
                <div >
                    <h6>School Name: {educationalBackground.elementarye}   Address: {educationalBackground.elem_address}</h6>
                    
                    <h6>School Name: {educationalBackground.high_school}   Address: {educationalBackground.hs_address}</h6>
                    
                    <h6>School Name: {educationalBackground.college}  Address: {educationalBackground.college_address}</h6>
               </div>
            }
            <FormGrid size={{ xs: 12, md: 12 }}><h2>Skills and Training</h2></FormGrid>
            {/* Details of Skills and Trainings Here */
                <div >
                    <h6>skill 1: {skillsAndTraining.skill1}</h6>
                    <h6>skill 2: {skillsAndTraining.skill2}</h6>
                    <h6>skill 3: {skillsAndTraining.skill3}</h6>
                    <h4>Trainings</h4>
                    <h6>Training 1: {skillsAndTraining.training1}</h6>
                    <h6>Training 2: {skillsAndTraining.training2}</h6>
                    <h6>Training 3: {skillsAndTraining.training3}</h6>
                </div>
                
            }
        </Grid>

        </div>
        <br/>
        <br/>
        <Box
            sx={[
                {
                display: 'flex',
                flexDirection: { xs: 'column-reverse', sm: 'row' },
                alignItems: 'end',
                flexGrow: 1,
                gap: 1,
                pb: { xs: 12, sm: 0 },
                mt: { xs: 2, sm: 0 },
                mb: '60px',
                }
            ]}
            >
                <Button
                variant="text"
                sx={{ display: { xs: 'none', sm: 'flex' } }}
                onClick={()=>{
                    v("/skilltr");
                }}
                >
                    
                Previous
                </Button>
           
            </Box>
    </>)
}