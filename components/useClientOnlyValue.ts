// For API compatibility - always returns client value in iOS
// This maintains the same interface while simplifying for iOS-only
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  return client;
}