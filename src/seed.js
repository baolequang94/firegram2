export function createSeed(firebase) {
  const users = [
    {
      userId: "IUjS5JhnnFXoqJQT9tLqka7faCK2",
      username: "firegram",
      profileSrc:
        "https://firebasestorage.googleapis.com/v0/b/firegram2-3f074.appspot.com/o/firegram.png?alt=media&token=b85c9ce7-dabf-4873-a1e9-4cc2c35fad81",
      name: "Firegram",
      email: "firegram@gmail.com",
      followers: [],
      followings: [
        "lGCKPDojX2aWeFU8YAdkV6C3o4j2",
        "DGCPUX2A2jXWy85UFcwz9fJHEYf2",
      ],
    },
    {
      userId: "lGCKPDojX2aWeFU8YAdkV6C3o4j2",
      username: "nhi_98",
      profileSrc:
        "https://firebasestorage.googleapis.com/v0/b/firegram2-3f074.appspot.com/o/1.jpg?alt=media&token=0cdf4e10-7640-4100-a992-49f8b54657d9",
      name: "Nhi",
      email: "nhi98_firegram@gmail.com",
      followers: ["IUjS5JhnnFXoqJQT9tLqka7faCK2"],
      followings: ["IUjS5JhnnFXoqJQT9tLqka7faCK2"],
    },
    {
      userId: "DGCPUX2A2jXWy85UFcwz9fJHEYf2",
      username: "thao_91",
      profileSrc:
        "https://firebasestorage.googleapis.com/v0/b/firegram2-3f074.appspot.com/o/3.jpg?alt=media&token=9e30ae9f-328f-4149-824c-53d2cd474469",
      name: "Thao",
      email: "thao91_firegram@gmail.com",
      followers: ["IUjS5JhnnFXoqJQT9tLqka7faCK2"],
      followings: ["IUjS5JhnnFXoqJQT9tLqka7faCK2"],
    },
  ];

  users.forEach((user) => {
    firebase.firestore().collection("users").add(user);
  });

  const photos = [
    {
      photoId: Date.now(),
      dateCreated: Date.now(),
      photoSrc:
        "https://firebasestorage.googleapis.com/v0/b/firegram2-3f074.appspot.com/o/1.jpg?alt=media&token=0cdf4e10-7640-4100-a992-49f8b54657d9",
      posterId: "DGCPUX2A2jXWy85UFcwz9fJHEYf2",
      caption: "Test caption",
      likes: ["IUjS5JhnnFXoqJQT9tLqka7faCK2"],
      comments: [
        {
          displayName: "firegram",
          comment: "Good to see you on Firegram!",
        },
      ],
    },
    {
      photoId: Date.now(),
      dateCreated: Date.now(),
      photoSrc:
        "https://firebasestorage.googleapis.com/v0/b/firegram2-3f074.appspot.com/o/3.jpg?alt=media&token=9e30ae9f-328f-4149-824c-53d2cd474469",
      posterId: "DGCPUX2A2jXWy85UFcwz9fJHEYf2",
      caption: "My ava",
      likes: ["IUjS5JhnnFXoqJQT9tLqka7faCK2"],
      comments: [
        {
          displayName: "firegram",
          comment: "Welcome to Firegram",
        },
      ],
    },
    {
      photoId: Date.now(),
      dateCreated: Date.now(),
      photoSrc:
        "https://firebasestorage.googleapis.com/v0/b/firegram2-3f074.appspot.com/o/5.jpg?alt=media&token=17a75f03-f62f-4221-ac14-de7db02d228c",
      posterId: "lGCKPDojX2aWeFU8YAdkV6C3o4j2",
      caption: "My home",
      likes: [],
      comments: [
        {
          displayName: "firegram",
          comment: "Beautiful!!! <3",
        },
      ],
    },
  ];

  photos.forEach((photo) => {
    firebase.firestore().collection("photos").add(photo);
  });
}
