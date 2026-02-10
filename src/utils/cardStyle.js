/**
 * Shared card style for project and npm package cards.
 */
export function getCardStyle(theme) {
  return {
    backgroundColor: theme.imageDark,
    border: `1px solid ${theme.text}15`,
    boxShadow: `0 4px 20px ${theme.text}08`,
  };
}
