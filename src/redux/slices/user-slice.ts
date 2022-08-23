import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
  authenticated: boolean;
  userId: string;
}

const initialState: userState = {
  authenticated: false,
  userId: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const token = action.payload;

      if (token && token.trim() !== '') {
        state.authenticated = true;
        localStorage.setItem('jwt', token);
      }
    },

    logout: (state) => {
      localStorage.removeItem('jwt');
      state.authenticated = false;
      state.userId = '';
    },

    authenticate: (state) => {
      const token = localStorage.getItem('jwt');
      state.authenticated = token !== undefined;
    },

    setUserData: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;

      if (id) {
        state.userId = id;
      }
    }
  }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
