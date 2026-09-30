import { Alert, Pressable, Text, View } from 'react-native';
import {
  Bell,
  CalendarDays,
  ChevronDown,
  Eye,
  EyeOff,
  Moon,
} from 'lucide-react-native';
import { PAYROLL_DATA } from '../../constants/payrollData';

interface PayrollHeaderProps {
  showAmounts: boolean;
  onToggleAmounts: () => void;
}

const PayrollHeader = ({ showAmounts, onToggleAmounts }: PayrollHeaderProps) => (
  <>
    <View className="flex-row items-center justify-between pt-4">
      <Text className="text-2xl font-bold text-slate-900">Bảng Lương</Text>
      <View className="flex-row items-center gap-5">
        <Bell size={21} color="#0F172A" />
        <Moon size={21} color="#0F172A" />
      </View>
    </View>

    <View className="flex-row items-center justify-between">
      <Pressable
        onPress={() => Alert.alert('Kỳ lương', 'Bộ chọn kỳ lương sẽ được bổ sung sau.')}
        className="h-11 flex-row items-center rounded-full bg-white px-4"
      >
        <CalendarDays size={18} color="#2563EB" />
        <Text className="ml-2 text-sm font-medium text-slate-900">
          Kỳ tháng {PAYROLL_DATA.period}
        </Text>
        <View className="ml-2">
          <ChevronDown size={16} color="#64748B" />
        </View>
      </Pressable>
      <Pressable
        onPress={onToggleAmounts}
        accessibilityRole="button"
        accessibilityLabel={showAmounts ? 'Ẩn số tiền' : 'Hiện số tiền'}
        className="h-11 w-11 items-center justify-center rounded-full bg-white"
      >
        {showAmounts ? <Eye size={20} color="#475569" /> : <EyeOff size={20} color="#475569" />}
      </Pressable>
    </View>
  </>
);

export default PayrollHeader;
