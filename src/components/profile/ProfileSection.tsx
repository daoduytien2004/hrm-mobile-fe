import { Alert, Pressable, Switch, Text, View } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { PROFILE_SECTIONS } from '../../constants/profileData';

type ProfileSectionData = (typeof PROFILE_SECTIONS)[number];

interface ProfileSectionProps {
  section: ProfileSectionData;
  biometricEnabled: boolean;
  onBiometricChange: (enabled: boolean) => void;
}

const ProfileSection = ({
  section,
  biometricEnabled,
  onBiometricChange,
}: ProfileSectionProps) => (
  <View>
    <View className="mb-2 flex-row items-center justify-between px-1">
      <Text className="text-base font-semibold text-slate-900">{section.title}</Text>
      {section.verified ? (
        <View className="flex-row items-center">
          <View className="mr-1.5 h-2 w-2 rounded-full bg-emerald-600" />
          <Text className="text-xs font-medium text-emerald-700">Đã xác thực</Text>
        </View>
      ) : null}
    </View>

    <View className="rounded-2xl bg-white px-3">
      {section.items.map((item, index) => {
        const Icon = item.Icon;
        const isBiometric = item.id === 'biometric';

        return (
          <View
            key={item.id}
            className={`flex-row items-center py-3 ${index < section.items.length - 1 ? 'border-b border-slate-100' : ''}`}
          >
            <View
              className="mr-3 h-12 w-12 items-center justify-center rounded-2xl"
              style={{ backgroundColor: item.background }}
            >
              <Icon size={21} color={item.color} />
            </View>

            <Pressable
              disabled={isBiometric}
              onPress={() => Alert.alert(item.title, item.subtitle)}
              className="flex-1"
            >
              <Text className="text-sm font-medium text-slate-900">{item.title}</Text>
              <Text className="mt-0.5 text-xs text-slate-500">{item.subtitle}</Text>
            </Pressable>

            {isBiometric ? (
              <Switch
                value={biometricEnabled}
                onValueChange={onBiometricChange}
                trackColor={{ false: '#CBD5E1', true: '#047857' }}
                thumbColor="#FFFFFF"
              />
            ) : (
              <ChevronRight size={20} color="#CBD5E1" />
            )}
          </View>
        );
      })}
    </View>
  </View>
);

export default ProfileSection;
