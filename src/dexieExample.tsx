import Dexie, { Table } from "dexie";


interface User {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    website: string;
    biography: string;
  }

  class MySubClassedDexie extends Dexie {
    // 'Users' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    Users!: Table<User>;

    constructor() {
      super("myDatabase");
      this.version(1).stores({
        Users: "++id, firstName, lastName, email, username, website, biography",
      });
    }
  }
  const db = new MySubClassedDexie();

  const saveInfo = async () => {
    // await db.Users.add({
    //   firstName: firstname,
    //   lastName: lastname,
    //   email: emailid,
    //   username: username,
    //   website: website,
    //   biography: bio,
    // });
  };