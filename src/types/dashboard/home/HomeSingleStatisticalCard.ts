import type { ReactElement } from 'react'

export type HomeSingleStatisticalCard = {
  stats?: string
  title?: string
  trend?: 'positive' | 'negative'
  trendNumber?: string
  chipColor?: 'primary' | 'secondary' | 'default' | 'error' | 'warning' | 'info' | 'success'
  chipText?: string
  avatarIcon?: ReactElement
  avatarColor?: string
}
