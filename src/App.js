import React from 'react'
import { StateNavigator } from 'navigation'
import { NavigationHandler } from 'navigation-react'
import { NavigationStack } from 'navigation-react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import theme from './theme'
import RelayProvider from './RelayProvider'

import MainScreen from './screens/main/MainScreen'
import ProductDetailScreen from './screens/product-detail/ProductDetailScreen'
import CategoryScreen from './screens/category/CategoryScreen'
import SearchScreen from './screens/search/SearchScreen'
import LoginScreen from './screens/login/LoginScreen'
import RegisterScreen from './screens/register/RegisterScreen'
import ForgotPasswordScreen from './screens/forgot-password/ForgotPasswordScreen'
import EditProfileScreen from './screens/edit-profile/EditProfileScreen'
import EditNameScreen from './screens/edit-name/EditNameScreen'
import EditUsernameScreen from './screens/edit-username/EditUsernameScreen'
import EditEmailScreen from './screens/edit-email/EditEmailScreen'
import EditPhoneScreen from './screens/edit-phone/EditPhoneScreen'
import EditAddressScreen from './screens/edit-address/EditAddressScreen'
import EditPasswordScreen from './screens/edit-password/EditPasswordScreen'
import RentFormScreen from './screens/rent-form/RentFormScreen'
import UsersFeedbackScreen from './screens/users-feedback/UsersFeedbackScreen'
import TermsAndConditionsScreen from './screens/terms-and-conditions/TermsAndConditionsScreen'
import PrivacyPolicyScreen from './screens/privacy-policy/PrivacyPolicyScreen'

const stateNavigator = new StateNavigator([
  { key: 'main', title: 'Main' },
  { key: 'productDetail', trackCrumbTrail: true },
  { key: 'category', trackCrumbTrail: true },
  { key: 'search', trackCrumbTrail: true },
  { key: 'login', trackCrumbTrail: true },
  { key: 'register', trackCrumbTrail: true },
  { key: 'editProfile', trackCrumbTrail: true },
  { key: 'editName', trackCrumbTrail: true },
  { key: 'editUsername', trackCrumbTrail: true },
  { key: 'editEmail', trackCrumbTrail: true },
  { key: 'editPhone', trackCrumbTrail: true },
  { key: 'editAddress', trackCrumbTrail: true },
  { key: 'editPassword', trackCrumbTrail: true },
  { key: 'forgotPassword', trackCrumbTrail: true },
  { key: 'rentForm', trackCrumbTrail: true },
  { key: 'usersFeedback', trackCrumbTrail: true },
  { key: 'termsAndConditions', trackCrumbTrail: true },
  { key: 'privacyPolicy', trackCrumbTrail: true }
])

const { 
  main,
  productDetail,
  category,
  search,
  login,
  register,
  editProfile,
  editName,
  editUsername,
  editEmail,
  editPhone,
  editAddress,
  editPassword,
  forgotPassword,
  rentForm,
  usersFeedback,
  termsAndConditions,
  privacyPolicy
} = stateNavigator.states

main.renderScene = () => <MainScreen/>
productDetail.renderScene = params => <ProductDetailScreen {...params}/>
category.renderScene = params => <CategoryScreen {...params}/>
search.renderScene = () => <SearchScreen/>
login.renderScene = () => <LoginScreen/>
register.renderScene = () => <RegisterScreen/>
editProfile.renderScene = () => <EditProfileScreen/>
editName.renderScene = params => <EditNameScreen {...params}/>
editUsername.renderScene = params => <EditUsernameScreen {...params}/>
editEmail.renderScene = params => <EditEmailScreen {...params}/>
editPhone.renderScene = params => <EditPhoneScreen {...params}/>
editAddress.renderScene = params => <EditAddressScreen {...params}/>
editPassword.renderScene = () => <EditPasswordScreen/>
forgotPassword.renderScene = () => <ForgotPasswordScreen/>
rentForm.renderScene = params => <RentFormScreen {...params}/>
usersFeedback.renderScene = params => <UsersFeedbackScreen {...params}/>
termsAndConditions.renderScene = params => <TermsAndConditionsScreen/>
privacyPolicy.renderScene = params => <PrivacyPolicyScreen/>
/*
productDetail.getCrumbStyle = () => 'none'
productDetail.getUnmountStyle = () => 'none'

main.getCrumbStyle = (from, state, data, crumbs, nextState) => {
    return crumbs.key === 'productDetail' ? 'none' : null
}
*/

stateNavigator.navigate('main')

export default () => (
  <RelayProvider>
    <PaperProvider theme={theme}>
      <NavigationHandler stateNavigator={stateNavigator}>
          <NavigationStack 
            fragmentMode={false}
        //    crumbStyle={(from, state, data, crumbs, nextState) => state.getCrumbStyle(from, data, crumbs, nextState)}
        //    unmountStyle={(from, state, data, crumbs, nextState) => state.getUnmountStyle(from, data, crumbs, nextState)}
          />
      </NavigationHandler>
    </PaperProvider>
  </RelayProvider>
)