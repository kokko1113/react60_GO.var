import { useRef } from "react"

export const PutProfile = ({ putProfile, profileData }) => {
    const userRef = useRef()
    const nickRef = useRef()
    return (
        <>
            <h1>Profile Settings</h1>
            username: <input type="text" name="username"
                defaultValue={profileData.username} ref={userRef} />
            nickname: <input type="text" name="nickname"
                defaultValue={profileData.nickname} ref={nickRef} />
            <button onClick={() => putProfile(userRef.current.value, nickRef.current.value)}>update</button>
        </>
    )
}