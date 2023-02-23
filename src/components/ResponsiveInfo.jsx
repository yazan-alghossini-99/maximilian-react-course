import useWindowSize from '../hooks/useWindowSize';
import useDebounce from '../hooks/useDebounce';

function ResponsiveInfo() {
  const { width, height } = useWindowSize();
  const debouncedWidth = useDebounce(width, 500);

  return (
    <div>
      <p>Current Width: {width}px</p>
      <p>Debounced Width (500ms): {debouncedWidth}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default ResponsiveInfo;
