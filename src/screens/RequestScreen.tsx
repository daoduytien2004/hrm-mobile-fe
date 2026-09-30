import { useMemo, useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  Bell,
  CalendarDays,
  ChevronRight,
  CircleCheck,
  Clock3,
  Moon,
  Plus,
  Search,
  Send,
  SlidersHorizontal,
  UserRound,
} from 'lucide-react-native';
import Screen from '../components/common/Screen';
import {
  QUICK_REQUEST_TYPES,
  REQUEST_QUOTA,
  REQUESTS,
} from '../constants/requestData';

const FILTERS = [
  { id: 'all', label: 'Tất cả' },
  { id: 'pending', label: 'Chờ duyệt' },
  { id: 'approved', label: 'Đã duyệt' },
  { id: 'rejected', label: 'Từ chối' },
] as const;

type RequestFilter = (typeof FILTERS)[number]['id'];
type RequestStatus = (typeof REQUESTS)[number]['status'];

const STATUS_STYLE: Record<RequestStatus, { label: string; color: string; background: string }> = {
  approved: { label: 'Đã phê duyệt', color: '#047857', background: '#D1FAE5' },
  pending: { label: 'Chờ phê duyệt', color: '#A16207', background: '#FEF3C7' },
  rejected: { label: 'Từ chối', color: '#B91C1C', background: '#FEE2E2' },
  complete: { label: 'Hoàn tất', color: '#1D4ED8', background: '#DBEAFE' },
};

