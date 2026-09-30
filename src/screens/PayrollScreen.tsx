import { useState } from 'react';
import { ScrollView } from 'react-native';
import Screen from '../components/common/Screen';
import PayrollHeader from '../components/payroll/PayrollHeader';
import NetPayCard from '../components/payroll/NetPayCard';
import PayrollSummaryTiles from '../components/payroll/PayrollSummaryTiles';
import PayrollBreakdown from '../components/payroll/PayrollBreakdown';
import PayrollTrend from '../components/payroll/PayrollTrend';
import PayrollPrivacyNotice from '../components/payroll/PayrollPrivacyNotice';
import { PAYROLL_DATA } from '../constants/payrollData';

const PayrollScreen = () => {
  const [showAmounts, setShowAmounts] = useState(true);
  const displayAmount = (amount: string) =>
    showAmounts ? amount : '••••••••';

  return (
    <Screen>
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-4 px-4 pb-6"
        showsVerticalScrollIndicator={false}
      >
        <PayrollHeader
          showAmounts={showAmounts}
          onToggleAmounts={() => setShowAmounts(value => !value)}
        />
        <NetPayCard showAmounts={showAmounts} />
        <PayrollSummaryTiles showAmounts={showAmounts} />
        <PayrollBreakdown
          title="Thu nhập chi tiết"
          total={displayAmount(PAYROLL_DATA.grossIncome)}
          color="#1D4ED8"
          items={PAYROLL_DATA.incomeItems}
          showAmounts={showAmounts}
        />
        <PayrollBreakdown
          title="Các khoản giảm trừ"
          total={displayAmount(PAYROLL_DATA.deductions)}
          color="#B91C1C"
          items={PAYROLL_DATA.deductionItems}
          showAmounts={showAmounts}
        />
        <PayrollTrend showAmounts={showAmounts} />
        <PayrollPrivacyNotice />
      </ScrollView>
    </Screen>
  );
};

export default PayrollScreen;
