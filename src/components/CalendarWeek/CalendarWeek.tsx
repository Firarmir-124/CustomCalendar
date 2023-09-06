import React from 'react';
import { Grid, Paper } from '@mui/material';
import dayjs from 'dayjs';
import { CalendarType } from '../../types';
import ru from 'dayjs/locale/ru';

interface Props {
  calendar: CalendarType;
}

const CalendarWeek: React.FC<Props> = ({ calendar }) => {
  return (
    <>
      {calendar.weeks.map((item) => (
        <Grid key={item} xs={1} item>
          <Paper elevation={3} sx={{ textAlign: 'center', fontSize: '20px', p: 1, mt: 3, mb: 1 }}>
            {dayjs().day(item).locale(ru).format('dddd')}
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default CalendarWeek;
