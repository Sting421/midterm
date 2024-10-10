import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';

import { styled } from '@mui/system';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
  }));

  const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function EducationalBackground(){
    
    let v = useNavigate();
    const [activeStep, setActiveStep] = useState(1);

    const [data, setData] = useState({
        elementarye: '',
        elem_address: '',
        high_school: '',
        hs_address: '',
        college: '',
        college_address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };
    const isEp = () => {
        return Object.values(data).every(field => field.trim() !== '');
    };

    useEffect(() => {  
        const savedData = JSON.parse(localStorage.getItem('educData'));
        if (savedData) {
            setData(savedData);
        }else{
            console.log("No data Found")
        }
    }, []);

    const storeDataInLocalStorage = () => {
        localStorage.setItem('educData', JSON.stringify(data));
    };



    return (<>
        <Grid container spacing={3} sx={{textAlign:'left'}}>
            
        <FormGrid size={{ xs: 12}}><h1>Educational Background</h1></FormGrid>
            <FormGrid size={{ xs: 12, md: 12 }}><h2>Elementary</h2></FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="elementary" required>
                School Name
                </FormLabel>
                <OutlinedInput
                id="elementary"
                name="elementarye"
                type="name"
                placeholder="School Name"
                required
                size="small"
                value={data.elementarye}
                onChange={handleInputChange}
                />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="elem-address" required>
                Address
                </FormLabel>
                <OutlinedInput
                id="elem-address"
                name="elem_address"
                type="text"
                placeholder="Address"
                required
                size="small"
                value={data.elem_address}
                onChange={handleInputChange}
                />
            </FormGrid>

            <FormGrid size={{ xs: 12, md: 12 }}><h2>High School</h2></FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="high-school" required>
                School Name
                </FormLabel>
                <OutlinedInput
                id="high-school"
                name="high_school"
                type="text"
                placeholder="School Name"
                required
                size="small"
                value={data.high_school}
                onChange={handleInputChange}
                />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="hs-address" required>
                Address
                </FormLabel>
                <OutlinedInput
                id="hs-address"
                name="hs_address"
                type="text"
                placeholder="Address"
                required
                size="small"
                value={data.hs_address}
                onChange={handleInputChange}
                />
            </FormGrid>

            <FormGrid size={{ xs: 12, md: 12 }}><h2>College</h2></FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="college" required>
                School Name
                </FormLabel>
                <OutlinedInput
                id="college"
                name="college"
                type="text"
                placeholder="School Name"
                required
                size="small"
                value={data.college}
                onChange={handleInputChange}
                />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="college-address" required>
                Address
                </FormLabel>
                <OutlinedInput
                id="college-address"
                name="college_address"
                type="text"
                placeholder="Address"
                required
                size="small"
                value={data.college_address}
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
                    v("/perinfo");
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
                    v("/perinfo");
                }}
                >
                Previous
                </Button>
            )}
            <Button
                variant="contained"
                sx={{ width: { xs: '50%' } }}
                onClick={()=>{
                    if (isEp()) {
                        storeDataInLocalStorage(); 
                    v("/skilltr");
                    }else{
                        alert("Fill all the fields.");
                    }
                }}
            >
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
            </Button>
            </Box>
    </>)
}