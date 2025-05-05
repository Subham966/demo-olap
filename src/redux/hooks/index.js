import { appStore } from "../store";

const useAppDispatch = (action) => appStore.dispatch(action);

export { useAppDispatch };
