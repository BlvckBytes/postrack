export interface DateTimeRange {
  // Start of range, ISO
  startDate: string;
  startTime: string | null;

  // End of range, ISO
  endDate: string;
  endTime: string | null;
}