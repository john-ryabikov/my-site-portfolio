const MainPrem = ({prem}) => {
    return (
        <p className='relative w-[360px] xl:w-[420px] flex flex-row items-center justify-center gap-3'> 
            <img src="/img/Icons/main-prem_icon.svg" alt="v" />
            <span className='relative text-[11px] xl:text-[12px] text-[#B2B5BA]'><b className='font-[600] text-base xl:text-sm text-[#ffffff]'>{prem.prem}</b> - {prem.text}</span>
        </p>
    )
}

export default MainPrem