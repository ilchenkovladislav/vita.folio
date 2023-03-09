import { useParams } from 'react-router-dom';
import { useStateSelector } from '../../store/hooks';

import styles from './ImageList.module.scss';

export const ImageList = () => {
  const { folderId } = useParams();

  const images = useStateSelector((state) =>
    state.image.items.filter(
      (image) => Number(image.folderId) === Number(folderId)
    )
  );

  return (
    <ul className={styles.images}>
      {images.map((image) => (
        <li className={styles.item} key={image.id}>
          <img className={styles.img} src={image.path} alt="" />
          <div className={styles.control}>
            <button>переименовать</button>
            <button>скачать</button>
            <button>скопировать ссылку</button>
            <button>удалить</button>
          </div>
          <div className={styles.downloads}>
            {image.numberDownloads} раз скачали
          </div>
          <input className={styles.check} type="checkbox" name="" id="" />
        </li>
      ))}
    </ul>
  );
};
