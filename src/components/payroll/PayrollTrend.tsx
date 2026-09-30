import { Text, View } from 'react-native';
import { TrendingUp } from 'lucide-react-native';
import { PAYROLL_DATA } from '../../constants/payrollData';

interface PayrollTrendProps {
  showAmounts: boolean;
}

const PayrollTrend = ({ showAmounts }: PayrollTrendProps) => {
  const { trend } = PAYROLL_DATA;
  const maxValue = Math.max(...trend.map(item => item.value));

  return (
    <View className="rounded-2xl bg-white p-4">
      <View className="flex-row items-start justify-between">
        <View className="flex-1 flex-row items-start">
          <TrendingUp size={19} color="#1D4ED8" />
          <Text className="ml-2 flex-1 text-sm font-semibold text-slate-900">
            Xu hướng thu nhập (6 tháng)
          </Text>
        </View>
        <Text className="ml-2 text-xs font-medium text-emerald-700">
          +8.5% so với T3
        </Text>
      </View>

      <View className="mt-4 h-32 flex-row items-end justify-between">
        {trend.map((item, index) => {
          const isCurrent = index === trend.length - 1;
          const height = (item.value / maxValue) * 88;

          return (
            <View key={item.month} className="flex-1 items-center">
              <Text className={`mb-1 text-[10px] ${isCurrent ? 'font-semibold text-blue-700' : 'text-slate-700'}`}>
                {showAmounts ? `${item.value.toFixed(1)}M` : '•••'}
              </Text>
              <View
                className={`w-7 rounded-t-lg ${isCurrent ? 'bg-blue-700' : 'bg-indigo-100'}`}
                style={{ height }}
              />
              <Text className={`mt-1 text-[10px] ${isCurrent ? 'font-semibold text-blue-700' : 'text-slate-600'}`}>
                {item.month}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PayrollTrend;
