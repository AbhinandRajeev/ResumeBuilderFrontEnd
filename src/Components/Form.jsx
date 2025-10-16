import React, { useState } from 'react'
import { Stack, Box } from '@mui/material'
import Steps from './Steps'
import Preview from './Preview'

function Form() {

  const [resumeData, setresumeData] = useState({
    personalDetails: {
      fullName: "",
      jobTitle: "",
      location: "",
    },

    contactDetails: {
      email: "",
      phoneNumber: "",
      github: "",
      linkedIn: "",
      portfolio: ""
    },

    educationDetails: {
      course: "",
      college: "",
      university: "",
      passout: "",
    },

    workExperience: {
      jobTitle: "",
      company: "",
      location: "",
      duration: "",
    },
    skills: [],
    summary: ""
  })

  const [isFinished, setIsFinished] = useState(false)

  // state for storing id of created resume

  const [resumeId, setResumeId] = useState("")

  return (
    <div>

      {isFinished ?

        <Stack direction= 'row' sx={{justifyContent: "center", alignItems: "center", marginBottom: '20px'}}>
          <Box>
          <Preview resumeData={resumeData}
            setresumeData={setresumeData}
            resumeId={resumeId}
            setResumeId={setResumeId}
            />
        </Box>
        </Stack>
        :
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Steps resumeData={resumeData}
              setresumeData={setresumeData}
              setIsFinished={setIsFinished} />
          </Box>

          <Box>
            <Preview resumeData={resumeData}
              setresumeData={setresumeData} />
          </Box>

        </Stack >
      }

    </div>
  )
}

export default Form
