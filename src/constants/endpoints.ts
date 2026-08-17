export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/notes/api/users/login',
  },

  NOTES: {
    LIST: '/notes/api/notes',
    CREATE: '/notes/api/notes',
    GET: (id: string | number) => `/notes/api/notes/api/notes/${id}`,
    DELETE: (id: string | number) => `/notes/api/notes/api/notes/${id}`,
    PUT: (id: string | number) => `/notes/api/notes/api/notes/${id}`,
    PATCH: (id: string | number) =>`notes/api/notes/api/notes/${id}`,
  },
};