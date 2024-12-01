import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './styles/App.module.css'
import data from './data/dataForLab.js'
import schema from './validation/validation.js';
import FormTitleBlock from './components/FormTitleBlock'
import LabelInputBlock from './components/LabelInputBlock'
import LabelChooseBlock from './components/LabelChooseBlock'
import LabelMultiChooseBlock from './components/LabelMultiChooseBlock'

function App() {
  const {handleSubmit, reset, register, formState: { errors }} = useForm({resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {data.map((elem) => {
          switch (elem.type) {
            case "title": {
              return <FormTitleBlock key={elem.id} title={elem.content.title} description={elem.content.description}
                other={elem.content.other} className={`${styles.block} ${styles['title-block']}`} />
            }
            case "input": {
              return <LabelInputBlock key={elem.id} label={elem.content.label} description={elem.content.description}
                isRequired={elem.content.isRequired} className={`${styles.block}`} 
                name={elem.content.name} placeholder={elem.content.placeholder} register={register} errors={errors[elem.content.name]}/>
            }
            case "choose": {
              return <LabelChooseBlock key={elem.id} label={elem.content.label} description={elem.content.description}
                isRequired={elem.content.isRequired} className={`${styles['choose-block']}`}
                 name={elem.content.name} valueArray={elem.content.valueArray} type={elem.content.type} register={register} errors={errors[elem.content.name]}/>
            }


            case "multichoose": {
              return <LabelMultiChooseBlock key={elem.id} label={elem.content.label} description={elem.content.description}
                isRequired={elem.content.isRequired} className={`${styles['multichoose-block']}`}
                 valueArray={elem.content.valueArray} type={elem.content.type} register={register}/>
            }
            default: return null
          }

        })

        }
        <div className={styles['end-form']}>
          <div><button className={styles.send} type="submit">Надіслати</button></div>
          <div><progress id="page" value="1" max="1"></progress><label htmlFor="page">Сторінка 1 з 1</label></div>
          <div><button className={styles.reset} onClick={() => reset()}>Очистити форму</button></div>
        </div>
      </form>
    </>
  )
}

export default App
