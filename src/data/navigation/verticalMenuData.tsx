// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'
import type { getDictionary } from '@/utils/getDictionary'

const verticalMenuData = (dictionary: Awaited<ReturnType<typeof getDictionary>>): VerticalMenuDataType[] => [
  // This is how you will normally render submenu
  {
    label: dictionary['navigation'].home,
    href: '/home',
    folder: 'home',
    icon: 'ri-home-smile-line',
    suffix: {
      label: '5',
      color: 'error'
    }
  },
  {
    label: dictionary['navigation'].clinicsManagement,
    href: '/clinicsManagement',
    folder: 'clinics-management',
    icon: 'ri-file-copy-line',
    children: [
      {
        label: dictionary['navigation'].list,
        href: '/list',
        target: '_blank',
        excludeLang: true
      },
      {
        label: dictionary['navigation'].view,
        href: '/view',
        target: '_blank',
        excludeLang: true
      }
    ]
  },
  {
    label: dictionary['navigation'].doctorClinicsManagement,
    href: '/doctorClinicsManagement',
    folder: 'doctor-clinics-management',
    icon: 'ri-file-copy-line',
    children: [
      {
        label: dictionary['navigation'].list,
        href: '/list',
        target: '_blank',
        excludeLang: true
      },
      {
        label: dictionary['navigation'].view,
        href: '/view',
        target: '_blank',
        excludeLang: true
      }
    ]
  },
  {
    label: dictionary['navigation'].patientsManagement,
    href: '/patientsManagement',
    folder: 'patients-management',
    icon: 'ri-file-copy-line',
    children: [
      {
        label: dictionary['navigation'].list,
        href: '/list',
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
  },
  {
    label: dictionary['navigation'].visitsManagement,
    href: '/visitsManagement',
    folder: 'visits-management',
    icon: 'ri-file-copy-line',
    children: [
      {
        label: dictionary['navigation'].list,
        href: '/list',
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
  },
  {
    label: dictionary['navigation'].patientsManagement,
    folder: 'patients-management',
    icon: 'ri-file-copy-line',
    children: [
      {
        label: dictionary['navigation'].list,
        href: '/list',
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
