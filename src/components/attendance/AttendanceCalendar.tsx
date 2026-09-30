import { Pressable, Text, View } from 'react-native';
import { ATTENDANCE_DAY_STATUS } from '../../constants/attendanceData';

interface AttendanceCalendarProps {
  month: Date;
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

const WEEKDAYS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
const STATUS_COLORS = {
  present: '#047857',
  late: '#B91C1C',
  leave: '#2563EB',
  overtime: '#A16207',
  rest: '#CBD5E1',
} as const;
const LEGEND = [
  { label: 'Đủ công', color: STATUS_COLORS.present },
  { label: 'Đi muộn', color: STATUS_COLORS.late },
  { label: 'Nghỉ phép', color: STATUS_COLORS.leave },
  { label: 'Tăng ca', color: STATUS_COLORS.overtime },
  { label: 'Nghỉ tuần', color: STATUS_COLORS.rest },
];

const toDateKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

const AttendanceCalendar = ({
  month,
  selectedDate,
  onSelectDate,
}: AttendanceCalendarProps) => {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  // Monday-first offset: JS uses Sunday=0, so Sunday maps to column 6.
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const leadingCount = (firstDay + 6) % 7;
  const leadingDays = Array.from(
    { length: leadingCount },
    (_, index) => new Date(year, monthIndex, index - leadingCount + 1),
  );
  const monthDays = Array.from(
    { length: daysInMonth },
    (_, index) => new Date(year, monthIndex, index + 1),
  );
  const usedCells = leadingDays.length + monthDays.length;
  const trailingCount = (7 - (usedCells % 7)) % 7;
  const trailingDays = Array.from(
    { length: trailingCount },
    (_, index) => new Date(year, monthIndex + 1, index + 1),
  );
  const dates = [...leadingDays, ...monthDays, ...trailingDays];

  return (
    <View className="rounded-2xl bg-white p-4">
      <View className="mb-2 flex-row">
        {WEEKDAYS.map((weekday, index) => (
          <View
            key={weekday}
            className="items-center py-1"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: '14.2857%' }}
          >
            <Text
              className={`text-xs ${index === 6 ? 'text-rose-500' : 'text-slate-700'}`}
            >
              {weekday}
            </Text>
          </View>
        ))}
      </View>

      <View className="flex-row flex-wrap">
        {dates.map(date => {
          const key = toDateKey(date);
          const isCurrentMonth = date.getMonth() === monthIndex;
          const nextMonth = new Date(year, monthIndex + 1, 1);
          const isNextMonth =
            date.getFullYear() === nextMonth.getFullYear() &&
            date.getMonth() === nextMonth.getMonth();
          const isWeekend = date.getDay() === 0 || date.getDay() === 6;
          const selected = key === selectedDate;
          const dataStatus = isCurrentMonth
            ? ATTENDANCE_DAY_STATUS[key as keyof typeof ATTENDANCE_DAY_STATUS]
            : undefined;
          const status =
            dataStatus ?? (isCurrentMonth && isWeekend ? 'rest' : undefined);
          const dotColor = status
            ? STATUS_COLORS[status as keyof typeof STATUS_COLORS]
            : undefined;

          return (
            <Pressable
              key={key}
              disabled={!isCurrentMonth}
              onPress={() => onSelectDate(key)}
              accessibilityRole="button"
              accessibilityState={{ selected, disabled: !isCurrentMonth }}
              className="items-center"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{ width: '14.2857%', height: 37 }}
            >
              <View
                className={`h-8 w-9 items-center justify-center rounded-xl ${selected ? 'bg-blue-700' : ''}`}
              >
                <Text
                  className={`text-sm ${selected ? 'font-semibold text-white' : isWeekend || (!isCurrentMonth && !isNextMonth) ? 'text-slate-400' : 'text-slate-800'}`}
                >
                  {date.getDate()}
                </Text>
              </View>
              {dotColor ? (
                <View
                  className="mt-0.5 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: dotColor }}
                />
              ) : null}
            </Pressable>
          );
        })}
      </View>

      <View className="mt-2 flex-row flex-wrap items-center justify-between gap-y-2 border-t border-slate-50 pt-3">
        {LEGEND.map(({ label, color }) => (
          <View key={label} className="flex-row items-center gap-1">
            <View
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            <Text className="text-[10px] text-slate-700">{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AttendanceCalendar;
