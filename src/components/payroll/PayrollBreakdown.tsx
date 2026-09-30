import { Text, View } from 'react-native';

export interface PayrollItem {
  title: string;
  note: string;
  amount: string;
}

interface PayrollBreakdownProps {
  title: string;
  total: string;
  color: string;
  items: readonly PayrollItem[];
  showAmounts: boolean;
}

const PayrollBreakdown = ({
  title,
  total,
  color,
  items,
  showAmounts,
}: PayrollBreakdownProps) => (
  <View className="rounded-2xl bg-white p-4">
    <View className="mb-3 flex-row items-center justify-between">
      <View className="flex-row items-center">
        <View className="h-4 w-1.5 rounded-full" style={{ backgroundColor: color }} />
        <Text className="ml-2 text-sm font-semibold text-slate-900">{title}</Text>
      </View>
      <Text className="text-sm font-semibold" style={{ color }}>{total}</Text>
    </View>

    {items.map((item, index) => (
      <View
        key={item.title}
        className={`flex-row items-center py-2 ${index < items.length - 1 ? 'border-b border-slate-50' : ''}`}
      >
        <View className="flex-1 pr-2">
          <Text className="text-xs text-slate-700">{item.title}</Text>
          <Text className="mt-0.5 text-[10px] text-slate-500">{item.note}</Text>
        </View>
        <Text className="text-right text-sm font-medium text-slate-900">
          {showAmounts ? item.amount : '••••••••'}
        </Text>
      </View>
    ))}
  </View>
);

export default PayrollBreakdown;
