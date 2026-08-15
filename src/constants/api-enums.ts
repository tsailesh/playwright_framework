// src/types/api.enums.ts
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum ErrorCodes {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
}

export enum ApiEndpoints {
  LOGIN = '/api/login',
  USERS = '/api/users',
  PROFILE = '/api/profile',
}

export enum NoteTypes{
    HOME = 'Home',
    WORK = 'Work',
    PERSONAL = 'Personal'
}