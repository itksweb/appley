import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    app: 0,
    isSidebar: true,
    showMenu: true,
    showSchedule: false,
  },
  reducers: {
    setApp(state, action) {
      state.app = action.payload;
      state.isSidebar = false;
    },
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
      if (state.showMenu) {
        state.showSchedule = false;
      }
    },
    isSidebar(state, action) {
      state.isSidebar = action.payload ? action.payload : !state.isSidebar;
    },
    seeSchedule(state, action) {
      state.showSchedule = action.payload
        ? action.payload
        : !state.showSchedule;
      state.showMenu = state.showSchedule ? false : true;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;
export default sidebarSlice.reducer;
