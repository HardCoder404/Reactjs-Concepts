
function App() {
  const data = [
    {
      id:1,
      name:"Prince"
    },
    {
      id:2,
      name:"Tarun"
    },
    {
      id:3,
      name:"Tanish"
    },
  ]

  return (
    <div>
     {
        data.map((user,i)=>(
          <h1 key={i}>
             {user.name}
          </h1>
        ))
    }
    </div>
  );
}

export default App;
