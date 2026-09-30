import {
  CalendarDays,
  Wallet,
  FilePlus2,
  FileText,
  CalendarCheck,
  CircleCheck,
} from 'lucide-react-native';
export const HOME_USER = {
  name: 'Nguyễn Thị Mai',
  avatar: require('../assets/images/images.jpg'),
  greeting: 'Xin chào,',
  message: 'Chúc bạn một ngày làm việc hiệu quả!',
};

export const HOME_ATTENDANCE = {
  date: 'Thứ Tư, 17 Tháng 9, 2025',
  time: '08:15:30',

  status: {
    label: 'Đã chấm công vào',
    time: '07:58',
  },

  location: {
    name: 'Văn phòng Hà Nội',
    address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
  },
};
export const MONTHLY_ATTENDANCE = {
  month: 'Tháng 9/2025',

  workDays: {
    current: 18,
    total: 22,
  },

  lateDays: 1,
  leaveDays: 2,
  overtimeDays: 0,

  progress: 82,
};
export const QUICK_SERVICES = [
  {
    id: 'attendance',
    icon: CalendarDays,
    title: 'Bảng công',
    description: 'Xem công theo ngày tháng',
  },
  {
    id: 'payroll',
    icon: Wallet,
    title: 'Phiếu lương',
    description: 'Xem lương, phụ cấp, khấu trừ',
  },
  {
    id: 'request',
    icon: FilePlus2,
    title: 'Tạo yêu cầu',
    description: 'Nghỉ phép. công tác, bổ sung giấy tờ',
  },
  {
    id: 'my-requests',
    icon: FileText,
    title: 'Yêu cầu của tôi',
    description: 'Theo dõi trạng thái đơn',
  },
  {
    id: 'schedule',
    icon: CalendarCheck,
    title: 'Lịch làm việc',
    description: 'Xem ca làm, lịch nghỉ',
  },
  {
    id: 'approval',
    icon: CircleCheck,
    title: 'Phê duyệt',
    description: 'Duyệt yêu cầu',
  },
] as const;
export const NOTIFICATIONS = [
  {
    id: '1',
    title: 'Thông báo chấm công',
    message: 'Bạn đã chấm công thành công lúc 07:58.',
    time: '5 phút trước',
  },
  {
    id: '2',
    title: 'Phiếu lương tháng 9',
    message: 'Phiếu lương tháng 9 đã được cập nhật.',
    time: '2 giờ trước',
  },
  {
    id: '3',
    title: 'Lịch làm việc',
    message: 'Lịch làm việc tuần này đã được cập nhật.',
    time: 'Hôm qua',
  },
] as const;
