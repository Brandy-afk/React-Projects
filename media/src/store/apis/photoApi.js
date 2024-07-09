import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { type } from "@testing-library/user-event/dist/type";

const photoApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      /////////////////////////////////
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => [{ type: "Photo", id: photo.id }]);
          tags.push({ type: "PhotoAlbum", id: album.id });
          return tags;
        },
        query: (album) => {
          return {
            url: "/photos",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),
      /////////////////////////////////
      deletePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: "PhotoAlbum", id: photo.albumId }];
        },
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
      /////////////////////////////////
      postPhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: "PhotoAlbum", id: photo.id }];
        },
        query: (album) => {
          return {
            url: "/photos",
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
            method: "POST",
          };
        },
      }),
      /////////////////////////////////
    };
  },
});

export const {
  useDeletePhotoMutation,
  useFetchPhotosQuery,
  usePostPhotoMutation,
} = photoApi;
export { photoApi };
