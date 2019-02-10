import { enumType } from "nexus";

export const UserType = enumType({
    name: "UserType",
    members: {
        ADMIN: "ADMIN",
        GUEST: "GUEST",
        USER: "USER"
    },
  });