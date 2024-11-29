import { useState, useEffect, useRef } from 'react';

const useLazyImageLoader = () => {
    const [loaded, setLoaded] = useState(false);//стан для завантаження(чи було завантажено)
    const imgRef = useRef(null);//для посилання зображення

    //для завантаження один раз і коли значення змінюються
    useEffect(() => {
        const currentImg = imgRef.current;
        //obsrever спостерігає
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                //коли в полі зору
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect()
                }
            },
            { threshold: 1.0 } //коли буде повністю на екрані
        );

        if (currentImg) {
            observer.observe(currentImg);
        }

        return () => {
            if (currentImg) observer.unobserve(currentImg);//відписуємось від елемента(тобто перестаємо стежити за конкретним)
        };
    }, [imgRef]);

    return { loaded, imgRef };
}

export default useLazyImageLoader