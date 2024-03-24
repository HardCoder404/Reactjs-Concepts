import Card from "./Card";

function App() {
  return (
    <div className="flex">
      <Card image="https://prompti.ai/wp-content/uploads/2023/07/pcboi2.png" title="title 1" description="Desc 1" />
      
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5B-ishuRYIW4eAkdn5arso9Ejf2QU-fcHTA&usqp=CAU" title="title 2" description="Desc 2" />
      
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqGObJ9A42bZzoOggnkoxlxB_10tOIpHzcA&usqp=CAU" title="title 3" description="Desc 3" />
     
      <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnf9H5sQRrFoggzrI5_1q4KRjzzetXRIlYIg&usqp=CAU" title="title 4" description="Desc 4" />
    </div>
  );
}

export default App;
