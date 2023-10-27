import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic(state, action) {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []
      };
    },
    addQuizIdToTopic(state, action) {
        const { id, topicId } = action.payload;
        state.topics[topicId].quizIds.push(id);
    }
  },
});

export const selectTopics = state => state.topics.topics;

export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
