import React from 'react';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import { Container, Grid } from '@mui/material';
import '../App/App.css';
import DaysCalendar from '../../components/DaysCalendar/DaysCalendar';
import PanelCalendar from '../../components/PanelCalendar/PanelCalendar';
import { useAppSelector } from '../../store/hooks';
import { selectCount } from './NewSlice';
import CalendarWeek from '../../components/CalendarWeek/CalendarWeek';

const App = () => {
  const count = useAppSelector(selectCount);

  const currentDate = dayjs();
  const newDate = dayjs().add(count, 'month').startOf('month');
  let dayCounter = 1;
  const daysInMonth = newDate.daysInMonth();
  const firstDayOfMonth = newDate.day() - 1;
  const days = [];

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
        <PanelCalendar calendar={calendar} />
        <Grid spacing={2} container columns={{ xs: 4, sm: 5, md: 5, lg: 7 }}>
          <CalendarWeek calendar={calendar} />
        </Grid>
        <Grid spacing={2} container columns={{ xs: 3, sm: 4, md: 6, lg: 7 }}>
          <DaysCalendar calendar={calendar} />
        </Grid>
      </Container>
    </div>
  );
};

export default App;
