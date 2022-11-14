export const Spacer = ({ h=1, w=1, style = {}, ...delegated }) => {
  const width = w;
  const height = h;
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  );
};
