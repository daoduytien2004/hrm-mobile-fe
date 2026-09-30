import { Text, View } from 'react-native';
import { MegaphoneIcon } from 'lucide-react-native';

import { NOTIFICATIONS } from '../../constants/homeData';

const NotificationSection = () => {
  return (
    <View>
      {/* Header */}
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="text-base font-bold text-slate-900">Thông báo</Text>

        <Text className="text-sm font-medium text-blue-600">Xem tất cả</Text>
      </View>

      {/* Notifications */}
      <View className="overflow-hidden rounded-2xl bg-white">
        {NOTIFICATIONS.map((notification, index) => (
          <View
            key={notification.id}
            className={`p-4 ${
              index !== NOTIFICATIONS.length - 1
                ? 'border-b border-slate-100'
                : ''
            }`}
          >
            <View className="flex-row">
              {/* Notification icon */}
              <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                <MegaphoneIcon size={20} color="#2563EB" />
              </View>

              {/* Content */}
              <View className="flex-1">
                <Text className="font-semibold text-slate-900">
                  {notification.title}
                </Text>

                <Text className="mt-1 text-sm text-slate-500">
                  {notification.message}
                </Text>

                <Text className="mt-2 text-xs text-slate-400">
                  {notification.time}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default NotificationSection;
