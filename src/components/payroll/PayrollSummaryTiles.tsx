import type { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { CalendarCheck, Shield } from 'lucide-react-native';
import { PAYROLL_DATA } from '../../constants/payrollData';

interface PayrollSummaryTilesProps {
  showAmounts: boolean;
}

const PayrollSummaryTiles = ({ showAmounts }: PayrollSummaryTilesProps) => (
  <View className="flex-row gap-2">
    <SummaryTile
      icon={<View className="h-8 w-8 items-center justify-center rounded-lg bg-orange-100"><Text className="font-bold text-orange-700">₫</Text></View>}
      title="Tổng thu nhập"
      value={showAmounts ? PAYROLL_DATA.grossIncome : '••••••••'}
    />
    <SummaryTile
      icon={<View className="h-8 w-8 items-center justify-center rounded-lg bg-rose-100"><Shield size={17} color="#DC2626" /></View>}
      title="Giảm trừ"
      value={showAmounts ? PAYROLL_DATA.deductions : '••••••••'}
      valueColor="#B91C1C"
    />
    <SummaryTile
      icon={<View className="h-8 w-8 items-center justify-center rounded-lg bg-emerald-100"><CalendarCheck size={17} color="#059669" /></View>}
      title="Công tính lương"
      value={PAYROLL_DATA.workDays}
      suffix=" công"
      valueColor="#047857"
    />
  </View>
);

interface SummaryTileProps {
  icon: ReactNode;
  title: string;
  value: string;
  suffix?: string;
  valueColor?: string;
}

const SummaryTile = ({ icon, title, value, suffix, valueColor = '#0F172A' }: SummaryTileProps) => (
  <View className="min-h-28 flex-1 justify-between rounded-2xl bg-white p-3">
    {icon}
    <Text numberOfLines={2} className="mt-2 text-xs text-slate-500">{title}</Text>
    <Text numberOfLines={1} className="mt-1 text-sm font-semibold" style={{ color: valueColor }}>
      {value}{suffix ?? ''}
    </Text>
  </View>
);

export default PayrollSummaryTiles;
