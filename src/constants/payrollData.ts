export const PAYROLL_DATA = {
  period: '08/2025',
  netPay: '24.680.000 đ',
  paymentStatus: 'Đã chi trả',
  paymentNote: 'Đã chuyển khoản Vietcombank (15/09/2025)',
  grossIncome: '28.500.000 đ',
  deductions: '−3.820.000 đ',
  workDays: '22/22',
  incomeItems: [
    { title: 'Lương cơ bản (HĐLĐ)', note: '22 công thực tế', amount: '20.000.000 đ' },
    { title: 'Lương hiệu quả (KPI)', note: 'Đạt 105% chỉ tiêu A+', amount: '5.000.000 đ' },
    { title: 'Phụ cấp ăn trưa & đi lại', note: 'Cố định tháng', amount: '1.500.000 đ' },
    { title: 'Tiền làm thêm giờ (OT)', note: '4.5 giờ x 150%', amount: '1.200.000 đ' },
    { title: 'Thưởng sáng kiến', note: 'Dự án Tối ưu Mobile', amount: '800.000 đ' },
  ],
  deductionItems: [
    { title: 'Bảo hiểm xã hội (BHXH)', note: 'Tỷ lệ trích đóng 8.0%', amount: '1.600.000 đ' },
    { title: 'Bảo hiểm y tế (BHYT)', note: 'Tỷ lệ trích đóng 1.5%', amount: '300.000 đ' },
    { title: 'Bảo hiểm thất nghiệp (BHTN)', note: 'Tỷ lệ trích đóng 1.0%', amount: '200.000 đ' },
    { title: 'Thuế TNCN tạm tính', note: 'Đã trừ gia cảnh bản thân', amount: '1.720.000 đ' },
  ],
  trend: [
    { month: 'T3', value: 22.8 },
    { month: 'T4', value: 23.1 },
    { month: 'T5', value: 23.5 },
    { month: 'T6', value: 24.0 },
    { month: 'T7', value: 23.9 },
    { month: 'T8', value: 24.6 },
  ],
  privacyNotice:
    'Phiếu lương này mang tính bảo mật nội bộ theo quy chế doanh nghiệp. Mọi thắc mắc cần giải trình, vui lòng gửi phản hồi trước ngày 20/09/2025.',
};
