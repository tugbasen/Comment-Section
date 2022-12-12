export const getComments = async () => {
  return [
    {
      id: "1",
      body: "hi guys!!",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "hi you :)",
      username: "Deb",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (name, text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: name,
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (name, text) => {
  return { username: name, body: text };
};

export const deleteComment = async () => {
  return {};
};
