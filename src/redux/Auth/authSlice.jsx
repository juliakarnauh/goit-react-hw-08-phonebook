import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './authOperations';

const initialState = {
  user: {},
  token: null,
  online: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.online = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.online = true;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.online = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.online = true;
        state.user = payload;
        state.loading = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.loading = true;
      })
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        state => {
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;