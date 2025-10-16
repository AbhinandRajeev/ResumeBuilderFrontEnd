import { Button, Paper, Stack, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';
// import Edit from '../Components/Edit';

function History() {
  const [resume, setResume] = useState([]);

  const getHistory = async () => {
    try {
      const response = await getHistoryAPI();
      setResume(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHistory = async (id) => {
    const response = await deleteHistoryAPI(id);
    alert("Deleted");
    getHistory();
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom align="center">
        Download Resume Details
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        flexWrap="wrap"
        spacing={4}
        sx={{ width: '100%', rowGap: 6 }} 
      >

        {resume.length > 0 ? (
          resume.map((item) => (
            <Paper
              key={item.id}
              elevation={2}
              sx={{
                width: 350,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: '100%' }}
              >
                <Typography variant="subtitle2">
                  Review at: {item.formatedDateTime}
                </Typography>
                <Button onClick={() => deleteHistory(item.id)}>
                  <MdDelete className="text-danger" style={{ fontSize: 22 }} />
                </Button>
              </Stack>

              <Paper
                variant="outlined"
                sx={{
                  width: '100%',
                  height: 330,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={item.imgUrl}
                  alt=""
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Paper>
            </Paper>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary">
            History Not Available
          </Typography>
        )}
      </Stack>
    </Box>
  );
}

export default History;
