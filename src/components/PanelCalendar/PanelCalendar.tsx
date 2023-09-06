import React from 'react';
import { Box, Button, Chip, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CalendarType } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { dicrementCount, incrementCount, selectCount, setCount } from '../../features/App/NewSlice';

interface Props {
  calendar: CalendarType;
}

const PanelCalendar: React.FC<Props> = ({ calendar }) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <IconButton onClick={() => dispatch(dicrementCount())} aria-label="delete">
        <ArrowBackIosIcon />
      </IconButton>
      <Box>
        <Chip label={`${calendar.month}, ${calendar.year}`} variant="outlined" />
      </Box>

      <Box sx={{ marginLeft: 'auto' }}>
        <Button disabled={count === 0} onClick={() => dispatch(setCount(0))} variant="text">
          Сегондя
        </Button>
      </Box>
      <IconButton onClick={() => dispatch(incrementCount())} aria-label="delete">
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default PanelCalendar;
