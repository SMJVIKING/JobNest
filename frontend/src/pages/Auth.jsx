// auth :
// request:
// 1.get phoeumer
// 2.send otp - check otp
// 3.complete profile

import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
    return (
        <div className="min-h-screen bg-secondary-0">
            <div className="container xl:max-w-screen-xl">
                <div className="flex justify-center pt-10">
                    <AuthContainer />
                </div>
            </div>
        </div>
    )
}
export default Auth;