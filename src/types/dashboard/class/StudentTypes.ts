// Type Imports
import type { ThemeColor } from '@core/types'

export type StudentTypes = {
  id: number
  fullName: string
  studentCode: string
  parentName: string
  relationship: string
  phoneNumber: string
  address: string
  avatarUrl: string
  avatarColor?: ThemeColor
}
