import React from 'react'
import ScanDetailsMobileView from './ScanDetailsMobileView'
import ScanDetailsDesktopView from './ScanDetailsDesktopView'
import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'

const ScanDetails = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  return isMobile ? <ScanDetailsMobileView /> : <ScanDetailsDesktopView />
}

export default ScanDetails
