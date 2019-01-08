export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('book_editor_state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('book_editor_state', serializedState);
  } catch (err) {
    console.warn(err);
  }
};
