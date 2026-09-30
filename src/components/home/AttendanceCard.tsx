import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { HOME_ATTENDANCE } from '../../constants/homeData';
import { MapPin } from 'lucide-react-native';
const AttendanceCard = () => {
  const { date, time, status, location } = HOME_ATTENDANCE;
  return (
    <View className="rounded-2xl bg-[#EAF3FF] p-4">
      <Text className="text-sm text-slate-700">{date}</Text>
      <Text className="mt-1 text-3xl font-bold text-[#0B3B91]">{time}</Text>

      <View className="mt-2 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className="mr-2 h-5 w-5 items-center justify-center">
            <View className="h-3 w-3 rounded-full bg-emerald-400" />
          </View>
          <View>
            <Text className="text-sm text-slate-700">{status.label}</Text>
            <Text className="text-sm text-slate-500">{status.time}</Text>
          </View>
        </View>
        <Pressable className="rounded-xl bg-[#2563EB] px-5 py-3">
          <Text className="font-semibold text-white">Chấm công ra</Text>
        </Pressable>
      </View>

      <View className="mt-2 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className="mr-2 h-5 w-5 items-center justify-center">
            <MapPin size={20} color="#0F172A" />
          </View>
          <View>
            <Text className="text-sm font-medium text-slate-700">
              {location.name}
            </Text>
            <Text className="mt-1 text-xs text-slate-500">
              {location.address}
            </Text>
          </View>
        </View>

        <View>
          <Text className="text-sm font-medium text-[#2563EB]">
            Xem lịch làm việc
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AttendanceCard;
