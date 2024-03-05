/* eslint-disable react/prop-types */
// Sidebar.js

const Sidebar = ({ isDarkMode }) => {
  const sidebarClasses = `w-64 lg:w-16 bg-${isDarkMode ? 'gray-800' : 'gray-200'} text-white`;

  return (
    <div className={sidebarClasses}>
      <div className="p-4">Sidebar Content</div>
    </div>
  );
};

export default Sidebar;
