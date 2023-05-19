import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

/*
SingleColor, tek bir renk örneğini temsil eder
bcg, rgb dizisini birleştirerek bir dizi haline getirir
hex, rgbToHex fonksiyonunu kullanarak rgb değerlerini hexadecimal renk değerine dönüştürür
hexValue, hexColor değerini bir # ile birleştirerek hexadecimal renk değerini temsil eder
*/
const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [alert])

    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            // bcg değişkeninden alınan RGB değerlerini kullanarak bir dizi oluşturur ve bu diziyi arka plan rengi olarak ayarlar
            style={{ backgroundColor: `rgb(${bcg})` }}
            /*
            onClick renk örneğine tıklandığında çalışır,
            setAlert(true) kul. alert durumu true olarak ayarlanır,
            navigator.clipboard.writeText(hexValue) ile hexadecimal renk değeri panoya kopyalanır
            */
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue) // tarayıcının panosuna metin kopyalamak için kullanılan bir JS API'sidir, bu yöntem seçilen metni kullanıcının panosuna kopyalar
            }}
        >
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hexValue}</p>
            {alert && <p className='alert'>Copied to Clipboard</p>}
        </article>
    )
}

export default SingleColor