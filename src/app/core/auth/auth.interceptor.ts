import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

const TOKEN_KEY = 'auth_token';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // Leggi il token direttamente dal localStorage invece di iniettare AuthService
  const token = localStorage.getItem(TOKEN_KEY);

  console.log('Interceptor: Request URL:', req.url);
  console.log('Interceptor: Token presente:', !!token);

  // Non aggiungere il token alle richieste di login
  if (req.url.includes('/auth/login')) {
    console.log('Interceptor: Richiesta di login, non aggiungo token');
    return next(req);
  }

  if (token) {
    console.log('Interceptor: Aggiunta header Authorization');
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }

  console.log('Interceptor: Nessun token, procedo senza Authorization header');
  return next(req);
};
