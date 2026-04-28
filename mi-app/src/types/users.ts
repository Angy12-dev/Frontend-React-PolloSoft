// Definicion de tipos para usuarios

export type Rol = "admin" | "vendedor" | "operario";

export type Usuario = {
  id: number;
  nombre: string;
  email: string;
  rol: Rol;
};

// Tipo para las credenciales de Login

export type LoginCredenciales = {
  email: string;
  password: string;
};
