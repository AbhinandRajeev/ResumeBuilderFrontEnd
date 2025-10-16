import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Chip, Stack } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { addResumeAPI } from '../services/allAPI';
import Swal from 'sweetalert2'

const steps = ['Basic Information', 'Contact Details', 'Education details', 'Work Experience', 'Skills', 'Summary'];

function Steps({ resumeData, setresumeData, setIsFinished }) {

  console.log(resumeData)

  //console.log(props)
  // props = {
  // resumeData:{}
  // setresumeData:[]
  //  }

  // props =>destructure => {resumeData, setResumeData}

  // Destructue resumedata

  const { personalDetails, contactDetails, educationDetails, workExperience, skills, summary } = resumeData

  // to hold data from the input box
  const [userSkills, setuserSkills] = useState("")
  // console.log(userSkills)

  const suggestions = ['React', 'Angular', 'NodeJS', 'Express', 'MongoDB', 'Git', 'HTML', 'CSS', 'Bootstrap', 'Tailwind']

  const addSkill = (skill) => {
    console.log(skill);
    //console.log(userSkills)

    if (resumeData.skills.includes(skill)) {
      alert("Skill already Added!")
    }
    else {
      // New skill add to the array
      setresumeData(data => ({ ...data, skills: [...data.skills, skill] }))
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const renderStepContent = (step) => {
    switch (step) {
      case 0: return (
        <div>
          <h3 className='text-center'>Personal Details</h3>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
            noValidate
            autoComplete="off"
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <TextField onChange={e => setresumeData({ ...resumeData, personalDetails: { ...resumeData.personalDetails, fullName: e.target.value } })} id="outlined-basic" label="Full Name" variant="outlined" />
            <br />
            <TextField onChange={e => setresumeData({ ...resumeData, personalDetails: { ...resumeData.personalDetails, jobTitle: e.target.value } })} id="outlined-basic" label="Job Title" variant="outlined" />
            <br />
            <TextField onChange={e => setresumeData({ ...resumeData, personalDetails: { ...resumeData.personalDetails, location: e.target.value } })} id="outlined-basic" label="Location" variant="outlined" />

          </Box>

        </div>
      )
      case 1: return (
        <div>
          <h3 className='text-center'>Contact Details</h3>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
            noValidate
            autoComplete="off"
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <TextField onChange={e => setresumeData({ ...resumeData, contactDetails: { ...resumeData.contactDetails, email: e.target.value } })} id="outlined-basic" label="Email" variant="outlined" />

            <TextField onChange={e => setresumeData({ ...resumeData, contactDetails: { ...resumeData.contactDetails, phoneNumber: e.target.value } })} id="outlined-basic" label="Phone Number" variant="outlined" />

            <TextField onChange={e => setresumeData({ ...resumeData, contactDetails: { ...resumeData.contactDetails, github: e.target.value } })} id="outlined-basic" label="Github Profile" variant="outlined" />

            <TextField onChange={e => setresumeData({ ...resumeData, contactDetails: { ...resumeData.contactDetails, linkedIn: e.target.value } })} id="outlined-basic" label="LinkedIn Profile" variant="outlined" />

            <TextField onChange={e => setresumeData({ ...resumeData, contactDetails: { ...resumeData.contactDetails, portfolio: e.target.value } })} id="outlined-basic" label="Portfolio" variant="outlined" />
          </Box>

        </div>
      )
      case 2: return (
        <div>
          <h3 className='text-center'>Education details</h3>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
            noValidate
            autoComplete="off"
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <TextField onChange={e => setresumeData({ ...resumeData, educationDetails: { ...resumeData.educationDetails, course: e.target.value } })} id="outlined-basic" label="Course name" variant="outlined" />

            <TextField onChange={e => setresumeData({ ...resumeData, educationDetails: { ...resumeData.educationDetails, college: e.target.value } })} id="outlined-basic" label="College Name" variant="outlined" />

            <TextField onChange={e => setresumeData({ ...resumeData, educationDetails: { ...resumeData.educationDetails, university: e.target.value } })} id="outlined-basic" label="University" variant="outlined" />

            <TextField onChange={e => setresumeData({ ...resumeData, educationDetails: { ...resumeData.educationDetails, passout: e.target.value } })} id="outlined-basic" label="Year of Passout" variant="outlined" />

          </Box>

        </div>
      )
      case 3: return (
        <div>
          <h3 className='text-center'>Work Experience</h3>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
            noValidate
            autoComplete="off"
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <TextField onChange={e => setresumeData({ ...resumeData, workExperience: { ...resumeData.workExperience, jobTitle: e.target.value } })} id="outlined-basic" label="Job or Internship" variant="outlined" />

            <TextField onChange={e => setresumeData({ ...resumeData, workExperience: { ...resumeData.workExperience, company: e.target.value } })} id="outlined-basic" label="Company Name" variant="outlined" />

            <TextField onChange={e => setresumeData({ ...resumeData, workExperience: { ...resumeData.workExperience, location: e.target.value } })} id="outlined-basic" label="Location" variant="outlined" />

            <TextField onChange={e => setresumeData({ ...resumeData, workExperience: { ...resumeData.workExperience, duration: e.target.value } })} id="outlined-basic" label="Duration" variant="outlined" />

          </Box>

        </div>
      )
      case 4: return (
        <div>
          <h3 className='text-center'>Skills</h3>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
            noValidate
            autoComplete="off"
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <TextField onChange={e => setuserSkills(e.target.value)} id="outlined-basic" label="Add Skills" variant="outlined" />

            <Stack spacing={2} direction="row">
              <Button onClick={() => addSkill(userSkills)} variant="contained">ADD</Button>
            </Stack>

          </Box>

          <Box sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <h4>Suggestions:</h4>

            <Stack spacing={4}
              direction="row"
              display={'flex'}
              justifyContent={'space-around'}
              flexWrap={'wrap'}
              width={'200px'}
            >
              {
                suggestions.length > 0 ?
                  suggestions.map((item, index) => (
                    <Button onClick={() => addSkill(item)} variant='outlined' className='mb-3' key={index}>{item}</Button>
                  ))
                  : "Empty Array"
              }
            </Stack>

            <Stack>
              <Typography variant='h5'>
                Added Skills
                {
                  skills.length > 0 ?
                    skills.map((item, index) => (
                      <Button variant='outlined' className='mb-3' key={index}>{item}
                        <span onClick={() => removeSkill(item)} style={{ marginLeft: '8px', cursor: 'pointer',color: 'red' }}>x</span>
                      </Button>
                    ))
                    : ""
                }
              </Typography>
            </Stack>
          </Box>

        </div>
      )

      case 5: return (
        <div>
          <h3 className='text-center'>Professional Summary</h3>
          <TextField onChange={e => setresumeData({ ...resumeData, summary: e.target.value })}
            id="outlined-multiline-static"
            label="Professional Summary"
            multiline
            rows={6}
            defaultValue=""
            sx={{ '& > :not(style)': { m: 1, ml: 10, width: '80ch' } }}
          />
        </div>
      )
      default: return null
    }
  }

  const handleAddResume = async () => {
    try {
      const response = await addResumeAPI(resumeData)
      console.log(response)
      Swal.fire({
        title: "Successfully Added",
        icon: "success"
      });

      setIsFinished(true)
    }
    catch (err) {
      console.log("Error" + err)

      Swal.fire({
        title: "Error!",
        text: "Error Message:" +err,
        icon: "error"
      });
    }
  }

  const removeSkill =(deleteSkill) =>{
    setresumeData({...resumeData,skills : resumeData.skills.filter((item)=>item!=deleteSkill)})
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "500px" }}>
              <Box sx={{ flexGrow: 1, ml: 5 }}>
                <Typography sx={{ mb: 2 }}>Step {activeStep + 1}</Typography>
                {renderStepContent(activeStep)}
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                {activeStep === steps.length - 1 ? <Button onClick={handleAddResume}>Finish</Button>
                  : <Button onClick={handleNext}>Next</Button>}

              </Box>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  )
}

export default Steps

