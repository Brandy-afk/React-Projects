import PhotoListItem from "./PhotoListItem";
import { useFetchPhotosQuery } from "../store";
import Skeleton from "./Skeleton";

export default function PhotoList({ albumn }) {
  const { data, error, isFetching } = useFetchPhotosQuery(albumn);

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={4} />;
  } else if (error) {
    content = <div>Error loading images...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem photo={photo} key={photo.id} />;
    });
  }

  return (
    <div className="mx-8 flex flex-row flex-wrap justify-start">{content}</div>
  );
}
