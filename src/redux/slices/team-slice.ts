import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface teamState {
    teamId?: number;
}

const store_teamId = localStorage.getItem('team');

const initialState: teamState = {
    teamId: store_teamId ? +store_teamId : undefined,
};

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeam: (state, action: PayloadAction<number>) => {
            if (action.payload) {
                state.teamId = action.payload;
                localStorage.setItem('team', action.payload.toString());
            }
        }
    }
});

export const teamActions = teamSlice.actions;

export default teamSlice.reducer;
