import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { CalendarType } from '../../types';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';

interface Props {
  calendar: CalendarType;
}

const DaysCalendar: React.FC<Props> = ({ calendar }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
              {windowWidth < 1200 ? (
                <Box>
                  <p>{item2}</p>
                  <p> {item2 !== null && dayjs().date(item2).locale(ru).format('dddd')}</p>
                </Box>
              ) : (
                item2
              )}
            </Paper>
          </Grid>
        )),
      )}
    </>
  );
};

export default DaysCalendar;
