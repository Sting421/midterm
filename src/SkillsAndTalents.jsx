
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';

import { styled } from '@mui/system';
import React, { useState, useEffect } from 'react'; 



import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
  }));

  const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function SkillsAndTrainings(){
    
    const [activeStep, setActiveStep] = useState(1);


    const [data, setData] = useState({
        skill1: '',
        skill2: '',
        skill3: '',
        training1: '',
        training2: '',
        training3: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    useEffect(() => {  
        const savedData = JSON.parse(localStorage.getItem('skillData'));
        if (savedData) {
            setData(savedData);
        }
        else{
            console.log("No data found")
        }
    }, []);

    const storeDataInLocalStorage = () => {
        localStorage.setItem('skillData', JSON.stringify(data));
    };
    
    let v = useNavigate();
    return (<>
        <Grid container spacing={3} sx={{textAlign:'left'}}>
            
        <FormGrid size={{ xs: 12}}><h1>Skills and Trainings</h1></FormGrid>
            <FormGrid size={{ xs: 12, md: 12 }}><h2>Skills (Max of 3)</h2></FormGrid>
            <FormGrid size={{ xs: 12}}>
                <FormLabel htmlFor="skill1">
                Skill 1
                </FormLabel>
                <OutlinedInput
                id="skill1"
                name="skill1"
                type="text"
                placeholder="Skill 1"
                size="small"
                value={data.skill1}
                onChange={handleInputChange}
                />
            </FormGrid>
            <FormGrid size={{ xs: 12}}>
                <FormLabel htmlFor="skill2" >
                Skill 2
                </FormLabel>
                <OutlinedInput
                id="skill2"
                name="skill2"
                type="name"
                placeholder="Skill 2"
                size="small"
                value={data.skill2}
                onChange={handleInputChange}
                />
            </FormGrid>
            <FormGrid size={{ xs: 12}}>
                <FormLabel htmlFor="skill3">
                Skill 3
                </FormLabel>
                <OutlinedInput
                id="skill3"
                name="skill3"
                type="text"
                placeholder="Skill 3"
                size="small"
                value={data.skill3}
                onChange={handleInputChange}
                />
            </FormGrid>

            <FormGrid size={{ xs: 12, md: 12 }}><h2>Trainings (Max of 3)</h2></FormGrid>
            <FormGrid size={{ xs: 12}}>
                <FormLabel htmlFor="training1" >
                Training 1
                </FormLabel>
                <OutlinedInput
                id="training1"
                name="training1"
                type="text"
                placeholder="Training 1"
                size="small"
                value={data.training1}
                onChange={handleInputChange}
                />
            </FormGrid>
            <FormGrid size={{ xs: 12}}>
                <FormLabel htmlFor="training2" >
                Training 2
                </FormLabel>
                <OutlinedInput
                id="training2"
                name="training2"
                type="name"
                placeholder="Training 2"
                size="small"
                value={data.training2}
                onChange={handleInputChange}
                />
            </FormGrid>
            <FormGrid size={{ xs: 12}}>
                <FormLabel htmlFor="training3" >
                Training 3
                </FormLabel>
                <OutlinedInput
                id="training3"
                name="training3"
                type="text"
                placeholder="Training 3"
                size="small"
                value={data.training3}
                onChange={handleInputChange}
                />
            </FormGrid>
            
           
        </Grid>
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
                },
                activeStep !== 0
                ? { justifyContent: 'space-between' }
                : { justifyContent: 'flex-end' },
            ]}
            >
            {activeStep !== 0 && (
                <Button
                variant="text"
                sx={{ display: { xs: 'none', sm: 'flex' } }}
                onClick={()=>{
                    v("/educbg");
                }}
                >
                    
                Previous
                </Button>
            )}
            {activeStep !== 0 && (
                <Button
                variant="outlined"
                fullWidth
                sx={{ display: { xs: 'flex', sm: 'none' } }}
                onClick={()=>{
                    v("/educbg");
                }}
                >
                Previous
                </Button>
            )}
            <Button
                variant="contained"
                sx={{ width: { xs: '50%' } }}
                onClick={()=>{
                    v("/summaryinfo");
                    storeDataInLocalStorage(); 
                }}
            >
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
            </Button>
            </Box>
    </>)
}