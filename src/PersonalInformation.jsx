import React, { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function PersonalInformation() {
    const [activeStep, setActiveStep] = useState(0);
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        birthday: '',
        address1: '',
        city: '',
        province: '',
        zip: '',
        country: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    useEffect(() => {  
        const savedData = JSON.parse(localStorage.getItem('personalData'));
        if (savedData) {
            setData(savedData);
        }else{
            console.log("No Data found")
        }
    }, []);

    const storeDataInLocalStorage = () => {
        localStorage.setItem('personalData', JSON.stringify(data));
    };

    const isEp = () => {
        return Object.values(data).every(field => field.trim() !== '');
    };

    let v = useNavigate();
    return (
        
        <>
            <Grid container spacing={3} sx={{ textAlign: 'left' }}>
                <FormGrid size={{ xs: 12 }}><h1>Personal Information</h1></FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="first-name" required>First name</FormLabel>
                    <OutlinedInput
                        id="first-name"
                        name="firstname"
                        type="text"
                        placeholder="Aldrin"
                        required
                        size="small"
                        value={data.firstname}
                        onChange={handleInputChange}
                    />
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="last-name" required>Last name</FormLabel>
                    <OutlinedInput
                        id="last-name"
                        name="lastname"
                        type="text"
                        placeholder="Vitorillo"
                        required
                        size="small"
                        value={data.lastname}
                        onChange={handleInputChange}
                    />
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="gender" required>Gender</FormLabel>
                    <RadioGroup
                        row
                        name="gender"
                        value={data.gender}
                        onChange={handleInputChange}
                        sx={{ marginLeft: '2rem' }}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" sx={{color:'black'}}/>
                        <FormControlLabel value="male" control={<Radio />} label="Male" sx={{color:'black'}}/>
                        <FormControlLabel value="other" control={<Radio />} label="Other" sx={{color:'black'}}/>
                    </RadioGroup>
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="birthday" required>Birthday</FormLabel>
                    <OutlinedInput
                        id="birthday"
                        name="birthday"
                        type="text"
                        placeholder="mm/dd/yyyy"
                        required
                        size="small"
                        value={data.birthday}
                        onChange={handleInputChange}
                    />
                </FormGrid>
                <FormGrid size={{ xs: 12 }}>
                    <FormLabel htmlFor="address1" required>Address</FormLabel>
                    <OutlinedInput
                        id="address1"
                        name="address1"
                        type="text"
                        placeholder="Street/Sitio and Number"
                        required
                        size="small"
                        value={data.address1}
                        onChange={handleInputChange}
                    />
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                    <FormLabel htmlFor="city" required>City</FormLabel>
                    <OutlinedInput
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Cebu"
                        required
                        size="small"
                        value={data.city}
                        onChange={handleInputChange}
                    />
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                    <FormLabel htmlFor="province" required>Province</FormLabel>
                    <OutlinedInput
                        id="province"
                        name="province"
                        type="text"
                        placeholder="Cebu"
                        required
                        size="small"
                        value={data.province}
                        onChange={handleInputChange}
                    />
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                    <FormLabel htmlFor="zip" required>Zip / Postal code</FormLabel>
                    <OutlinedInput
                        id="zip"
                        name="zip"
                        type="text"
                        placeholder="6000"
                        required
                        size="small"
                        value={data.zip}
                        onChange={handleInputChange}
                    />
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                    <FormLabel htmlFor="country" required>Country</FormLabel>
                    <OutlinedInput
                        id="country"
                        name="country"
                        type="text"
                        placeholder="Philippines"
                        required
                        size="small"
                        value={data.country}
                        onChange={handleInputChange}
                    />
                </FormGrid>
            </Grid>
            <br />
            <br />
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
                <Button
                    variant="contained"
                    sx={{ width: { xs: '50%' } }}
                    onClick={() => {
                        if (isEp()) {
                            storeDataInLocalStorage(); 
                            v("/educbg");
                        } else {
                            alert("Fill all the fields.");
                        }
                    }}
                >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
            </Box>
        </>
   
    );
}
