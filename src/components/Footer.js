const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-500">
      <div className="border-b-2 px-8 py-4">Indonesia</div>
      <div className="flex flex-col items-center px-5 md:flex-row md:justify-between">
        <ul className="flex items-center">
          <li className="cursor-pointer p-4 hover:underline">About</li>
          <li className="cursor-pointer p-4 hover:underline">Advertising</li>
          <li className="cursor-pointer p-4 hover:underline">Business</li>
          <li className="cursor-pointer p-4 hover:underline">
            How Search works
          </li>
        </ul>
        <ul className="flex items-center">
          <li className="cursor-pointer p-4 hover:underline">Privacy</li>
          <li className="cursor-pointer p-4 hover:underline">Terms</li>
          <li className="cursor-pointer p-4 hover:underline">Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
