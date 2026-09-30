import { Text, View } from 'react-native';
import { CalendarCheck } from 'lucide-react-native';
import { ATTENDANCE_MONTH_SUMMARY } from '../../constants/attendanceData';

const AttendanceSummary = () => {
  const { updatedAt, workDays, stats } = ATTENDANCE_MONTH_SUMMARY;
  const progress = (workDays.completed / workDays.planned) * 100;

  return (
    <View className="rounded-2xl bg-white p-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className="h-9 w-9 items-center justify-center rounded-xl bg-blue-100">
            <CalendarCheck size={20} color="#2563EB" />
          </View>
          <View className="ml-3">
            <Text className="font-semibold text-slate-900">
              Tổng quan công tháng
            </Text>
            <Text className="text-xs text-slate-500">{updatedAt}</Text>
          </View>
        </View>

        <View className="items-end">
          <View className="flex-row items-baseline">
            <Text className="text-xl font-bold text-blue-700">
              {workDays.completed}
            </Text>
            <Text className="text-sm text-slate-500">/{workDays.planned}</Text>
          </View>
          <Text className="text-xs text-emerald-700">
            Đạt {progress.toFixed(1)}% kế hoạch
          </Text>
        </View>
      </View>

      <View className="mt-4 h-2 overflow-hidden rounded-full bg-indigo-100">
        <View
          className="h-full rounded-full bg-emerald-400"
          style={{ width: `${progress}%` }}
        />
      </View>

      <View className="mt-4 flex-row">
        {stats.map((stat, index) => {
          const { id, label, value, Icon, color, backgroundColor } = stat;
          const unit = 'unit' in stat ? stat.unit : undefined;
          const detail = 'detail' in stat ? stat.detail : undefined;

          return (
            <View
              key={id}
              className={`flex-1 items-center ${index > 0 ? 'border-l border-slate-100' : ''}`}
            >
              <View
                className="mb-1 h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor }}
              >
                <Icon size={16} color={color} />
              </View>
              <View className="flex-row items-baseline">
                <Text className="text-base font-semibold" style={{ color }}>
                  {value}
                  {unit ?? ''}
                </Text>
                {detail ? (
                  <Text className="ml-0.5 text-[10px] text-slate-500">
                    {detail}
                  </Text>
                ) : null}
              </View>
              <Text className="mt-0.5 text-center text-[10px] text-slate-600">
                {label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default AttendanceSummary;
