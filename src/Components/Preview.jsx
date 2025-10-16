import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Chip, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Edit from './Edit';
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import MUILink from '@mui/material/Link';
import { IoLogoLinkedin } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { addHistoryAPI } from '../services/allAPI';




function Preview({resumeData,setresumeData,resumeId,setResumeId}) {

  const { personalDetails, contactDetails, educationDetails, workExperience, skills, summary } = resumeData

  const handleDownload = async() =>{
    // 1. Get an element
    const input = document.getElementById("result")
    console.log(input)

    // 2. convert as canvas
    const canvas = await html2canvas(input,{scale:2})
    console.log(canvas); // it returns promise => thats why we use async await

    // 3.convert canvas to image url
    const imgUrl = canvas.toDataURL('image/png')
    console.log(imgUrl)

    // 4. Generate pdf
    const pdf = new jsPDF('p','mm','a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pfdHeight = (canvas.height*pdfWidth)/canvas.width
    // image to pdf
    pdf.addImage(imgUrl,'PNG',0,0,pdfWidth,pfdHeight)
    pdf.save('resume.pdf')

    // get current date and time
    const current = new Date()
    console.log(current)
    const formatedDateTime = `${current.toLocaleDateString()}, ${current.toLocaleTimeString()}`
    console.log(formatedDateTime)

    try{
      const response = await addHistoryAPI({...resumeData,formatedDateTime,imgUrl})
      console.log(response)
      setResumeId(response?.data?.id)
      console.log(resumeId)
    }
    catch(err){
      console.log("Error" + err)
    }
  }

  return (
    <div>

      <Box sx={{display: 'flex' , justifyContent: 'flex-end', marginTop: '20px', padding: '10px'}}>

        <Tooltip title="Download">
          <Button onClick={handleDownload}><FaFileDownload className='fs-2' /></Button>
        </Tooltip>
        
        <Edit resumeId={resumeId} resumeData = {resumeData} setresumeData = {setresumeData}/>
        
        <Link to={'/history'}>
          <Tooltip title="History">
          <Button><FaHistory className='fs-2' /></Button>
        </Tooltip>
        </Link>
        
      </Box>
      <Box sx={{ display: 'flex',padding: '10px', flexWrap: 'wrap', '& >: not(style)': { m: 1, width: 550, height: 'auto', } }}>

        <Paper id = "result" elevation={10} sx={{ padding: '30px', }}>
          <Typography variant='h4' align='center' margin={'20px'}>
            {personalDetails.fullName!= ""?personalDetails.fullName : "FullName"}
          </Typography>

          <Typography variant='h6' align='center' margin={'20px'} color='blue' >
            {personalDetails.jobTitle!= ""? personalDetails.jobTitle : "Job Title"}
          </Typography>

          <Typography variant='body' display={'flex'} justifyContent={'space-evenly'} align='center' margin={'20px'}  >
            {contactDetails.phoneNumber!="" ? <span><FaPhoneVolume /> {contactDetails.phoneNumber}</span> :<FaPhoneVolume /> } | 
            {contactDetails.email!="" ? <span><IoIosMail /> {contactDetails.email}</span> : <IoIosMail />} | 
            {personalDetails.location!="" ? <span><IoLocationSharp /> {personalDetails.location}</span> : <IoLocationSharp />}
          </Typography>

          <Typography variant='body' align='center' margin={'20px'} color='blue' display={'flex'} justifyContent={'space-evenly'} >
            <MUILink href={contactDetails.github} target='_blank' >
              <BsGithub style={{color: "black"}} /> Github
            </MUILink>
            <MUILink href={contactDetails.linkedIn} target='_blank'>
              <IoLogoLinkedin style={{color: "black"}} /> LinkedIn
            </MUILink>
            <MUILink href={contactDetails.portfolio} target='_blank'>
              <CgWebsite style={{color: "black"}} /> Portfolio
            </MUILink>
          </Typography>
          <Divider>Summary</Divider>

          <Typography textAlign={'justify'} variant='body2'>
            {summary!="" ? summary : "Your summary"}
          </Typography>

          <Divider sx={{ marginTop: '20px' }}>Education</Divider>

          <Typography variant='body' display={'flex'} justifyContent={'space-evenly'} align='center' margin={'20px'}  >
            {educationDetails.course!="" ? educationDetails.course : "Course"} <br />
            {educationDetails.college!="" ? educationDetails.college : "College"} | {educationDetails.university!="" ? educationDetails.university : "University"} | {educationDetails.passout!="" ? educationDetails.passout : "Year"}
          </Typography>

          <Divider sx={{ marginTop: '20px' }}>Experience</Divider>

          <Typography variant='body' display={'flex'} justifyContent={'space-evenly'} align='center' margin={'20px'}  >
            {workExperience.jobTitle!="" ? workExperience.jobTitle : "Title"} <br />
            {workExperience.company!="" ? workExperience.company : "Company"} | {workExperience.location!="" ? workExperience.location : "Location"} | {workExperience.duration!="" ? workExperience.duration : "Duration"}
          </Typography>

          <Divider sx={{ marginTop: '20px' }}>Skills</Divider>

          <Typography className='mb-3' variant='body' display={'flex'} justifyContent={'space-evenly'} align='center' margin={'20px'} flexWrap={'wrap'}  >
            <div className='row'>
              {skills.length > 0 ? skills.map(item => (
                <div className='col'>
                  <Button variant='outlined' className='mb-3'>{item}</Button>
                </div>
              )): "Not yet added!"}
            </div>
          </Typography>
        </Paper>
      </Box>

    </div>
  )
}

export default Preview
