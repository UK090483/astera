export const getEditorField = (components: any[], initialValue?: any) => ({
  name: "body",
  type: "array",
  title: "Page sections",
  description: "Add, edit, and reorder sections",
  of: [...components],
  group: "content",
  ...(initialValue ? { initialValue } : {}),
});
