// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function extractDeterminedFields(object: object, callback?: any) {
  const entries = (Object.entries(object)).filter(entire => entire[1]);

  if (callback && typeof callback === 'function') {
    return Object.fromEntries(entries.map(entire => [entire[0], callback(entire[1])]));
  }

  return Object.fromEntries(entries);
}
