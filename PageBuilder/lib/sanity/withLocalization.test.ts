import { SanityDocumentDefinition, Field } from "../../types";
import { withLocalization } from "./withLocalization";

const testDocument = (fields?: Field[]) =>
  ({
    type: "document",
    name: "test",
    title: "test",
    fieldsets: [{ title: "testFieldset", name: "testFieldset" }],
    fields: [
      { name: "test", title: "test", type: "string", localize: true },
      ...(fields ? fields : []),
    ],
  } as SanityDocumentDefinition);

const translateField = {
  fieldset: "testtranslations",
  localize: true,
  name: "test_en",
  title: "flag test English",
  type: "string",
} as Field;

const locale = {
  de: { flag: "flag", title: "Deutsch", isDefault: true },
  en: { flag: "flag", title: "English" },
};

describe("withLocalization", () => {
  it("should do nothing without locales...", () => {
    expect(withLocalization({}, [testDocument()])).toStrictEqual([
      testDocument(),
    ]);
  });

  it("should add translationFields", () => {
    expect(
      withLocalization({ options: { locale } }, [testDocument()])[0].fields
    ).toStrictEqual(testDocument([translateField]).fields);
  });

  it("should add field sets", () => {
    expect(
      withLocalization({ options: { locale } }, [testDocument()])[0].fieldsets
    ).toStrictEqual([
      { title: "testFieldset", name: "testFieldset" },
      {
        name: "testtranslations",
        options: {
          collapsible: true,
        },
        title: "test Translations",
      },
    ]);
  });
});
