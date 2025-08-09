import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../features/auth/authSlice'

export default function ProtectedRoute() {
  const isAuthed = useSelector(selectIsAuthenticated)
  const location = useLocation()

  if (!isAuthed) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <Outlet />
}
