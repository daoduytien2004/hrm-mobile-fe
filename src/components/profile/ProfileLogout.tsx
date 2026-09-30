import { Alert, Pressable, Text } from 'react-native';
import { LogOut } from 'lucide-react-native';

const ProfileLogout = () => (
  <>
    <Pressable
      onPress={() => Alert.alert('Đăng xuất', 'Bạn đã nhấn đăng xuất.')}
      className="h-14 flex-row items-center justify-center rounded-2xl bg-rose-100"
    >
      <LogOut size={19} color="#B91C1C" />
      <Text className="ml-2 text-sm font-semibold text-red-700">
        Đăng xuất tài khoản
      </Text>
    </Pressable>
    <Text className="mb-2 text-center text-xs text-slate-400">
      HRM Mobile • Phiên bản 2.5.0 (Build 418)
    </Text>
  </>
);

export default ProfileLogout;
