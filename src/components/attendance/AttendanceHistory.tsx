import { Text, View } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { ATTENDANCE_RECENT_HISTORY } from '../../constants/attendanceData';

const AttendanceHistory = () => (
  <View className="rounded-2xl bg-white p-4">
    <View className="mb-3 flex-row items-center justify-between">
      <Text className="text-base font-semibold text-slate-900">
        Lịch sử gần đây
      </Text>
      <View className="flex-row items-center">
        <Text className="text-sm font-medium text-blue-700">Tất cả</Text>
        <ChevronRight size={16} color="#2563EB" />
      </View>
    </View>

    <View className="gap-3">
      {ATTENDANCE_RECENT_HISTORY.map(item => {
        const Icon = item.icon;

        return (
          <View
            key={item.id}
            className="flex-row items-center rounded-2xl bg-slate-50 p-3"
          >
            <View
              className="mr-3 h-11 w-11 items-center justify-center rounded-xl"
              style={{ backgroundColor: item.iconBackground }}
            >
              <Icon size={21} color={item.iconColor} />
            </View>

            <View className="flex-1">
              <View className="flex-row flex-wrap items-center gap-1.5">
                <Text className="text-sm font-medium text-slate-900">
                  {item.date}
                </Text>
                <View
                  className="rounded-md px-1.5 py-0.5"
                  style={{ backgroundColor: item.statusBackground }}
                >
                  <Text
                    className="text-[10px] font-medium"
                    style={{ color: item.statusColor }}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
              <Text className="mt-0.5 text-xs text-slate-500">
                {item.timeSummary}
              </Text>
            </View>

            <View className="ml-2 items-end">
              <Text className="text-sm font-semibold text-slate-900">
                {item.workAmount}
              </Text>
              {item.trailingText ? (
                <Text
                  className="mt-0.5 text-right text-[10px]"
                  style={{ color: item.trailingColor }}
                >
                  {item.trailingText}
                </Text>
              ) : null}
            </View>
          </View>
        );
      })}
    </View>
  </View>
);

export default AttendanceHistory;
