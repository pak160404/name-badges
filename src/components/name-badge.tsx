//declare n as number and tell typescript (dont need to) to return a number
//const math = (n:number) => n+2; - the same
const math = (n:number):number =>
{
  return n+2
};
const NameBadge = ({name}:{name : string}) => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">HELLO</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{name}</p>
        <p className="badge-description">{math(3)}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
