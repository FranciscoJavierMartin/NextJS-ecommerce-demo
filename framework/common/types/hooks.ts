export type MutationHookContext = {
  fetch: (input: any) => any;
};

export type MutationHook = {
  fetcher: (input: any) => any;
  useHook(context: MutationHookContext): () => any;
};
