jest.mock("next/image", () => {
  // eslint-disable-next-line react/display-name
  return ({ src, alt }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  };
});
