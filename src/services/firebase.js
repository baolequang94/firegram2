import { firebase, FieldValue } from "../libs/firebase";

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user[0];
}

export async function getPhotosByFollowingsUserId(followings) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("posterId", "in", followings)
    .get();

  const photos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  return photos;
}

export async function toggleState(
  likeState,
  setLikeState,
  docId,
  loggedInId,
  totalLikes
) {
  setLikeState((likeState) => !likeState);

  await firebase
    .firestore()
    .collection("photos")
    .doc(docId)
    .update({
      likes: likeState
        ? FieldValue.arrayRemove(loggedInId)
        : FieldValue.arrayUnion(loggedInId),
    });
}

export async function updateComments(docId, { displayName, comment }) {
  return firebase
    .firestore()
    .collection("photos")
    .doc(docId)
    .update({
      comments: FieldValue.arrayUnion({ displayName, comment }),
    });
}
