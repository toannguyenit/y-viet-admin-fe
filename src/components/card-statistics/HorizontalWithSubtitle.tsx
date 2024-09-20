// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Utils Import
import { getDictionary } from '@/utils/getDictionary'

export type UserDataType = {
  title: string
  stats: string
  avatarIcon: string
  avatarColor?: ThemeColor
  trend: string
  trendNumber: string
  subtitle: string
}

const HorizontalWithSubtitle = async (props: UserDataType, locale: string) => {
  // Props
  const { title, stats, avatarIcon, avatarColor, trend, trendNumber, subtitle } = props
  const dictionary = await getDictionary()

  return (
    <Card>
      <CardContent className='flex justify-between gap-1'>
        <div className='flex flex-col gap-1 flex-grow'>
          <Typography color='text.primary'>{dictionary['body'][title]}</Typography>
          <div className='flex items-center gap-2 flex-wrap'>
            <Typography variant='h4'>{stats}</Typography>
            <Typography color={trend === 'negative' ? 'error.main' : 'success.main'}>
              {`(${trend === 'negative' ? '-' : '+'}${trendNumber})`}
            </Typography>
          </div>
          <Typography variant='body2'>{subtitle}</Typography>
        </div>
        <CustomAvatar color={avatarColor} skin='light' variant='rounded' size={42}>
          <i className={classnames(avatarIcon, 'text-[26px]')} />
        </CustomAvatar>
      </CardContent>
    </Card>
  )
}

export default HorizontalWithSubtitle
