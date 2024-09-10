// Type Imports
import type { ThemeColor } from '@core/types'

export type TeacherTypes = {
  id: number
  fullName: string
  subjects: string
  status: string
  email: string
  phoneNumber: string
  address: string
  avatarUrl: string
  avatarColor?: ThemeColor
}
