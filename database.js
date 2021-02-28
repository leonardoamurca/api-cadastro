const _data = [];
let _id = 0;

const UserStore = {
  findAll: () => _data,
  find: (id) => {
    return _data.find((d) => d._id === id) !== undefined ? user : false;
  },
  insert: (item) => {
    _data.push({ _id: _id++, ...item });
  },
  update: (id, data) => {
    const user = _data.find((d) => d._id === id);
    if (user !== undefined) {
      const { name, email, address } = data;

      user.name = name !== undefined ? name : user.name;
      user.email = email !== undefined ? email : user.email;
      user.address = address !== undefined ? address : user.address;

      return user;
    }

    return false;
  },
  delete: (id) => {
    return _data.find((d) => d._id === id) !== undefined
      ? _data.splice(_data.indexOf(user), 1)
      : false;
  },
};

const Database = {
  userStore: UserStore,
};

Object.freeze(UserStore);
Object.freeze(Database);

module.exports = Database;
