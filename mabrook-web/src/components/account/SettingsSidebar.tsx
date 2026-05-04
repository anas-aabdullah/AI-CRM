import { NavLink } from 'react-router-dom'
import { paths } from '../../config/paths'

const base =
  'block shrink-0 rounded-xl px-4 py-3 text-sm font-medium text-brand transition hover:bg-footer lg:shrink'

const active =
  'bg-brand/8 font-semibold text-brand ring-1 ring-brand/15'

export function SettingsSidebar() {
  return (
    <nav
      className="flex min-w-0 flex-row gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
      aria-label="Account settings"
    >
      <NavLink
        to={paths.settings}
        end
        className={({ isActive }) =>
          `${base} ${isActive ? active : ''}`.trim()
        }
      >
        My profile
      </NavLink>
      <NavLink
        to={paths.settingsChangePassword}
        className={({ isActive }) =>
          `${base} ${isActive ? active : ''}`.trim()
        }
      >
        Change password
      </NavLink>
    </nav>
  )
}
