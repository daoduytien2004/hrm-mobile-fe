// @ts-expect-error NativeWind loads this stylesheet at runtime.
import './global.css';
import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './src/screens/HomeScreen';
import Navigation from './src/components/common/Navigation';
import AttendanceScreen from './src/screens/AttendanceScreen';
import RequestScreen from './src/screens/RequestScreen';
import PayrollScreen from './src/screens/PayrollScreen';
import ProfileScreen from './src/screens/ProfileScreen';

type TabId = 'home' | 'attendance' | 'requests' | 'payroll' | 'profile';

function AppContent() {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'attendance':
        return <AttendanceScreen />;
      case 'requests':
        return <RequestScreen />;
      case 'payroll':
        return <PayrollScreen />;
      case 'profile':
        return <ProfileScreen />;
    }
  };

  return (
    <View className="flex-1">
      <View className="flex-1">{renderScreen()}</View>
      <Navigation activeTab={activeTab} onTabPress={setActiveTab} />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}
