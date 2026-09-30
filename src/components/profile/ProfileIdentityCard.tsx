import { Image, Text, View } from 'react-native';
import { Building2, ShieldCheck } from 'lucide-react-native';
import { HOME_USER } from '../../constants/homeData';
import { PROFILE_SUMMARY } from '../../constants/profileData';

const ProfileIdentityCard = () => (
  <View className="rounded-2xl bg-white p-4">
    <View className="flex-row items-center">
      <View className="mr-4 h-24 w-24 overflow-hidden rounded-full bg-slate-100">
        <Image
          source={HOME_USER.avatar}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View className="flex-1">
        <Text className="text-xl font-bold text-slate-900">{HOME_USER.name}</Text>
        <Text className="mt-1 text-sm text-slate-600">{PROFILE_SUMMARY.role}</Text>
        <Text className="mt-1 text-xs text-slate-400">
          Mã nhân viên: {PROFILE_SUMMARY.employeeId}
        </Text>
      </View>
    </View>

    <View className="mt-4 flex-row items-center rounded-xl bg-indigo-50 p-3">
      <View className="h-9 w-9 items-center justify-center rounded-full bg-white">
        <Building2 size={18} color="#2563EB" />
      </View>
      <View className="ml-2 flex-1">
        <Text className="text-sm font-medium text-slate-900">
          {PROFILE_SUMMARY.office}
        </Text>
        <Text className="text-xs text-slate-500">
          {PROFILE_SUMMARY.address}
        </Text>
      </View>
      <ShieldCheck size={18} color="#94A3B8" />
    </View>
  </View>
);

export default ProfileIdentityCard;
