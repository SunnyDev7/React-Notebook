import React, {useContext} from 'react'
export const UserContext = React.createContext();
export const GuestContex = React.createContext();

const Apple = () => {
    return <Ball />
}

const Ball = () => {

    const User = useContext(UserContext)
    const Guest = useContext(GuestContex)

    return (
        <div>
            {User} is User and {Guest} is Guest
        </div>
    )
}

const Cat = () => {
    return (
        <UserContext.Consumer>
            {user => {
                    return (
                        <GuestContex.Consumer>
                            {   guest => {
                                    return <div>User context value is {user}, and Guest context value is {guest}</div>
                                }
                            }
                        </GuestContex.Consumer>
                    )       
                }
            }
        </UserContext.Consumer>
    )
}

function UseContextHook() {
    return (
        <UserContext.Provider value={"Sunny"}>
            <GuestContex.Provider value={"payal"}>
                <Apple />
            </GuestContex.Provider>
        </UserContext.Provider>
    )
}

export default UseContextHook
