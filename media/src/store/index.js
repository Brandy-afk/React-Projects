import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumnsApi } from "./apis/albumnApi";
import { photoApi } from "./apis/photoApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumnsApi.reducerPath]: albumnsApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      albumnsApi.middleware,
      photoApi.middleware
    );
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export {
  useFetchAlbumsQuery,
  useAddAlbumnMutation,
  useDeleteAlbumnMutation,
} from "./apis/albumnApi";

export {
  useFetchPhotosQuery,
  usePostPhotoMutation,
  useDeletePhotoMutation,
} from "./apis/photoApi";
