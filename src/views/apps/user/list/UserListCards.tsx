// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { UserDataType } from '@components/card-statistics/HorizontalWithSubtitle'
import type { getDictionary } from '@/utils/getDictionary'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

const data: UserDataType[] = [
  {
    title: 'Clinics',
    stats: '78',
    avatarIcon: 'ri-hospital-line',
    avatarColor: 'primary',
    trend: 'positive',
    trendNumber: '29%',
    subtitle: 'Total Clinics'
  },
  {
    title: 'Doctors',
    stats: '432',
    avatarIcon: 'ri-user-follow-line',
    avatarColor: 'success',
    trend: 'positive',
    trendNumber: '18%',
    subtitle: 'Total Doctors'
  },
  {
    title: 'Visits',
    stats: '19,860',
    avatarIcon: 'ri-user-line',
    avatarColor: 'warning',
    trend: 'negative',
    trendNumber: '14%',
    subtitle: 'Total Visits'
  },
  {
    title: 'Appointments',
    stats: '237',
    avatarIcon: 'ri-calendar-line',
    avatarColor: 'info',
    trend: 'positive',
    trendNumber: '42%',
    subtitle: 'Total Appointments'
  }
]

// Update the component definition
const UserListCards = () => {
  return (
    <Grid container spacing={6}>
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={3}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserListCards
