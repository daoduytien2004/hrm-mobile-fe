import { Text, View, Pressable, Image } from 'react-native';
import { HOME_USER } from '../../constants/homeData';
import { Bell, QrCode } from 'lucide-react-native';
const HomeHeader = () => {
  return (
    <View className="flex-row items-center justify-between py-4 pl-4">
      {/* User */}
      <View className="flex-row items-center">
        {/* Avatar */}
        <View className="mr-3 h-12 w-12 items-center justify-center rounded-full bg-slate-200">
          <Image
            source={HOME_USER.avatar}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
            }}
          />
        </View>

        {/* User information */}
        <View>
          <Text className="text-xs text-slate-500">{HOME_USER.greeting}</Text>

          <Text className="text-lg font-bold text-slate-900">
            {HOME_USER.name}
          </Text>

          <Text className="text-xs text-slate-400">{HOME_USER.message}</Text>
        </View>
      </View>

      {/* Actions */}
      <View className="flex-row gap-2">
        <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-white">
          <Bell size={20} color="#0F172A" />
        </Pressable>

        <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-white">
          <QrCode size={20} color="#0F172A" />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeHeader;
