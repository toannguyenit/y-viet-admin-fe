import type { ReactElement } from 'react'

export type CardClass = {
  title?: string
  quantityClass?: number
  quantityStudent?: number
  chipColor?: 'primary' | 'secondary' | 'default' | 'error' | 'warning' | 'info' | 'success'
  chipText?: string
  avatarIcon?: ReactElement
  avatarColor?: string
}
