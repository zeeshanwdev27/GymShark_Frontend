import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"




function GuestRoute({ children }) {
  const { user, authChecked } = useSelector((state) => state.user)

  if (!authChecked) return null // or a spinner — don't decide yet

  if (user?.id) {
    return <Navigate to="/" replace />
  }

  return children
}

export default GuestRoute