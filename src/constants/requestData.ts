import { CalendarPlus, Leaf, Plane, Timer } from 'lucide-react-native';

export const REQUEST_QUOTA = {
  year: 2025,
  total: 12,
  used: 3.5,
  remaining: 8.5,
  validUntil: '31/12/2025',
};

export const QUICK_REQUEST_TYPES = [
  { id: 'leave', label: 'Nghỉ phép', Icon: Leaf, color: '#059669', background: '#D1FAE5' },
  { id: 'attendance', label: 'Bổ sung công', Icon: CalendarPlus, color: '#A16207', background: '#FEF3C7' },
  { id: 'overtime', label: 'Tăng ca OT', Icon: Timer, color: '#DC2626', background: '#FEE2E2' },
  { id: 'business-trip', label: 'Công tác', Icon: Plane, color: '#1D4ED8', background: '#DBEAFE' },
] as const;

export const REQUESTS = [
  {
    id: 'NP-20250918',
    type: 'leave',
    title: 'Nghỉ phép thường niên',
    subtitle: 'Mã đơn: #NP-20250918',
    status: 'approved',
    details: [
      'Thời gian: 22/09 - 24/09/2025 (3 ngày)',
      'Người duyệt: Nguyễn Văn An (Trưởng phòng)',
    ],
    sentAt: 'Gửi lúc 16:30, 18/09/2025',
  },
  {
    id: 'CC-20250915',
    type: 'attendance',
    title: 'Bổ sung công vào',
    subtitle: 'Lý do: Quên chấm công vào',
    status: 'pending',
    details: [
      'Thời gian bổ sung: 08:00 - 15/09/2025',
      'Đang xử lý tại: Bộ phận Nhân sự',
    ],
    sentAt: 'Gửi lúc 09:15, 15/09/2025',
  },
  {
    id: 'OT-20250912',
    type: 'overtime',
    title: 'Làm thêm giờ (OT)',
    subtitle: 'Dự án: Triển khai HRM Core',
    status: 'approved',
    details: [
      'Thời gian: 18:00 - 20:30 (12/09) | 2.5 giờ',
      'Hệ số công: 150% lương căn ngày',
    ],
    sentAt: 'Gửi lúc 21:00, 12/09/2025',
  },
  {
    id: 'CT-20250901',
    type: 'business-trip',
    title: 'Đi công tác TP.HCM',
    subtitle: 'Hội thảo khách hàng miền Nam',
    status: 'complete',
    details: [
      'Địa điểm: Văn phòng Bitexco, Q.1, TP.HCM',
      'Lịch trình: 01/09/2025 - 03/09/2025 (3 ngày)',
    ],
    sentAt: 'Đã quyết toán công tác phí',
  },
  {
    id: 'CC-20250828',
    type: 'attendance',
    title: 'Bổ sung công ra',
    subtitle: 'Lý do: Máy chấm công gặp sự cố',
    status: 'rejected',
    details: [
      'Thời gian bổ sung: 17:30 - 28/08/2025',
      'Lý do từ chối: Thiếu xác nhận của quản lý',
    ],
    sentAt: 'Gửi lúc 18:10, 28/08/2025',
  },
] as const;
