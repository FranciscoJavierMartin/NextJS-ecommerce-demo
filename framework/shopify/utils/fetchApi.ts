type FetcherResult<T> = {
  data: T;
};

export default async <T>({
  query,
}: {
  query: string;
}): Promise<FetcherResult<T>> => {
  const url = process.env.SERVER_API!;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }

  return { data };
};