const RequestScreen = () => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<RequestFilter>('all');

  const counts: Record<RequestFilter, number> = {
    all: REQUESTS.length,
    pending: REQUESTS.filter(request => request.status === 'pending').length,
    approved: REQUESTS.filter(
      request => request.status === 'approved' || request.status === 'complete',
    ).length,
    rejected: REQUESTS.filter(request => request.status === 'rejected').length,
  };

  const visibleRequests = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return REQUESTS.filter(request => {
      const matchesFilter =
        activeFilter === 'all' ||
        request.status === activeFilter ||
        (activeFilter === 'approved' && request.status === 'complete');
      const searchableText = [
        request.id,
        request.title,
        request.subtitle,
        ...request.details,
      ]
        .join(' ')
        .toLowerCase();

      return matchesFilter && searchableText.includes(normalizedQuery);
    });
  }, [activeFilter, query]);

  const showCreateMessage = (label: string) =>
    Alert.alert('Tạo đơn mới', `Bạn đã chọn: ${label}`);

  return (
    <Screen>
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-4 px-4 pb-6"
        showsVerticalScrollIndicator={false}
      >
        {/* Page heading */}
        <View className="flex-row items-center justify-between pt-4">
          <Text className="text-2xl font-bold text-slate-900">Yêu Cầu</Text>
          <View className="flex-row items-center gap-5">
            <Bell size={21} color="#0F172A" />
            <Moon size={21} color="#0F172A" />
          </View>
        </View>

        {/* Search and create button */}
        <View className="flex-row items-center gap-2">
          <View className="h-12 flex-1 flex-row items-center rounded-2xl bg-white px-3">
            <Search size={18} color="#64748B" />
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Tìm kiếm loại đơn, mã đơn, người duyệt..."
              placeholderTextColor="#94A3B8"
              className="ml-2 flex-1 text-sm text-slate-900"
              returnKeyType="search"
            />
            <SlidersHorizontal size={18} color="#64748B" />
          </View>
          <Pressable
            onPress={() => showCreateMessage('Chọn một loại đơn')}
            accessibilityRole="button"
            accessibilityLabel="Tạo đơn mới"
            className="h-12 w-12 items-center justify-center rounded-2xl bg-blue-700"
          >
            <Plus size={24} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* Annual leave quota */}
        <View className="rounded-2xl bg-white p-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="h-9 w-9 items-center justify-center rounded-xl bg-blue-100">
                <CalendarDays size={19} color="#2563EB" />
              </View>
              <Text className="ml-2 text-base font-semibold text-slate-900">
                Quỹ phép năm {REQUEST_QUOTA.year}
              </Text>
            </View>
            <Pressable
              onPress={() => Alert.alert('Quy chế phép', 'Thông tin quy chế phép năm.')}
              className="flex-row items-center"
            >
              <Text className="text-xs font-medium text-blue-700">Quy chế phép</Text>
              <ChevronRight size={16} color="#2563EB" />
            </Pressable>
          </View>

          <View className="mt-4 flex-row gap-2">
            <QuotaValue title="Tổng phép" value={REQUEST_QUOTA.total} />
            <QuotaValue title="Đã dùng" value={REQUEST_QUOTA.used} tone="amber" />
            <QuotaValue title="Còn lại" value={REQUEST_QUOTA.remaining} tone="green" />
          </View>

          <View className="mt-4 h-2 overflow-hidden rounded-full bg-indigo-100">
            <View
              className="h-full rounded-full bg-emerald-700"
              style={{ width: `${(REQUEST_QUOTA.remaining / REQUEST_QUOTA.total) * 100}%` }}
            />
          </View>
          <View className="mt-2 flex-row items-center justify-between">
            <Text className="text-xs text-slate-500">
              Hạn dùng đến {REQUEST_QUOTA.validUntil}
            </Text>
            <Text className="text-xs font-medium text-emerald-700">
              Còn {Math.round((REQUEST_QUOTA.remaining / REQUEST_QUOTA.total) * 100)}% quỹ phép
            </Text>
          </View>
        </View>

        {/* Quick request types */}
        <View>
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-lg font-semibold text-slate-900">Tạo đơn nhanh</Text>
            <Text className="text-xs text-slate-500">Chạm để gửi đơn</Text>
          </View>
          <View className="flex-row gap-2">
            {QUICK_REQUEST_TYPES.map(({ id, label, Icon, color, background }) => (
              <Pressable
                key={id}
                onPress={() => showCreateMessage(label)}
                accessibilityRole="button"
                className="min-h-24 flex-1 items-center justify-center rounded-2xl bg-white px-1 py-3"
              >
                <View
                  className="mb-2 h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: background }}
                >
                  <Icon size={21} color={color} />
                </View>
                <Text className="text-center text-xs font-medium text-slate-900">
                  {label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Status filters; no “my requests / approvals” tab row */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-2">
            {FILTERS.map(filter => {
              const selected = activeFilter === filter.id;

              return (
                <Pressable
                  key={filter.id}
                  onPress={() => setActiveFilter(filter.id)}
                  className={`flex-row items-center rounded-full px-4 py-2 ${selected ? 'bg-blue-700' : 'bg-white'}`}
                >
                  <Text className={`text-xs font-medium ${selected ? 'text-white' : 'text-slate-700'}`}>
                    {filter.label} ({counts[filter.id]})
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>

        {/* Request cards */}
        <View className="gap-3">
          {visibleRequests.map(request => {
            const requestType = QUICK_REQUEST_TYPES.find(type => type.id === request.type);
            const Icon = requestType?.Icon ?? CalendarDays;
            const iconColor = requestType?.color ?? '#2563EB';
            const iconBackground = requestType?.background ?? '#DBEAFE';
            const statusStyle = STATUS_STYLE[request.status];

            return (
              <View key={request.id} className="rounded-2xl bg-white p-3.5">
                <View className="flex-row items-start">
                  <View
                    className="mr-3 h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: iconBackground }}
                  >
                    <Icon size={21} color={iconColor} />
                  </View>

                  <View className="flex-1">
                    <View className="flex-row items-start justify-between gap-2">
                      <View className="flex-1">
                        <Text className="text-base font-semibold text-slate-900">
                          {request.title}
                        </Text>
                        <Text className="mt-0.5 text-xs text-slate-500">
                          {request.subtitle}
                        </Text>
                      </View>
                      <View
                        className="rounded-full px-2 py-1"
                        style={{ backgroundColor: statusStyle.background }}
                      >
                        <Text className="text-[10px] font-semibold" style={{ color: statusStyle.color }}>
                          {statusStyle.label}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View className="mt-3 gap-1 rounded-xl bg-indigo-50 p-3">
                  {request.details.map((detail, index) => {
                    const DetailIcon = index === 0 ? CalendarDays : UserRound;
                    return (
                      <View key={detail} className="flex-row items-start">
                        <DetailIcon size={15} color="#64748B" />
                        <Text className="ml-2 flex-1 text-xs leading-5 text-slate-700">
                          {detail}
                        </Text>
                      </View>
                    );
                  })}
                </View>

                <View className="mt-3 flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Send size={14} color="#94A3B8" />
                    <Text className="ml-1.5 text-xs text-slate-500">{request.sentAt}</Text>
                  </View>
                  <Pressable
                    onPress={() => Alert.alert(request.title, request.details.join('\n'))}
                    className="flex-row items-center"
                  >
                    <Text className="text-xs font-medium text-blue-700">Chi tiết</Text>
                    <ChevronRight size={15} color="#2563EB" />
                  </Pressable>
                </View>
              </View>
            );
          })}

          {visibleRequests.length === 0 ? (
            <View className="items-center rounded-2xl bg-white px-4 py-8">
              <Clock3 size={24} color="#94A3B8" />
              <Text className="mt-2 text-sm text-slate-500">Không tìm thấy đơn phù hợp</Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </Screen>
  );
};

interface QuotaValueProps {
  title: string;
  value: number;
  tone?: 'amber' | 'green';
}

const QuotaValue = ({ title, value, tone }: QuotaValueProps) => {
  const valueColor = tone === 'amber' ? '#A16207' : tone === 'green' ? '#047857' : '#0F172A';
  const backgroundColor = tone === 'green' ? '#D1FAE5' : '#F1F0FF';

  return (
    <View className="min-h-20 flex-1 items-center justify-center rounded-xl px-1 py-2" style={{ backgroundColor }}>
      <Text className="text-xs text-slate-700">{title}</Text>
      <Text className="text-xl font-semibold" style={{ color: valueColor }}>
        {value.toFixed(1)}
      </Text>
      <Text className="text-xs text-slate-500">ngày</Text>
    </View>
  );
};

export default RequestScreen;
