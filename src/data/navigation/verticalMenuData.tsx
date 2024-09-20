// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'
import type { getDictionary } from '@/utils/getDictionary'

// const verticalMenuData = (): VerticalMenuDataType[] => [
//   {
//     label: 'home',
//     href: '/home',
//     icon: 'ri-home-smile-line'
//   },
//   {
//     label: 'clinicsManagement',
//     href: '/clinics-management',
//     icon: 'ri-home-smile-line'
//   },
//   {
//     label: 'doctorClinicsManagement',
//     href: '/doctor-clinics-management',
//     icon: 'ri-home-smile-line'
//   },
//   {
//     label: 'patientsManagement',
//     href: '/patients-management',
//     icon: 'ri-home-smile-line'
//   },
//   {
//     label: 'visitsManagement',
//     href: '/visit-management',
//     icon: 'ri-home-smile-line'
//   },
//   {
//     label: 'appointmentsManagement',
//     href: '/appointments-management',
//     icon: 'ri-home-smile-line'
//   },
//   {
//     label: 'help',
//     href: '/help',
//     icon: 'ri-information-line'
//   }
// ]

const verticalMenuData = (dictionary: Awaited<ReturnType<typeof getDictionary>>): VerticalMenuDataType[] => [
  // This is how you will normally render submenu
  {
    label: dictionary['navigation'].home,
    icon: 'ri-home-smile-line',
    suffix: {
      label: '5',
      color: 'error'
    }
  },
  {
    label: dictionary['navigation'].clinicsManagement,
    icon: 'ri-file-copy-line',
    children: [
      {
        label: dictionary['navigation'].list,
        href: '/user/list',
        target: '_blank',
        excludeLang: true
      },
      {
        label: dictionary['navigation'].view,
        href: '/user/view',
        target: '_blank',
        excludeLang: true
      }
    ]
  }
]

export default verticalMenuData
