
const VALIDAR_USUARIO = 'admin';
const VALIDAR_CONTRASENA = '123456';


function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === VALIDAR_USUARIO && password === VALIDAR_CONTRASENA) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', username);
        
        // Mandar al dashbord
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

// Verificar autenticación
function checkAuth() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const currentPage = window.location.pathname.split('/').pop();
    
    // Si no tiene credencials y se tratade acceder al dashboard
    if (!isAuthenticated && currentPage === 'dashboard.html') {
        window.location.href = 'login.html';
    }
    
    // Si ya tiene crendenciales permitir ingresar
    if (isAuthenticated && currentPage === 'login.html') {
        window.location.href = 'dashboard.html';
    }
}

// Cerrar sesión
function logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

// cargar la funcion al cargar la pagins
document.addEventListener('DOMContentLoaded', checkAuth);