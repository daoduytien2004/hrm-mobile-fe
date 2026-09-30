import { Pressable, Text, View } from 'react-native';
import { CalendarDays, ChevronLeft, ChevronRight, LayoutGrid, List, SlidersHorizontal } from 'lucide-react-native';

interface MonthSelectorProps {
  month: Date;
  onMonthChange: (month: Date) => void;
}

const MonthSelector = ({ month, onMonthChange }: MonthSelectorProps) => {
  const changeMonth = (amount: number) => {
    onMonthChange(new Date(month.getFullYear(), month.getMonth() + amount, 1));
  };

  const monthLabel = `Tháng ${String(month.getMonth() + 1).padStart(2, '0')}/${month.getFullYear()}`;

  return (
    <View className="flex-row items-center justify-between gap-2">
      <View className="h-12 flex-1 flex-row items-center justify-between rounded-full bg-white px-3">
        <Pressable
          accessibilityLabel="Tháng trước"
          onPress={() => changeMonth(-1)}
          className="h-9 w-8 items-center justify-center"
        >
          <ChevronLeft size={20} color="#64748B" />
        </Pressable>

        <View className="flex-row items-center gap-2">
          <CalendarDays size={18} color="#2563EB" />
          <Text className="text-sm font-semibold text-slate-900">{monthLabel}</Text>
        </View>

        <Pressable
          accessibilityLabel="Tháng sau"
          onPress={() => changeMonth(1)}
          className="h-9 w-8 items-center justify-center"
        >
          <ChevronRight size={20} color="#64748B" />
        </Pressable>
      </View>

      <View className="h-12 flex-row items-center rounded-2xl bg-white p-1">
        <View className="h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
          <LayoutGrid size={19} color="#2563EB" />
        </View>
        <View className="h-10 w-10 items-center justify-center rounded-xl">
          <List size={19} color="#64748B" />
        </View>
      </View>

      <View className="h-12 w-12 items-center justify-center rounded-2xl bg-white">
        <SlidersHorizontal size={19} color="#64748B" />
      </View>
    </View>
  );
};

export default MonthSelector;
