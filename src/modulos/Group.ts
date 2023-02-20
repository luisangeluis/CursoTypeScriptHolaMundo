export default class Group {
  constructor(public readonly id: number, public name: string) {}
}

export const defaultGroups = {
  users: 'user1',
  admin: 'admin',
};
