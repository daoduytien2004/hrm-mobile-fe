import { Pressable, Text, View } from 'react-native';
import { ATTENDANCE_ACTIONS } from '../../constants/attendanceData';

interface AttendanceActionsProps {
  onExplainPress?: () => void;
  onCheckInPress?: () => void;
}

const AttendanceActions = ({
  onExplainPress,
  onCheckInPress,
}: AttendanceActionsProps) => {
  const ExplainIcon = ATTENDANCE_ACTIONS.explain.Icon;
  const CheckInIcon = ATTENDANCE_ACTIONS.checkIn.Icon;

  return (
    <View className="flex-row gap-3">
      <Pressable
        onPress={onExplainPress}
        accessibilityRole="button"
        className="h-14 flex-1 flex-row items-center justify-center rounded-2xl bg-white"
      >
        <ExplainIcon size={20} color="#2563EB" />
        <Text className="ml-2 text-sm font-semibold text-blue-700">
          {ATTENDANCE_ACTIONS.explain.label}
        </Text>
      </Pressable>

      <Pressable
        onPress={onCheckInPress}
        accessibilityRole="button"
        className="h-14 flex-1 flex-row items-center justify-center rounded-2xl bg-blue-700"
      >
        <CheckInIcon size={20} color="#FFFFFF" />
        <Text className="ml-2 text-sm font-semibold text-white">
          {ATTENDANCE_ACTIONS.checkIn.label}
        </Text>
      </Pressable>
    </View>
  );
};

export default AttendanceActions;
