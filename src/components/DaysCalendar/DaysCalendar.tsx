import React from 'react';
import { Grid, Paper } from '@mui/material';
import { CalendarType } from '../../types';

interface Props {
  calendar: CalendarType;
}

const DaysCalendar: React.FC<Props> = ({ calendar }) => {
  return (
    <>
      {calendar.days.map((item) =>
        item.map((item2) => (
          <Grid key={Math.random() * Date.now()} xs={1} item>
            <Paper
              elevation={3}
              sx={{
                minHeight: '100px',
                textAlign: 'center',
                lineHeight: '100px',
                fontSize: '20px',
                background: item2 === calendar.currentNumber ? '#8a00ff' : '',
                color: item2 === calendar.currentNumber ? '#fff' : '',
              }}
            >
              {item2}
            </Paper>
          </Grid>
        )),
      )}
    </>
  );
};

export default DaysCalendar;
