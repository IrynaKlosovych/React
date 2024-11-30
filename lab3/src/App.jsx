import styles from './styles/App.module.css'
import data from './data/dataForLab'
import FormTitleBlock from './components/FormTitleBlock'
import LabelInputBlock from './components/LabelInputBlock'
import LabelChooseBlock from './components/LabelChooseBlock'

function App() {

  return (
    <>
      <form>
        <FormTitleBlock title={data[0].title} description={data[0].description}
          other={data[0].other} className={`${styles.block} ${styles['title-block']}`} />
        <LabelInputBlock label={data[1].label} description={data[1].description}
          isRequired={data[1].isRequired} className={`${styles.block}`} name={data[1].name} placeholder={data[1].placeholder} />
        <LabelInputBlock label={data[2].label} description={data[2].description}
          isRequired={data[2].isRequired} className={`${styles.block}`} name={data[2].name} placeholder={data[2].placeholder} />
        <LabelChooseBlock label={data[3].label} description={data[3].description}
          isRequired={data[3].isRequired} className={`${styles['choose-block']}`} name={data[3].name} valueArray={data[3].valueArray} type={data[3].type} />
        <LabelChooseBlock label={data[4].label} description={data[4].description}
          isRequired={data[4].isRequired} className={`${styles['choose-block']}`} name={data[4].name} valueArray={data[4].valueArray} type={data[4].type} />
        <LabelChooseBlock label={data[6].label} description={data[6].description}
          isRequired={data[6].isRequired} className={`${styles['choose-block']}`} name={data[6].name} valueArray={data[6].valueArray} type={data[6].type} />
        <LabelInputBlock label={data[7].label} description={data[7].description}
          isRequired={data[7].isRequired} className={`${styles.block}`} name={data[7].name} placeholder={data[7].placeholder} />
        <LabelInputBlock label={data[8].label} description={data[8].description}
          isRequired={data[8].isRequired} className={`${styles.block}`} name={data[8].name} placeholder={data[8].placeholder} />
        <LabelInputBlock label={data[9].label} description={data[9].description}
          isRequired={data[9].isRequired} className={`${styles.block}`} name={data[9].name} placeholder={data[9].placeholder} />
        <LabelChooseBlock label={data[10].label} description={data[10].description}
          isRequired={data[10].isRequired} className={`${styles['choose-block']}`} name={data[10].name} valueArray={data[10].valueArray} type={data[10].type} />
        <LabelChooseBlock label={data[11].label} description={data[11].description}
          isRequired={data[11].isRequired} className={`${styles['choose-block']}`} name={data[11].name} valueArray={data[11].valueArray} type={data[11].type} />
        <LabelChooseBlock label={data[12].label} description={data[12].description}
          isRequired={data[12].isRequired} className={`${styles['choose-block']}`} name={data[12].name} valueArray={data[12].valueArray} type={data[12].type} />
        <LabelChooseBlock label={data[13].label} description={data[13].description}
          isRequired={data[13].isRequired} className={`${styles['choose-block']}`} name={data[13].name} valueArray={data[13].valueArray} type={data[13].type} />
        <LabelInputBlock label={data[14].label} description={data[14].description}
          isRequired={data[14].isRequired} className={`${styles.block}`} name={data[14].name} placeholder={data[14].placeholder} />
        <div className={styles['end-form']}>
          <div><button className={styles.send}>Надіслати</button></div>
          <div><progress id="page" value="1" max="1"></progress><label htmlFor="page">Сторінка 1 з 1</label></div>
          <div><button className={styles.reset}>Очистити форму</button></div>
        </div>
      </form>
    </>
  )
}

export default App
