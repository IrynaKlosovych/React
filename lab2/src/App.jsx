import './styles/App.css'
import LazyLoadedImage from './components/LazyLoadedImage';
import images from './myData/myData';

function App() {
  return (
    <div>
      <h1>Lazy Loading Images</h1>
      <div className='lorem'>
        Lazy loading images використане для економії ресурсів. Якщо користувач не доскролив до картинки,
         вона не буде завантажена. Коли дійде до неї, тоді вона завантажиться і буде відображатись.
      </div>
      <div className='container'>
        {images.map((element) => (
          <LazyLoadedImage
            key={element.id}
            dataSrc={element.src}
            alt={`Image ${element.id}`}
            placeholder={element.placeholder}
            className={element.className}
          />
        ))}
      </div>
    </div>
  );
}

export default App
