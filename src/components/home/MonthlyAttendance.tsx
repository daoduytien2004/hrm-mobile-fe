import { Text, View } from 'react-native';
import { CalendarDays, Leaf, Clock3, TriangleAlert } from 'lucide-react-native';
import { MONTHLY_ATTENDANCE } from '../../constants/homeData';

const MonthlyAttendance = () => {
  const { month, workDays, lateDays, leaveDays, overtimeDays, progress } =
    MONTHLY_ATTENDANCE;

  const stats = [
    {
      label: 'Công đã ghi nhận',
      value: `${workDays.current}/${workDays.total}`,
      Icon: CalendarDays,
      color: '#2563EB',
      tile: 'bg-blue-50',
    },
    {
      label: 'Ngày nghỉ phép',
      value: leaveDays,
      Icon: Leaf,
      color: '#10B981',
      tile: 'bg-emerald-50',
    },
    {
      label: 'Lần đi muộn',
      value: lateDays,
      Icon: Clock3,
      color: '#F43F5E',
      tile: 'bg-rose-50',
    },
    {
      label: 'Ngày thiếu công',
      value: overtimeDays,
      Icon: TriangleAlert,
      color: '#F97316',
      tile: 'bg-orange-50',
    },
  ];

  return (
    <View className="rounded-2xl bg-white p-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-base font-bold text-slate-900">Công {month}</Text>
        <Text className="text-sm font-medium text-blue-600">
          Xem chi tiết ›
        </Text>
      </View>

      <View className="mt-3 flex-row">
        {stats.map(({ label, value, Icon, color, tile }, index) => (
          <View
            key={label}
            className={`flex-1 items-center ${index > 0 ? 'border-l border-slate-100' : ''}`}
          >
            <View
              className={`mb-1 h-7 w-7 items-center justify-center rounded-lg ${tile}`}
            >
              <Icon size={16} color={color} />
            </View>
            <Text className="text-sm font-semibold" style={{ color }}>
              {value}
            </Text>
            <Text className="text-center text-[10px] leading-3 text-slate-400">
              {label}
            </Text>
          </View>
        ))}
      </View>

      <View className="mt-4">
        <View className="h-2 overflow-hidden rounded-full bg-slate-100">
          <View
            className="h-full rounded-full bg-emerald-500"
            style={{ width: `${progress}%` }}
          />
        </View>
        <Text className="mt-2 text-right text-xs text-slate-500">
          {workDays.current}/{workDays.total} công
        </Text>
      </View>
    </View>
  );
};

export default MonthlyAttendance;
