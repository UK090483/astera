import { testProjection } from "../../../__test__/queryTest";
import { linkMarkProjection } from "./linkMark.query";

describe("linkQuery", () => {
  it("should create Valid Query", async () => {
    const query = await testProjection(linkMarkProjection());
    expect(query.error).toBeFalsy();
  });
});
