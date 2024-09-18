// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

const verticalMenuData = (): VerticalMenuDataType[] => [
  {
    label: 'Dashboard',
    href: '/home',
    icon: 'ri-home-smile-line'
  },
  {
    label: 'Quản lý phòng khám',
    href: '/clinics-management',
    icon: 'ri-home-smile-line'
  },
  {
    label: 'Quản lý phòng mạch',
    href: '/doctor-clinics-management',
    icon: 'ri-home-smile-line'
  },
  {
    label: 'Quản lý bệnh nhân',
    href: '/patients-management',
    icon: 'ri-home-smile-line'
  },
  {
    label: 'Quản lý ca khám',
    href: '/visit-management',
    icon: 'ri-home-smile-line'
  },
  {
    label: 'Quản lý lịch đặt hẹn',
    href: '/appointments-management',
    icon: 'ri-home-smile-line'
  },
  {
    label: 'Help',
    href: '/help',
    icon: 'ri-information-line'
  }
]

export default verticalMenuData
