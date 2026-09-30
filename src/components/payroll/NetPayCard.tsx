import { Alert, Pressable, Text, View } from 'react-native';
import { BadgeCheck, Download, MessageSquare } from 'lucide-react-native';
import { PAYROLL_DATA } from '../../constants/payrollData';

interface NetPayCardProps {
  showAmounts: boolean;
}

const NetPayCard = ({ showAmounts }: NetPayCardProps) => (
  <View className="overflow-hidden rounded-3xl bg-blue-700 p-4">
    <View className="flex-row items-start justify-between">
      <View className="flex-row items-center">
        <BadgeCheck size={18} color="#6EE7B7" />
        <Text className="ml-2 text-xs font-semibold uppercase text-blue-100">
          Thực nhận tháng{'\n'}{PAYROLL_DATA.period}
        </Text>
      </View>
      <View className="rounded-full bg-emerald-300 px-2.5 py-1">
        <Text className="text-[10px] font-semibold text-emerald-900">
          ● {PAYROLL_DATA.paymentStatus}
        </Text>
      </View>
    </View>

    <Text className="mt-2 text-3xl font-bold text-white">
      {showAmounts ? PAYROLL_DATA.netPay : '••••••••'}
    </Text>

    <View className="mt-3 flex-row items-center rounded-xl bg-white/15 p-2.5">
      <BadgeCheck size={16} color="#A7F3D0" />
      <Text className="ml-2 flex-1 text-xs text-blue-50">
        {PAYROLL_DATA.paymentNote}
      </Text>
    </View>

    <View className="mt-4 flex-row gap-2">
      <Pressable
        onPress={() => Alert.alert('Tải phiếu lương', 'Chức năng tải PDF sẽ được bổ sung sau.')}
        className="h-11 flex-1 flex-row items-center justify-center rounded-xl bg-white/20"
      >
        <Download size={17} color="#FFFFFF" />
        <Text className="ml-2 text-xs font-semibold text-white">Tải file PDF</Text>
      </Pressable>
      <Pressable
        onPress={() => Alert.alert('Phản hồi lương', 'Mở biểu mẫu phản hồi phiếu lương.')}
        className="h-11 flex-1 flex-row items-center justify-center rounded-xl bg-white"
      >
        <MessageSquare size={17} color="#1D4ED8" />
        <Text className="ml-2 text-xs font-semibold text-blue-800">Phản hồi lương</Text>
      </Pressable>
    </View>
  </View>
);

export default NetPayCard;
