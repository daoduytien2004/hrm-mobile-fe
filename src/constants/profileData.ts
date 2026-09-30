import {
  Bell,
  BookOpen,
  ContactRound,
  Fingerprint,
  KeyRound,
  Landmark,
  ShieldCheck,
  UserRound,
} from 'lucide-react-native';

export const PROFILE_SUMMARY = {
  role: 'Chuyên viên Nhân sự',
  employeeId: 'HRM-2025-018',
  office: 'Văn phòng Hà Nội',
  address: 'Tòa nhà VFI, Phố Duy Tân, Cầu Giấy, Hà Nội',
  tenure: '2 năm 4 tháng',
  tenureNote: 'Gắn bó tốt',
  contract: 'Vô thời hạn',
  contractNote: 'Kỳ 2023 - Nay',
  kpi: '4.8',
  kpiTotal: '5.0',
  kpiNote: 'Xuất sắc',
};

export const PROFILE_SECTIONS = [
  {
    title: 'Hồ sơ & Đãi ngộ',
    verified: true,
    items: [
      {
        id: 'personal-contract',
        title: 'Hồ sơ cá nhân & Hợp đồng',
        subtitle: 'CCCD, văn bằng, HĐLĐ số 118/HĐ-VFI',
        Icon: ContactRound,
        color: '#1D4ED8',
        background: '#DBEAFE',
      },
      {
        id: 'dependents-tax',
        title: 'Người phụ thuộc & Thuế TNCN',
        subtitle: '01 người giảm trừ • MST: 8439201928',
        Icon: UserRound,
        color: '#A16207',
        background: '#FEF3C7',
      },
      {
        id: 'payroll-account',
        title: 'Tài khoản nhận lương',
        subtitle: 'Vietcombank - **** 6899 (Chính)',
        Icon: Landmark,
        color: '#059669',
        background: '#D1FAE5',
      },
      {
        id: 'insurance',
        title: 'Bảo hiểm xã hội & BHYT',
        subtitle: 'Mã BHXH: 0123456789 • Thẻ điện tử',
        Icon: ShieldCheck,
        color: '#4F46E5',
        background: '#E0E7FF',
      },
    ],
  },
  {
    title: 'Cài đặt ứng dụng & Bảo mật',
    verified: false,
    items: [
      {
        id: 'biometric',
        title: 'Chấm công FaceID / Vân tay',
        subtitle: 'Tự động nhận diện khi đến văn phòng',
        Icon: Fingerprint,
        color: '#059669',
        background: '#D1FAE5',
      },
      {
        id: 'notifications',
        title: 'Cài đặt thông báo',
        subtitle: 'Đơn từ, phiếu lương, nhắc nhở chấm công',
        Icon: Bell,
        color: '#1D4ED8',
        background: '#DBEAFE',
      },
      {
        id: 'password',
        title: 'Đổi mật khẩu & Khóa PIN',
        subtitle: 'Cập nhật 45 ngày trước',
        Icon: KeyRound,
        color: '#4F46E5',
        background: '#E0E7FF',
      },
      {
        id: 'policies',
        title: 'Nội quy & Chính sách công ty',
        subtitle: 'Sổ tay văn hóa doanh nghiệp VFI 2025',
        Icon: BookOpen,
        color: '#A16207',
        background: '#FEF3C7',
      },
    ],
  },
] as const;
