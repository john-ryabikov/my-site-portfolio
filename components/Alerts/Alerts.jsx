import { useAlerts } from "@/data/store";

export const Alerts = () => {

    const { showAlertForm, showAlertBrif, showAlertError } = useAlerts()

    const alerts = [
        {
          showAlert: showAlertForm,
          icon: "img/Alerts/done.svg",
          text: "Заявка успешно отправлена!"
        },
        {
          showAlert: showAlertBrif,
          icon: "img/Alerts/done.svg",
          text: "Заявка успешно отправлена!"
        },
        {
          showAlert: showAlertError,
          icon: "img/Alerts/warning.svg",
          text: "Не все данные введены!"
        },
    ]

    return (
        <>
          {alerts.map((alert, i) => (
              <div key={i} className={`fixed w-[290px] xl:w-auto right-1/2 translate-x-1/2 xl:translate-x-0 xl:right-[30px] p-[14px] rounded-[25px] bg-[rgba(22,22,22,0.9)] transition-all z-[999] flex flex-row items-center justify-center ${!alert.showAlert ? 'bottom-[-320px]' : 'bottom-[20px]'}`}>
                  <img className='relative inline-block mr-3 w-[18px]' src={alert.icon} alt="Icon" />
                  <p className='text-base xl:text-lg'>{alert.text}</p>
              </div>
          ))}
        </>
    )
}

export default Alerts