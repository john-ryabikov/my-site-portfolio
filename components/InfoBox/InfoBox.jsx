const InfoBox = ({children}) => {
  
  return (
    <div className='relative w-[320px] xl:w-auto flex flex-col items-center xl:items-start justify-center'>
        <img className='absolute w-[450px] xl:w-auto top-0 left-[-290px] xl:left-[-415px]' src="img/Icons/dots.svg" alt="Dots"/>
        {children}
    </div>
  )
}

export default InfoBox
