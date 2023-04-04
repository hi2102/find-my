// import { FormEventHandler, ReactElement, JSXElementConstructor, ReactFragment } from 'react';
import styles from './SubmitForm.module.css';
interface SubmitForm {
  onSubmit: (e:{ preventDefault: () => void })=> void;
  title: string;
  inputContent: {type: string; placeholder: string}[];
}
function SubmitForm({ onSubmit, title, inputContent}:SubmitForm){
  return <div className='form-container sign-in-container'>
    <form onSubmit={onSubmit}>
      <h1 className={styles.title}>{title}</h1>
      {inputContent && inputContent.map((v: {type: string; placeholder: string})=>{
        return <input type={v.type} placeholder={v.placeholder} />
      })}
    <button>{title}</button>
  </form>
</div>;
}

export default SubmitForm;