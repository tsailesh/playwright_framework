export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/users/login',
  },

  NOTES: {
    LIST: '/notes',
    CREATE: '/notes',
    GET: (id: string | number) => `/notes/${id}`,
    DELETE: (id: string | number) => `/notes/${id}`,
    PUT: (id: string | number) => `/notes/${id}`,
    PATCH: (id: string | number) =>`notes/${id}`,
  },
};