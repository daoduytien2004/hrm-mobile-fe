import { Text, View } from 'react-native';
import { LogIn, LogOut, MapPin, ShieldCheck } from 'lucide-react-native';
import { ATTENDANCE_DAY_DETAILS } from '../../constants/attendanceData';

interface SelectedDayDetailsProps {
  selectedDate: string;
}

const SelectedDayDetails = ({ selectedDate }: SelectedDayDetailsProps) => {
  const detail =
    ATTENDANCE_DAY_DETAILS[selectedDate as keyof typeof ATTENDANCE_DAY_DETAILS];

  // Ngày chưa có dữ liệu mẫu thì chưa hiển thị card.
  if (!detail) {
    return null;
  }

  const statusColor = detail.status === 'Hợp lệ' ? '#059669' : '#DC2626';

  return (
    <View className="rounded-2xl bg-white p-4">
      {/* Ngày, trạng thái và tổng công */}
      <View className="flex-row items-start justify-between">
        <View className="flex-1 pr-2">
          <View className="flex-row flex-wrap items-center gap-2">
            <Text className="text-lg font-semibold text-slate-900">
              {detail.dateLabel}
            </Text>

            <View
              className="rounded-full px-2 py-1"
              style={{ backgroundColor: `${statusColor}20` }}
            >
              <Text
                className="text-xs font-medium"
                style={{ color: statusColor }}
              >
                {detail.status}
              </Text>
            </View>
          </View>

          <Text className="mt-1 text-sm text-slate-500">
            Ca hành chính: 08:00 - 17:30
          </Text>
        </View>

        <View className="items-end">
          <Text className="text-lg font-semibold text-emerald-700">
            {detail.workAmount}
          </Text>
          <Text className="text-right text-xs text-slate-600">
            {detail.workDuration}
          </Text>
        </View>
      </View>

      {/* Giờ vào và giờ ra */}
      <View className="mt-4 flex-row gap-3">
        <View className="flex-1 rounded-2xl bg-indigo-50 p-3">
          <View className="flex-row items-center">
            <View className="mr-2 h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
              <LogIn size={20} color="#059669" />
            </View>

            <View>
              <Text className="text-xs text-slate-600">Giờ vào</Text>
              <Text className="text-lg font-semibold text-slate-900">
                {detail.checkIn.time}
              </Text>
              <Text className="text-xs text-emerald-700">
                {detail.checkIn.note}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-1 rounded-2xl bg-indigo-50 p-3">
          <View className="flex-row items-center">
            <View className="mr-2 h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
              <LogOut size={20} color="#2563EB" />
            </View>

            <View>
              <Text className="text-xs text-slate-600">Giờ ra</Text>
              <Text className="text-lg font-semibold text-slate-900">
                {detail.checkOut.time}
              </Text>
              <Text className="text-xs text-emerald-700">
                {detail.checkOut.note}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Địa điểm và phương thức xác thực */}
      <View className="mt-3 flex-row items-center justify-between rounded-xl bg-slate-50 p-3">
        <View className="mr-2 flex-1 flex-row items-center">
          <MapPin size={18} color="#2563EB" />
          <Text className="ml-2 flex-1 text-xs text-slate-600">
            {detail.location}
          </Text>
        </View>

        <View className="flex-row items-center">
          <ShieldCheck size={16} color="#059669" />
          <Text className="ml-1 text-xs text-slate-700">
            {detail.verification}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SelectedDayDetails;
