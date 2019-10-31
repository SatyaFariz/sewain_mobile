import { DefaultTheme } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  sidePadding: 20,
  colors: {
    ...DefaultTheme.colors,
    primary: '#475567',
  //  primary: '#65758a',
    accent: 'yellow',
    background: 'white',
    lightGrey: '#EEEEEE',
    lightGray: '#EEEEEE',
    link: '#1565C0',
    textSecondary: '#757575',
    notification: 'red'
  },
}

export default theme