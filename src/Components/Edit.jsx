import React, { useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import { MdEditDocument } from "react-icons/md";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { ButtonBase, Chip, Stack } from '@mui/material';
import { getAResumeHistoryAPI, updateResumeAPI } from '../services/allAPI';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({ resumeId, resumeData, setresumeData }) {

  const { personalDetails, contactDetails, educationDetails, workExperience, skills, summary } = resumeData
  const suggestions = ['React', 'Angular', 'NodeJS', 'Express', 'MongoDB', 'Git', 'HTML', 'CSS', 'Bootstrap', 'Tailwind']

  console.log(resumeId, resumeData)

  const [resumeHistory, setResumeHistory] = useState({})
  const [userSkills, setuserSkills] = useState("")

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getAResume = async (resumeId) => {
    const response = await getAResumeHistoryAPI(resumeId)
    console.log(response)
    setResumeHistory(response?.data)
  }

  useEffect(() => {
    if (resumeId) {
      getAResume(resumeId)
    }
  }, [resumeId])


  const addSkill = (skill) => {
    console.log(skill);
    //console.log(userSkills)

    if (resumeHistory.skills.includes(skill)) {
      alert("Skill already Added!")
    }
    else {
      // New skill add to the array
      setResumeHistory(data => ({ ...resumeHistory, skills: [...resumeHistory.skills, skill] }))
    }
  }

  // Remove Skill

  const removeSkill =(deleteSkill) =>{
    setResumeHistory({...resumeHistory,skills : resumeHistory.skills.filter((item)=>item!=deleteSkill)})
  }

  const updateResume = async () =>{
    try{
      const result = await updateResumeAPI(resumeId,resumeHistory)
      console.log(result)
      setresumeData(result?.data)
      handleClose()
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <Tooltip title="Edit">
        <Button onClick={handleOpen}><MdEditDocument className='fs-2' /></Button>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Your Details
          </Typography>

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
              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, personalDetails: {
                  ...resumeHistory.personalDetails, fullName: e.target.value
                }
              })} id="outlined-basic" label="Full Name" variant="outlined" value={resumeHistory?.personalDetails?.fullName} />
              <br />
              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, personalDetails: {
                  ...resumeHistory.personalDetails, jobTitle: e.target.value
                }
              })} id="outlined-basic" label="Job Title" variant="outlined" value={resumeHistory?.personalDetails?.jobTitle} />
              <br />
              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, personalDetails: {
                  ...resumeHistory.personalDetails, location: e.target.value
                }
              })} id="outlined-basic" label="Location" variant="outlined" value={resumeHistory?.personalDetails?.location} />

            </Box>

          </div>

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
              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, contactDetails: {
                  ...resumeHistory.contactDetails, email: e.target.value
                }
              })} id="outlined-basic" label="Email" variant="outlined" value={resumeHistory?.contactDetails?.email} />

              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, contactDetails: {
                  ...resumeHistory.contactDetails, phoneNumber: e.target.value
                }
              })} id="outlined-basic" label="Phone Number" variant="outlined" value={resumeHistory?.contactDetails?.phoneNumber} />

              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, contactDetails: {
                  ...resumeHistory.contactDetails, github: e.target.value
                }
              })} id="outlined-basic" label="Github Profile" variant="outlined" value={resumeHistory?.contactDetails?.github} />

              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, contactDetails: {
                  ...resumeHistory.contactDetails, linkedIn: e.target.value
                }
              })} id="outlined-basic" label="LinkedIn Profile" variant="outlined" value={resumeHistory?.contactDetails?.linkedIn} />

              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, contactDetails: {
                  ...resumeHistory.contactDetails, portfolio: e.target.value
                }
              })} id="outlined-basic" label="Portfolio" variant="outlined" value={resumeHistory?.contactDetails?.portfolio} />
            </Box>

          </div>

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
              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, educationDetails: {
                  ...resumeHistory.educationDetails, course: e.target.value
                }
              })} id="outlined-basic" label="Course name" variant="outlined" value={resumeHistory?.educationDetails?.course} />

              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, educationDetails: {
                  ...resumeHistory.educationDetails, college: e.target.value
                }
              })} id="outlined-basic" label="College Name" variant="outlined" value={resumeHistory?.educationDetails?.college} />

              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, educationDetails: {
                  ...resumeHistory.educationDetails, university: e.target.value
                }
              })} id="outlined-basic" label="University" variant="outlined" value={resumeHistory?.educationDetails?.university} />

              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, educationDetails: {
                  ...resumeHistory.educationDetails, passout: e.target.value
                }
              })} id="outlined-basic" label="Year of Passout" variant="outlined" value={resumeHistory?.educationDetails?.passout} />

            </Box>

          </div>

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
              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, workExperience: {
                  ...resumeHistory.workExperience, jobTitle: e.target.value
                }
              })} id="outlined-basic" label="Job or Internship" variant="outlined" value={resumeHistory?.workExperience?.jobTitle} />

              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, workExperience: {
                  ...resumeHistory.workExperience, company: e.target.value
                }
              })} id="outlined-basic" label="Company Name" variant="outlined" value={resumeHistory?.workExperience?.company} />

              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, workExperience: {
                  ...resumeHistory.workExperience, location: e.target.value
                }
              })} id="outlined-basic" label="Location" variant="outlined" value={resumeHistory?.workExperience?.location} />

              <TextField onChange={e => setResumeHistory({
                ...resumeHistory, workExperience: {
                  ...resumeHistory.workExperience, duration: e.target.value
                }
              })} id="outlined-basic" label="Duration" variant="outlined" value={resumeHistory?.workExperience?.duration} />

            </Box>

          </div>

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
              <h4 className='text-center'>Suggestions:</h4>

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
                    resumeHistory?.skills?.length > 0 ?
                      resumeHistory?.skills.map((item, index) => (
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

          <div>
            <h3 className='text-center'>Professional Summary</h3>
            <TextField
              onChange={e => setResumeHistory({
                ...resumeHistory,
                summary: e.target.value
              })}
              id="outlined-multiline-static"
              label="Professional Summary"
              multiline
              rows={6}
              sx={{ '& > :not(style)': { m: 1, ml: 10, width: '50ch', marginLeft: '50px' } }}
              value={resumeHistory?.summary}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={updateResume} variant='contained'>Update</Button>
          </div>

        </Box>
      </Modal>
    </div>
  )
}

export default Edit
