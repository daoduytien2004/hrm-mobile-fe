import { ScrollView } from 'react-native';
import HomeHeader from '../components/home/HomeHeader';
import Screen from '../components/common/Screen';
import AttendanceCard from '../components/home/AttendanceCard';
import MonthlyAttendance from '../components/home/MonthlyAttendance';
import QuickServices from '../components/home/QuickServices';
import NotificationSection from '../components/home/NotificationSection';

const HomeScreen = () => {
  return (
    <Screen>
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-4 pb-6 gap-4"
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <AttendanceCard />
        <MonthlyAttendance />
        <QuickServices />
        <NotificationSection />
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;
