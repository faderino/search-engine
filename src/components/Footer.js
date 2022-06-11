const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-500">
      <div className="border-b-2 px-8 py-4">Indonesia</div>
      <div className="flex flex-col items-center px-5 md:flex-row md:justify-between">
        <ul className="flex items-center">
          <li className="cursor-pointer p-2 text-sm hover:underline sm:p-4 sm:text-base">
            About
          </li>
          <li className="cursor-pointer p-2 text-sm hover:underline sm:p-4 sm:text-base">
            Advertising
          </li>
          <li className="cursor-pointer p-2 text-sm hover:underline sm:p-4 sm:text-base">
            Business
          </li>
          <li className="cursor-pointer p-2 text-sm hover:underline sm:p-4 sm:text-base">
            How Search works
          </li>
        </ul>
        <ul className="flex items-center">
          <li className="cursor-pointer p-2 text-sm hover:underline sm:p-4 sm:text-base">
            Privacy
          </li>
          <li className="cursor-pointer p-2 text-sm hover:underline sm:p-4 sm:text-base">
            Terms
          </li>
          <li className="cursor-pointer p-2 text-sm hover:underline sm:p-4 sm:text-base">
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
