import { useEffect, useRef, useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function IconifyIcon({ icon, style, className = "" }) {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ref = useRef(null);

  useEffect(() => {
    if (mounted && ref.current && window.Iconify && typeof window.Iconify.scan === "function") {
      window.Iconify.scan(ref.current);
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <span
        className={className}
        style={{ ...style, display: "inline-block", width: "1em", height: "1em" }}
      />
    );
  }

  return (
    <span
      ref={ref}
      className={`iconify ${className}`}
      data-icon={icon}
      style={style}
      data-inline="false"
    />
  );
}
