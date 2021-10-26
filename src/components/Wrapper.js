function Wrapper({wrapper, children}) {

  return (
    <div ref={wrapper} className="wrapper">
      {children}
    </div>
  );
}

export default Wrapper;
