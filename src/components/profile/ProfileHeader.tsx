import { Text, View } from 'react-native';
import { Bell, Moon } from 'lucide-react-native';

const ProfileHeader = () => (
  <View className="flex-row items-center justify-between pt-4">
    <Text className="text-2xl font-bold text-slate-900">Cá Nhân</Text>
    <View className="flex-row items-center gap-5">
      <Bell size={21} color="#0F172A" />
      <Moon size={21} color="#0F172A" />
    </View>
  </View>
);

export default ProfileHeader;
