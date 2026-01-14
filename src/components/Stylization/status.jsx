export function Status({ isOnline }) {
    return (
        <p>{isOnline ? "User is online" : "User is ofline"}</p>
    )
}