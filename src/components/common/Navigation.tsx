import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  House,
  CalendarDays,
  ClipboardList,
  WalletCards,
  UserRound,
} from 'lucide-react-native';
const TABS = [
  { id: 'home', label: 'Trang chủ', Icon: House },
  { id: 'attendance', label: 'Công', Icon: CalendarDays },
  { id: 'requests', label: 'Yêu cầu', Icon: ClipboardList },
  { id: 'payroll', label: 'Lương', Icon: WalletCards },
  { id: 'profile', label: 'Cá nhân', Icon: UserRound },
] as const;
type TabId = (typeof TABS)[number]['id'];
interface NavigationProps {
  activeTab: TabId;
  onTabPress: (tab: TabId) => void;
}
const Navigation = ({ activeTab, onTabPress }: NavigationProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-row border-t border-slate-100 bg-white pt-2"
      style={{ paddingBottom: insets.bottom + 8 }}
    >
      {TABS.map(({ id, label, Icon }) => {
        const selected = activeTab === id;
        const color = selected ? '#2563EB' : '#94A3B8';

        return (
          <Pressable
            key={id}
            onPress={() => onTabPress(id)}
            className="flex-1 items-center gap-1"
          >
            <Icon size={20} color={color} />
            <Text style={{ color }} className="text-xs">
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
export default Navigation;
