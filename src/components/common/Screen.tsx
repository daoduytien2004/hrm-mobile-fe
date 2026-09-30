
import {SafeAreaView } from 'react-native-safe-area-context';

interface ScreenProps {
  children: React.ReactNode;
}
const Screen = ({ children }: ScreenProps) => {
  return (
    <SafeAreaView className="flex-1 bg-[#F5F8FC]">
      {children}
    </SafeAreaView>
  );
};

export default Screen;