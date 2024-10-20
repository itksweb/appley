import { createSlice } from "@reduxjs/toolkit";

const countdownSlice = createSlice({
  name: "countdown",
  initialState: {
    play: false,
    timeUp: false,
    timeLeft: 10 * 60,
    schedule: [],
    timerLabel: "",
  },
  reducers: {
    setPlay(state, action) {
      state.play = action.payload ? action.payload : !state.play;
    },
    setTimeLeft(state, action) {
      state.timeLeft = action.payload;
    },
    setTimerLabel(state, action) {
      state.timerLabel = action.payload;
    },
    inputChange(state, action) {
      state.timeLeft = action.payload;
    },
    keypress(state, action) {
      let { key, keyCode, timedout } = action.payload;
      if (!state.play) {
        if (key === "ArrowUp" && state.timeLeft >= 0) {
          state.timeLeft > 0 && state.timeLeft < 60
            ? (state.timeLeft += 10)
            : (state.timeLeft += 60);
        } else if (key === "ArrowDown" && state.timeLeft) {
          state.timeLeft <= 60
            ? (state.timeLeft -= 10)
            : (state.timeLeft -= 60);
        }
      }
      if (keyCode === 32) {
        if (state.timeUp) {
          state.timeLeft = 600;
          state.timeUp = false;
        } else {
          clearTimeout(timedout);
          state.play = !state.play;
        }
      }
    },
    setSchedule(state, action) {
      state.schedule = action.payload;
    },
    setTimeUp(state, action) {
      state.timeUp = action.payload ? action.payload : !state.timeUp;
    },
  },
});

export const {
  setSchedule,
  setTimeLeft,
  setTimeUp,
  setTimerLabel,
  keypress,
  setPlay,
  inputChange,
} = countdownSlice.actions;
export default countdownSlice.reducer;
