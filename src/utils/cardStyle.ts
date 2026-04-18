interface Theme {
  imageDark: string;
  text: string;
}

export function getCardStyle(theme: Theme): React.CSSProperties {
  return {
    backgroundColor: theme.imageDark,
    border: `1px solid ${theme.text}15`,
    boxShadow: `0 4px 20px ${theme.text}08`,
  };
}
