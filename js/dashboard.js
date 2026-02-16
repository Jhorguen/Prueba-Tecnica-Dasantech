// si ya se cerro sesion no permitir volver a entrar sin ingreasar redenciales
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        checkAuth();
    }
});