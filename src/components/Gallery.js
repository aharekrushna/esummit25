import Image from 'next/image';
// import styles from './gallery.module.css';

export default function Gallery() {
    return <div className='relative w-screen mt-48 -top-98'>
        <Image src='/assets/gallery/1.jpeg' width={1500} height={1000} className='h-[200px] w-auto absolute top-10 left-[5%]' style={{ zIndex: 1 }} />
        <Image src='/assets/gallery/3.jpeg' width={1500} height={1000} className='h-[180px] w-auto absolute top-10 left-[50%]' style={{ zIndex: 1 }} />
        <Image src='/assets/gallery/4.jpeg' width={1500} height={1000} className='h-[250px] w-auto absolute top-60 left-[25%]' style={{ zIndex: 3 }} />
        <Image src='/assets/gallery/6.jpeg' width={1500} height={1000} className='h-[230px] w-auto absolute top-65 left-[55%]' style={{ zIndex: 1 }} />
        <Image src='/assets/gallery/7.jpeg' width={1500} height={1000} className='h-[170px] w-auto absolute -top-0 left-[35%]' style={{ zIndex: 2 }} />
        <Image src='/assets/gallery/8.jpeg' width={1500} height={1000} className='h-[240px] w-auto absolute top-20 left-[70%]' style={{ zIndex: 1 }} />
    </div>
}

// export default function Gallery() {
//     return (
//     <div className={`${styles.external} w-screen `}>
//         <div className={styles['horizontal-scroll-wrapper']}>
//             <div className={`${styles['img-wrapper']} ${styles.slower}`}>
//             <Image src='/assets/gallery/1.jpeg' width={1500} height={1000} />
//             </div>

//             <div className={`${styles['img-wrapper']} ${styles.faster}`}>
//             {/* <a href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/" target="_blank" rel="noopener">
//                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/antiquedollboy.jpg" alt="" />
//             </a> */}
//             <Image src='/assets/gallery/2.jpeg' width={1500} height={1000} />
//             </div>

//             <div className={`${styles['img-wrapper']} ${styles.slower} ${styles.vertical}`}>
//             {/* <a href="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/" target="_blank" rel="noopener">
//                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/windowshopclock.jpg" alt="" />
//             </a> */}
//             <Image src='/assets/gallery/4.jpeg' width={1500} height={1000} />
//             </div>

//             <div className={`${styles['img-wrapper']} ${styles.slower} ${styles['slower-down']}`}>
//             {/* <a href="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/" target="_blank" rel="noopener">
//                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/swanduckriver.jpg" alt="" />
//             </a> */}
//             <Image src='/assets/gallery/3.jpeg' width={1500} height={1000} />
//             </div>

//             <div className={styles['img-wrapper']}>
//             {/* <a href="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/" target="_blank" rel="noopener">
//                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-terrace.jpg" alt="" />
//             </a> */}
//             <Image src='/assets/gallery/5.jpeg' width={1500} height={1000} />
//             </div>

//             <div className={`${styles['img-wrapper']} ${styles.slower}`}>
//             {/* <a href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/" target="_blank" rel="noopener">
//                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-seine-boat.jpg" alt="" />
//             </a> */}
//             <Image src='/assets/gallery/6.jpeg' width={1500} height={1000} />
//             </div>

//             <div className={`${styles['img-wrapper']} ${styles.faster1}`}>
//             {/* <a href="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/" target="_blank" rel="noopener">
//                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/old-man-river.jpg" alt="" />
//             </a> */}
//             <Image src='/assets/gallery/7.jpeg' width={1500} height={1000} />
//             </div>
            
//             <div className={`${styles['img-wrapper']} ${styles.slower} ${styles.slower2}`}>
//             {/* <a href="https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/" target="_blank" rel="noopener">
//                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-table-street.jpg" alt="" />
//             </a> */}
//             <Image src='/assets/gallery/8.jpeg' width={1500} height={1000} />
//             </div>
            
//             <div className={styles['img-wrapper']}>
//             {/* <a href="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/" target="_blank" rel="noopener">
//                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/street-scene-people.jpg" alt="" />
//             </a> */}
//             <Image src='/assets/gallery/9.jpeg' width={1500} height={1000} />
//             </div>
            
//             <div className={`${styles['img-wrapper']} ${styles.slower}`}>
//             {/* <a href="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/" target="_blank" rel="noopener">
//                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg" alt="" />
//             </a> */}
//             <Image src='/assets/gallery/10.jpeg' width={1500} height={1000} />
//             </div>
            
//             <div className={`${styles['img-wrapper']} ${styles.slower} ${styles.last}`}>
//             {/* <a href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/" target="_blank" rel="noopener">
//                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/shop-window-reflection.jpg" alt="" />
//             </a> */}
//             <Image src='/assets/gallery/11.jpeg' width={1500} height={1000} />
//             </div>
//         </div>
//     </div>
//     );
// }