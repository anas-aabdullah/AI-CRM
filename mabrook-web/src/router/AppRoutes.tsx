import { Route, Routes } from 'react-router-dom'
import { paths } from '../config/paths'
import { CheckEmailPage } from '../pages/CheckEmailPage'
import { EmailConfirmedPage } from '../pages/EmailConfirmedPage'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { RecoverPasswordPage } from '../pages/RecoverPasswordPage'
import { ResetPasswordPage } from '../pages/ResetPasswordPage'
import { AccountSettingsLayout } from '../components/account/AccountSettingsLayout'
import { BrokerDashboardPage } from '../pages/BrokerDashboardPage'
import { ChangePasswordPage } from '../pages/ChangePasswordPage'
import { MyProfilePage } from '../pages/MyProfilePage'
import { PlaceholderPage } from '../pages/PlaceholderPage'
import { SignupPage } from '../pages/SignupPage'

/**
 * Application routes — add new `Route` entries as screens are built.
 * Backend developers can mirror REST paths under `/api` on the Express server.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.dashboard} element={<BrokerDashboardPage />} />
      <Route path={paths.settings} element={<AccountSettingsLayout />}>
        <Route index element={<MyProfilePage />} />
        <Route
          path="change-password"
          element={<ChangePasswordPage />}
        />
      </Route>
      <Route path={paths.login} element={<LoginPage />} />
      <Route path={paths.signup} element={<SignupPage />} />
      <Route path={paths.auth.forgotPassword} element={<RecoverPasswordPage />} />
      <Route path={paths.auth.checkEmail} element={<CheckEmailPage />} />
      <Route path={paths.auth.resetPassword} element={<ResetPasswordPage />} />
      <Route path={paths.auth.emailConfirmed} element={<EmailConfirmedPage />} />
      <Route path="/legal/*" element={<PlaceholderPage title="Legal" />} />
      <Route
        path="/business/*"
        element={<PlaceholderPage title="Business" />}
      />
      <Route
        path={paths.legal.complaints}
        element={<PlaceholderPage title="Complaints" />}
      />
      {/* Keep splats and specific paths above the 404 catch-all. */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
