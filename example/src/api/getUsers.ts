export const getUsers = async (): Promise<any> => {
  const response: any = await fetch("https://randomuser.me/api/?results=20").then(r => r.json());
  return response;
};
