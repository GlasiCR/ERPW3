import LoginScreen from "../pages/loginScreen"

//It's in this component that valid if there is a user logged. If not, direct it to the login screen

type Props = {
    children: React.ReactNode
}
export default function PrivatePage ({children}: Props){
    const token = localStorage.getItem('token') || ""
    if(token === ""){
        return <LoginScreen />
    }
    return children
}