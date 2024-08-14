// components/ThemeImage.js
import styles from '@/components/theme-image.module.css';
import Image from 'next/image';

const ThemeImage = (props) => {
    const { srcLight, srcDark, ...rest } = props;

    return (
        <>
            <Image alt='sk' {...rest} src={srcLight} className={styles.imgLight} />
            <Image alt='uk' {...rest} src={srcDark} className={styles.imgDark} />
        </>
    );
};

export default ThemeImage;
