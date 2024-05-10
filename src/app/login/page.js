
import Login from "../components/ui/Login";
import Link from "next/link"

const LoginPage = () => {
    return <Login />;
    <div>
        <Link href={'/signup'}>
        <p>Crea tu cuenta</p>
        </Link>
    </div>
};

export default LoginPage;
