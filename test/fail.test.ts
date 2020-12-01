import dayjs from "dayjs";
import rangeSupport from "../src";

dayjs.extend(rangeSupport);

describe("rangeSupport", () => {
  describe("without isSameOrBefore", () => {
    test("excludeEnd: false", () => {
      expect(() => {
        Array.from(
          dayjs.range("2020-12-01", "2020-12-31", {
            excludeEnd: false,
          })
        );
      }).toThrowError("dayjs/plugin/isSameOrBefore must be applied");
    });

    test("excludeEnd: true", () => {
      expect(() => {
        Array.from(
          dayjs.range("2020-12-01", "2020-12-31", {
            excludeEnd: true,
          })
        );
      }).not.toThrowError("dayjs/plugin/isSameOrBefore must be applied");
    });
  });
});
