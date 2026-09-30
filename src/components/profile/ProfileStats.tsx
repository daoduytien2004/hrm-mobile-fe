import { Text, View } from 'react-native';
import { PROFILE_SUMMARY } from '../../constants/profileData';

const STATS = [
  {
    title: 'Thâm niên',
    value: PROFILE_SUMMARY.tenure,
    note: PROFILE_SUMMARY.tenureNote,
    noteColor: '#047857',
  },
  {
    title: 'Loại hợp đồng',
    value: PROFILE_SUMMARY.contract,
    note: PROFILE_SUMMARY.contractNote,
  },
  {
    title: 'KPI Quý III',
    value: `${PROFILE_SUMMARY.kpi}/${PROFILE_SUMMARY.kpiTotal}`,
    note: PROFILE_SUMMARY.kpiNote,
    valueColor: '#1D4ED8',
    noteColor: '#A16207',
  },
];

const ProfileStats = () => (
  <View className="flex-row rounded-2xl bg-white px-2 py-4">
    {STATS.map((stat, index) => (
      <View
        key={stat.title}
        className={`flex-1 items-center px-1 ${index < STATS.length - 1 ? 'border-r border-slate-100' : ''}`}
      >
        <Text className="text-center text-xs text-slate-500">{stat.title}</Text>
        <Text
          className="mt-1 text-center text-sm font-semibold"
          style={{ color: stat.valueColor ?? '#0F172A' }}
        >
          {stat.value}
        </Text>
        <Text
          className="mt-0.5 text-center text-[10px]"
          style={{ color: stat.noteColor ?? '#64748B' }}
        >
          {stat.note}
        </Text>
      </View>
    ))}
  </View>
);

export default ProfileStats;
