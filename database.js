const _data = [];
let _id = 0;

const UserStore = {
  findAll: () => _data,
  find: (id) => {
    const user = _data.find((d) => d._id === parseInt(id));
    return user !== undefined ? user : false;
  },
  insert: (item) => {
    const newUser = { _id: _id++, ...item };

    _data.push(newUser);
    return newUser;
  },
  update: (id, data) => {
    const user = _data.find((d) => d._id === parseInt(id));
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
    const user = _data.find((d) => d._id === parseInt(id));
    return user !== undefined ? _data.splice(_data.indexOf(user), 1) : false;
  },
};

const Database = {
  userStore: UserStore,
};

Object.freeze(UserStore);
Object.freeze(Database);

module.exports = Database;
