import { useFetchAlbumsQuery, useAddAlbumnMutation } from "../store";

import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumnListItem from "./AlbumnListItem";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbumn, addResults] = useAddAlbumnMutation();

  const handleAddAlbum = () => {
    addAlbumn(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading...</div>;
  } else {
    content = data.map((albumn) => {
      return <AlbumnListItem key={albumn.id} albumn={albumn} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={addResults.isLoading}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
