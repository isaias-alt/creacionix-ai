import { UserProfile } from "@clerk/nextjs"

const SettingsPage = () => {
  return (
    <div className="flex items-center justify-center mt-24">
      <UserProfile />
    </div>
  )
}

export default SettingsPage