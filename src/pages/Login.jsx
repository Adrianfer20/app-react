const Login = () => {
    // Lógica de inicio de sesión aquí
    const handleLogin = () => {
        localStorage.setItem('authToken', '123456'); // Esto es solo un ejemplo, deberías manejar el token correctamente
    }; 
    
    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Esto es solo un ejemplo, deberías manejar el token correctamente
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button className="bg-blue-700 text-white px-3 py-2" onClick={handleLogin}>Login</button>
            <br />
            <button className="bg-blue-700 text-white px-3 py-2" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Login;