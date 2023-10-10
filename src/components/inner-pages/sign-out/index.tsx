import HeaderSeven from "@/layout/headers/HeaderSeven";
import SignInArea from "../sign-in/sign-in-area";


const SignOut = () => {
    return (
        <>
        <HeaderSeven style={true} />
        <main>
            <SignInArea sing_out={true} />
        </main>
        </>
    );
};

export default SignOut;