import { useMemo, useState } from 'react';

export const useSearch = <T>(
  items   : T[],
  resolver: (item: T) => string,
) => {
  const [query, setQuery] = useState('');

  const tokens = useMemo(
    () => query.trim().toLowerCase().split(/\s+/g),
    [query],
  );

  const results = useMemo(
    () => items.filter((item) => {
      const itemName = resolver(item).toLowerCase();
      return tokens.every((token) => itemName.includes(token));
    }),
    [items, tokens, resolver],
  );

  return {
    query,
    tokens,
    results,
    setQuery,
  };
};
