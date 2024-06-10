// src/users/usersService.ts
import { User } from "./users.model";

// A post request should not contain an id.
export type UserCreationParams = Omit<User, "id">;

export class UserService {
  public get(id: number): User {
    return {
      id,
      name: "Jane Doe",
    };
  }

  public create(assetCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      name: assetCreationParams.name,
    };
  }
}
