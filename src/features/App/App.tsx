import React, { useState } from 'react';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import { Box, Chip, Container, Grid, IconButton, Paper, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../App/App.css';
import DaysCalendar from '../../components/DaysCalendar/DaysCalendar';

const App = () => {
  const [count, setCount] = useState(0);
  const currentDate = dayjs();
  const newDate = dayjs().add(count, 'month').startOf('month');

  const days = [];
  let dayCounter = 1;
  const daysInMonth = newDate.daysInMonth();
  const firstDayOfMonth = newDate.day() - 1;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
        week.push(null);
      } else {
        week.push(dayCounter);
        dayCounter++;
      }
    }
    days.push(week);
  }

  const calendar = {
    month: newDate.locale(ru).format('MMMM'),
    days,
    weeks: [1, 2, 3, 4, 5, 6, 7],
    currentNumber:
      newDate.month() === currentDate.month() && newDate.year() === currentDate.year() ? currentDate.date() : 0,
    year: newDate.year(),
  };

  return (
    <div className="section_calendar">
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton onClick={() => setCount((prev) => prev - 1)} aria-label="delete">
            <ArrowBackIosIcon />
          </IconButton>
          <Box>
            <Chip label={`${calendar.month}, ${calendar.year}`} variant="outlined" />
          </Box>

          <Box sx={{ marginLeft: 'auto' }}>
            <Button disabled={count === 0} onClick={() => setCount(0)} variant="text">
              Сегондя
            </Button>
          </Box>
          <IconButton onClick={() => setCount((prev) => prev + 1)} aria-label="delete">
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <Grid spacing={2} container columns={{ xs: 4, sm: 8, md: 7 }}>
          {calendar.weeks.map((item) => (
            <Grid key={item} xs={1} item>
              <Paper elevation={3} sx={{ textAlign: 'center', fontSize: '20px', p: 1, mt: 3, mb: 1 }}>
                {dayjs().day(item).locale(ru).format('dddd')}
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid spacing={2} container columns={{ xs: 4, sm: 7, md: 7 }}>
          <DaysCalendar calendar={calendar} />
        </Grid>
      </Container>
    </div>
  );
};

export default App;
