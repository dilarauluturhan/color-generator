import React, { useState } from 'react';
import SingleColor from './SingleColor';

// values.js'i renk değerleri üzerinde işlemler yapmak için kullandım
import Values from 'values.js';

function App() {
  const [color, setColor] = useState(''); // renk değerlerini tutmak için
  const [error, setError] = useState(false); // hata durumunu belirtmek için
  const [list, setList] = useState(new Values('#617a55').all(3)); // renkleri listelemek için

  /*
  handleSubmit, form gönderildiğinde çalışır,
  preventDefault(), varsayılan form davranışını engellemek için kullanılır,
  try-catch içinde renk değerleri oluşturulur,
  new Values(color).all(3) ifadesi renk değerlerini oluşturur ve colors değişkenine atar.
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(3);
      setList(colors);
      /*
      eğer bir hata oluşursa setError(true) ifadesi kullanılarak error state'i true olarak ayarlanır
      ve hata konsola yazdırılır
      */
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        {/* handleSubmit'i tetikler */}
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color} // value, color state'ine bağlıdır, kullanıcının girdiği değeri temsil eder
            onChange={(e) => setColor(e.target.value)} //kullanıcının girdiği değer onChange ve setColor ile color state'ine aktarılır
            placeholder='#617a55'
            className={`${error ? 'error' : null}`} // error state'i true ise error sınıfını ekler
          />
          <button className='btn' type='submit'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        { // list state'indeki renklerin her biri için map() kullanılarak SingleColor yazdırılır
          list.map((color, index) => {
            return (
              /*
              her bileşen için key oluşturulur ve ...color, index ve hexColor değerleri iletilir
              renk oluşturma formu ve renklerin listesi ekranda gösterilir, 
              SingleColor bileşeni her renk için ayrı ayrı oluşturulur ve gerekli değerleri alarak renkleri gösterir.
              */
              <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            )
          })
        }
      </section>
    </>
  )
}

export default App;