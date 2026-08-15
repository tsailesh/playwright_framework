import { test, expect } from "@playwright/test";
import { userExists } from "../../src/utils/db-helper";

test.describe("Database - Users", () => {
  test("User exists in DB after registration", async () => {
    test("User exists in DB", async () => {
      const exists = await userExists(process.env.TEST_USERNAME!);

      expect(exists).toBeTruthy();
    });
  });
});
