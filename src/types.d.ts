export interface CalendarType {
  month: string;
  days: (number | null)[][];
  weeks: number[];
  currentNumber: number;
  year: number;
}
