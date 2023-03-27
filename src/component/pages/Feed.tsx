import jsonDatas from '../../data/dummy_data.json';
import styles from './Main.module.css';

interface IList {
  content: number;
  imageUrl: string;
  title: string;
  cellNo: string;
  genre: string;
  location: string;
  part: string;
  recruit: string;
  cloud: string | undefined;
}

const datas = [...jsonDatas]

function List({ content, imageUrl, title, cellNo, genre, location, part, recruit, cloud }: IList) {
  return <li key={content} className={styles.img_container} >
    <img className={styles.img_wrapper} src={imageUrl} alt='dummy_img' />
    {title}<br/>
    {recruit}{' '}|{' '}{part}{' '}|{' '}{location}{' '}|{' '}{genre}<br />
    {cellNo}<br/>
    {cloud}<br/>
  </li>
}

export default function Feed() {
  return <ul className={styles.container}>
  {datas.map(data => (
    <List
      part={data.part}
      title={data.title}
      genre={data.genre}
      cellNo={data.cellNo}
      content={data.content}
      recruit={data.recruit}
      imageUrl={data.imageUrl}
      location={data.location}
      cloud={data.soundCloudUrl}
    />))}
  </ul>
}