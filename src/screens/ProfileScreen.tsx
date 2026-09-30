import { useState } from 'react';
import { ScrollView } from 'react-native';
import Screen from '../components/common/Screen';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileIdentityCard from '../components/profile/ProfileIdentityCard';
import ProfileStats from '../components/profile/ProfileStats';
import ProfileSection from '../components/profile/ProfileSection';
import ProfileLogout from '../components/profile/ProfileLogout';
import { PROFILE_SECTIONS } from '../constants/profileData';

const ProfileScreen = () => {
  const [biometricEnabled, setBiometricEnabled] = useState(true);

  return (
    <Screen>
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-4 px-4 pb-6"
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader />
        <ProfileIdentityCard />
        <ProfileStats />
        {PROFILE_SECTIONS.map(section => (
          <ProfileSection
            key={section.title}
            section={section}
            biometricEnabled={biometricEnabled}
            onBiometricChange={setBiometricEnabled}
          />
        ))}
        <ProfileLogout />
      </ScrollView>
    </Screen>
  );
};

export default ProfileScreen;
