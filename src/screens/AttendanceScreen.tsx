// src/screens/AttendanceScreen.tsx
import { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Screen from '../components/common/Screen';
import MonthSelector from '../components/attendance/MonthSelector';
import AttendanceSummary from '../components/attendance/AttendanceSummary';
import AttendanceCalendar from '../components/attendance/AttendanceCalendar';
import SelectedDayDetails from '../components/attendance/SelectedDayDetails';
import AttendanceActions from '../components/attendance/AttendanceActions';
import AttendanceHistory from '../components/attendance/AttendanceHistory';
const AttendanceScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date(2025, 8, 1));
  const [selectedDate, setSelectedDate] = useState('2025-09-10');

  return (
    <Screen>
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-4 px-4 pb-6"
        showsVerticalScrollIndicator={false}
      >
        <Text className="pt-4 text-2xl font-bold text-slate-900">
          Chấm Công
        </Text>
        <MonthSelector month={selectedMonth} onMonthChange={setSelectedMonth} />
        <AttendanceSummary />
        <AttendanceCalendar
          month={selectedMonth}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
        <SelectedDayDetails selectedDate={selectedDate} />
        <AttendanceActions />
        <AttendanceHistory />
      </ScrollView>
    </Screen>
  );
};

export default AttendanceScreen;
