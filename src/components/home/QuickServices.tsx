import { Text, View } from 'react-native';

import { QUICK_SERVICES } from '../../constants/homeData';

const serviceColors: Record<string, { background: string; foreground: string }> = {
  attendance: { background: '#3B82F6', foreground: '#FFFFFF' },
  payroll: { background: '#F59E0B', foreground: '#FFFFFF' },
  request: { background: '#10B981', foreground: '#FFFFFF' },
  'my-requests': { background: '#6366F1', foreground: '#FFFFFF' },
  schedule: { background: '#F43F5E', foreground: '#FFFFFF' },
  approval: { background: '#14B8A6', foreground: '#FFFFFF' },
};

const QuickServices = () => {
  return (
    <View>
      <Text className="mb-3 text-base font-bold text-slate-900">
        Dịch vụ nhanh
      </Text>

      <View className="flex-row flex-wrap gap-3">
        {QUICK_SERVICES.map(service => {
          const Icon = service.icon;
          const colors = serviceColors[service.id];
          return (
            <View
              key={service.id}
              className="min-h-28 w-[31%] rounded-2xl bg-white p-3 items-center"
            >
              <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: colors.background }}>
                <Icon size={20} color={colors.foreground} />
              </View>

              <Text className="text-sm font-semibold text-slate-900">
                {service.title}
              </Text>

              <Text className="mt-1 text-xs text-slate-500 text-center">
                {service.description}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default QuickServices;
