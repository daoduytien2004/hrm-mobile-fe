import { Text, View } from 'react-native';
import { Shield } from 'lucide-react-native';
import { PAYROLL_DATA } from '../../constants/payrollData';

const PayrollPrivacyNotice = () => (
  <View className="flex-row items-start rounded-2xl bg-indigo-50 p-3">
    <Shield size={17} color="#64748B" />
    <Text className="ml-2 flex-1 text-xs leading-5 text-slate-600">
      {PAYROLL_DATA.privacyNotice}
    </Text>
  </View>
);

export default PayrollPrivacyNotice;
