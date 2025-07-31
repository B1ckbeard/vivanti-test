function Footer() {
  return (
    <footer className="w-auto h-[377px] bottom-0 bg-[#0D446C]">
      <div className="pt-[62px] pl-[43px] text-white text-[16px] leading=[20px]">
        <div className="mb-[88px]">
          <h4 className="mb-[16px]">СВЯЖИТЕСЬ С НАМИ</h4>
          <div className="flex mb-[16px]">
            <img
              src="assets/icon_contacts.png"
              alt="icon_contacts"
              className="w-[24px] mr-[10px]"
            />
            <p>Телефон</p>
          </div>
          <div className="flex">
            <img
              src="assets/icon_location.png"
              alt="icon_location"
              className="w-[24px] mr-[10px]"
            />
            <p>Адрес</p>
          </div>
        </div>
        <p className="leading=[24px]">&copy; 2023 site.RU</p>
        <p className="leading=[24px] mb-[10px]">Все права защищены</p>
        <p className="text-[13px] leading=[16px] mb-[38px]">
          Дата последнего обновления сайта: 07.02.2023
        </p>
      </div>
    </footer>
  );
}

export default Footer;
